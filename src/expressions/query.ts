import { ResolveValue } from "../index";
import { QueryExpression, ValueType } from "../types";
import { Iterate, IterateIterable } from "../shared/iterable";
import { Context } from "../shared/context";
import { Control, Truthy, Value } from "../shared/value";
import { Sortable } from "../shared/sortable";


export function Query(context: Context, query: QueryExpression) {
    const source = ResolveValue(context, query.source.iterable.iterable);
    if (!source)
        return Control('error', `Unable to query`)

    if (source.type == 'control')
        return source;
    if (source.kind != 'array')
        return Control('error', 'Unable to query non-array');

    const low = query?.slice?.low ? ResolveValue(context, query.slice.low) : Value('number', 0);
    if (low.type == 'control')
        return low;
    if (low.kind != 'number')
        return Control('error', `Unable to slice by ${low.kind}`);

    const high = query?.slice?.high ? ResolveValue(context, query.slice.high) : Value('number', source.value.length);
    if (high.type == 'control')
        return high;

    if (high.kind != 'number')
        return Control('error', `Unable to slice by ${high.kind}`);

    const include = query.filter ? (s: Context) => Truthy(ResolveValue(s, query.filter)) : () => true;
    const r = [];
    const sortMap = new WeakMap();
    const sorter = new Sortable((a, b) => {
        const aa = sortMap.get(a);
        const bb = sortMap.get(b);
        if (aa == bb)
            return 0;

        if (aa > bb) {
            return 1;
        }
        if (bb < aa) {
            return -1
        }
    }, low.value, high.value);
    const loop = IterateIterable(context, query.source.iterable, (nested, k) => {
        const included = include(nested);
        if (typeof included == 'object')
            return included;

        if (included) {
            const o = nested.get(query.source.iterable.v);
            r.push(o);

            if (query.sort) {
                const sortable = ResolveValue(nested, query.sort.expression);
                if (sortable.type == 'control')
                    return sortable;
                sortMap.set(o, sortable.value);
                sorter.add(o);
            } else {
                sorter.set.push(o);
            }

            if (query.yield.kind === 'first') {
                return Control('break', o as ValueType);
            }
        }
    });

    if (loop && loop.kind == 'error') {
        return loop;
    }

    const sorted = sorter.extract();
    const result = [];

    const loop2 = Iterate(context, Value('array', sorted), query.source.iterable.k, query.source.iterable.v, (nested, k) => {
        const r = ResolveValue(nested, query.yield.value);
        if (r.type == 'control')
            return r;
        result.push(r.value);
    })


    if (loop2 && loop2.kind == 'error') {
        return loop2;
    }

    if (query.yield.kind === 'first') {
        return result[0];
    }

    return Value('array', result);
}


