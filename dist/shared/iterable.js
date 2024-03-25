"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Iterate = exports.IterateIterable = void 0;
const runner_1 = require("../runner");
const value_1 = require("./value");
function IterateIterable(context, iterable, callback) {
    return Iterate(context, (0, runner_1.ResolveValue)(context, iterable.iterable), iterable.k, iterable.v, callback);
}
exports.IterateIterable = IterateIterable;
function Iterate(context, value, keyName, valueName, callback) {
    let source;
    if (value.kind == 'array') {
        source = ArrayIterate(value.value);
    }
    else if (value.kind == 'object') {
        source = ObjectIterate(value.value);
    }
    else {
        return (0, value_1.Control)('error', 'Non-iterable value');
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
exports.Iterate = Iterate;
function* ArrayIterate(ary) {
    for (let i = 0; i < ary.length; i++) {
        yield [(0, value_1.Value)('number', i), ary[i]];
    }
}
function* ObjectIterate(object) {
    for (const key in object) {
        yield [(0, value_1.Value)('string', key), object[key]];
    }
}
//# sourceMappingURL=iterable.js.map