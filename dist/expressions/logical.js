"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logical = void 0;
const runner_1 = require("../runner");
const value_1 = require("../shared/value");
exports.Logical = {
    'all': (context, operands) => {
        for (let i = 0; i < operands.length; i++) {
            const value = (0, runner_1.ResolveValue)(context, operands[i]);
            if (value.type == 'control') {
                return value;
            }
            if (!(0, value_1.Truthy)(value)) {
                return (0, value_1.Value)('boolean', false);
            }
        }
        return (0, value_1.Value)('boolean', true);
    },
    'any': (context, operands) => {
        for (let i = 0; i < operands.length; i++) {
            const value = (0, runner_1.ResolveValue)(context, operands[i]);
            if (value.type == 'control') {
                return value;
            }
            if ((0, value_1.Truthy)(value)) {
                return (0, value_1.Value)('boolean', true);
            }
        }
        return (0, value_1.Value)('boolean', false);
    },
};
//# sourceMappingURL=logical.js.map