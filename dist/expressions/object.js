"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectLiteral = void 0;
const runner_1 = require("../runner");
const value_1 = require("../shared/value");
function ObjectLiteral(context, expression) {
    const result = {};
    for (const prop of expression.properties) {
        if ('type' in prop) {
            if (prop.type == 'spread') {
                const value = (0, runner_1.ResolveValue)(context, prop.value);
                if (value.type == 'control') {
                    return value;
                }
                if (value.kind != 'object') {
                    return (0, value_1.Control)('error', 'Cannot spread non-object');
                }
                for (const key in value.value) {
                    result[key] = value.value[key];
                }
            }
        }
        else {
            const value = (0, runner_1.ResolveValue)(context, prop.value);
            if (value.type == 'control') {
                return value;
            }
            result[prop.key] = value;
        }
    }
    return (0, value_1.Wrap)('value', 'object', result);
}
exports.ObjectLiteral = ObjectLiteral;
//# sourceMappingURL=object.js.map