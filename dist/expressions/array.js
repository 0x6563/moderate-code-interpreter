"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayLiteral = void 0;
const runner_1 = require("../runner");
const value_1 = require("../shared/value");
function ArrayLiteral(context, expression) {
    const result = [];
    for (const prop of expression.items) {
        const value = (0, runner_1.ResolveValue)(context, prop);
        if (value.type == 'control') {
            return value;
        }
        result.push(value);
    }
    return (0, value_1.Value)('array', result);
}
exports.ArrayLiteral = ArrayLiteral;
//# sourceMappingURL=array.js.map