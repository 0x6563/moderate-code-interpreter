"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Query = void 0;
const runner_1 = require("../runner");
const iterable_1 = require("../shared/iterable");
const value_1 = require("../shared/value");
const sortable_1 = require("../shared/sortable");
function Query(context, query) {
    const source = (0, runner_1.ResolveValue)(context, query.source.iterable.iterable);
    if (!source)
        return (0, value_1.Control)('error', `Unable to query`);
    if (source.type == 'control')
        return source;
    if (source.kind != 'array')
        return (0, value_1.Control)('error', 'Unable to query non-array');
    const low = query?.slice?.low ? (0, runner_1.ResolveValue)(context, query.slice.low) : (0, value_1.Value)('number', 0);
    if (low.type == 'control')
        return low;
    if (low.kind != 'number')
        return (0, value_1.Control)('error', `Unable to slice by ${low.kind}`);
    const high = query?.slice?.high ? (0, runner_1.ResolveValue)(context, query.slice.high) : (0, value_1.Value)('number', source.value.length);
    if (high.type == 'control')
        return high;
    if (high.kind != 'number')
        return (0, value_1.Control)('error', `Unable to slice by ${high.kind}`);
    const include = query.filter ? (s) => (0, value_1.Truthy)((0, runner_1.ResolveValue)(s, query.filter)) : () => true;
    const r = [];
    const sortMap = new WeakMap();
    const sorter = new sortable_1.Sortable((a, b) => {
        const aa = sortMap.get(a);
        const bb = sortMap.get(b);
        if (aa == bb)
            return 0;
        if (aa > bb) {
            return 1;
        }
        if (bb < aa) {
            return -1;
        }
    }, low.value, high.value);
    const loop = (0, iterable_1.IterateIterable)(context, query.source.iterable, (nested, k) => {
        const included = include(nested);
        if (typeof included == 'object')
            return included;
        if (included) {
            const o = nested.get(query.source.iterable.v);
            r.push(o);
            if (query.sort) {
                const sortable = (0, runner_1.ResolveValue)(nested, query.sort.expression);
                if (sortable.type == 'control')
                    return sortable;
                sortMap.set(o, sortable.value);
                sorter.add(o);
            }
            else {
                sorter.set.push(o);
            }
            if (query.yield.kind === 'first') {
                return (0, value_1.Control)('break', o);
            }
        }
    });
    if (loop && loop.kind == 'error') {
        return loop;
    }
    const sorted = sorter.extract();
    const result = [];
    const loop2 = (0, iterable_1.Iterate)(context, (0, value_1.Value)('array', sorted), query.source.iterable.k, query.source.iterable.v, (nested, k) => {
        const r = (0, runner_1.ResolveValue)(nested, query.yield.value);
        if (r.type == 'control')
            return r;
        result.push(r.value);
    });
    if (loop2 && loop2.kind == 'error') {
        return loop2;
    }
    if (query.yield.kind === 'first') {
        return result[0];
    }
    return (0, value_1.Value)('array', result);
}
exports.Query = Query;
//# sourceMappingURL=query.js.map