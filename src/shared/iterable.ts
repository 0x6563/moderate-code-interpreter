
import { ResolveValue } from "../runner";
import { ControlType, Expression, ValueType } from "../types";
import { Control, Value } from "./value";
import { Context } from "./context";

export function IterateIterable(context: Context, iterable: { iterable: Expression, k?: string, v: string }, callback: IterableCallback): ControlType | void {
    return Iterate(context, ResolveValue(context, iterable.iterable), iterable.k, iterable.v, callback);
}

export function Iterate(context: Context, value: ControlType | ValueType, keyName: string, valueName: string, callback: IterableCallback): ControlType | void {
    let source: Iterable<[ValueType, ValueType]>;
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
            nested.declare('var', keyName, key);
        }

        nested.declare('var', valueName, value as any);
        const r = callback(nested, keyName);
        if (r) {
            return r;
        }
    }
}
export type IterableCallback = (context: Context, k: string) => ControlType | void;

function* ArrayIterate(ary: ValueType[]): Generator<[ValueType, ValueType], void, void> {
    for (let i = 0; i < ary.length; i++) {
        yield [Value('number', i), ary[i]]
    }
}

function* ObjectIterate(object: { [key: string]: ValueType }): Generator<[ValueType, ValueType], void, void> {
    for (const key in object) {
        yield [Value('string', key), object[key]];
    }
}