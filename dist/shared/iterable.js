import { ResolveValue } from "../runner.js";
import { Control, Value } from "./value.js";
import { Context } from "./context.js";
export function IterateIterable(context, iterable, callback) {
    return Iterate(context, ResolveValue(context, iterable.iterable), iterable.k, iterable.v, callback);
}
export function Iterate(context, value, keyName, valueName, callback) {
    let source;
    if (value.kind == 'array') {
        source = ArrayIterate(value.value);
    }
    else if (value.kind == 'object') {
        source = ObjectIterate(value.value);
    }
    else {
        return Control('error', 'Non-iterable value');
    }
    for (const [key, value] of source) {
        const nested = context.fork();
        if (keyName) {
            nested.declare('var', keyName, key);
        }
        nested.declare('var', valueName, value);
        const r = callback(nested, keyName);
        if (r) {
            return r;
        }
    }
}
function* ArrayIterate(ary) {
    const length = ary.length.value;
    for (let i = 0; i < length; i++) {
        yield [Value('number', i), ary[i]];
    }
}
function* ObjectIterate(object) {
    for (const key in object) {
        yield [Value('string', key), object[key]];
    }
}
//# sourceMappingURL=iterable.js.map