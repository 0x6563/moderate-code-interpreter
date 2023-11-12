
import { ResolveValue } from "../index";
import { ControlType, Expression, ValueType } from "../types";
import { Control, DynamicValue } from "./value";
import { Context } from "./context";

export function IterateIterable(context: Context, iterable: { iterable: Expression, k?: string, v: string }, callback: IterableCallback): ControlType | void {
    return Iterate(context, ResolveValue(context, iterable.iterable), iterable.k, iterable.v, callback);
}

export function Iterate(context: Context, value: ControlType | ValueType, keyName: string, valueName: string, callback: IterableCallback): ControlType | void {
    let source;
    if (value.kind == 'array') {
        source = ArrayIterate(value.value);
    } else if (value.kind == 'object') {
        source = ObjectIterate(value.value);
    } else {
        return Control('error', 'Non-iterable value');
    }

    for (const [key, value] of source) {
        const nested = context.fork();

        if (keyName) {
            nested.declare(keyName, DynamicValue(key) as any);
        }

        nested.declare(valueName, DynamicValue(value) as any);
        const r = callback(nested, keyName);
        if (r) {
            return r;
        }
    }
}
export type IterableCallback = (context: Context, k: string) => ControlType | void;

function* ArrayIterate(ary: any[]) {
    for (let i = 0; i < ary.length; i++) {
        yield [i, ary[i]]
    }
}

function* ObjectIterate(object: {}) {
    for (const key in object) {
        yield [key, object[key]];
    }
}