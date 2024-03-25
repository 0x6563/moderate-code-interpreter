"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Expressions = void 0;
const value_1 = require("../shared/value");
exports.Expressions = {
    number: {
        'like': TypeSafeCall(['number', 'number'], (a, b) => a === b),
        '==': TypeSafeCall(['number', 'number'], (a, b) => a === b),
        '!=': TypeSafeCall(['number', 'number'], (a, b) => a != b),
        '>': TypeSafeCall(['number', 'number'], (a, b) => a > b),
        '>=': TypeSafeCall(['number', 'number'], (a, b) => a >= b),
        '<=': TypeSafeCall(['number', 'number'], (a, b) => a <= b),
        '<': TypeSafeCall(['number', 'number'], (a, b) => a < b),
        '-': TypeSafeCall(['number', 'number'], (a, b) => a - b),
        '+': TypeSafeCall(['number', 'number'], (a, b) => a + b),
        '/': TypeSafeCall(['number', 'number'], (a, b) => a / b),
        '%': TypeSafeCall(['number', 'number'], (a, b) => a % b),
        '*': TypeSafeCall(['number', 'number'], (a, b) => a * b),
        'within': TypeSafeCall(['number', 'number', 'number'], (a, b, c) => b <= a && a <= c),
        'between': TypeSafeCall(['number', 'number', 'number'], (a, b, c) => b < a && a < c)
    },
    string: {
        'contains': TypeSafeCall(['string', 'string'], (a, b) => a.includes(b)),
        'like': TypeSafeCall(['string', 'string'], (a, b) => new RegExp(b).test(a)),
        '==': TypeSafeCall(['string', 'string'], (a, b) => a === b),
        '!=': TypeSafeCall(['string', 'string'], (a, b) => a != b),
        '..': TypeSafeCall(['string', 'string'], (a, b) => a + b),
    },
    boolean: {
        'like': TypeSafeCall(['boolean', 'boolean'], (a, b) => a === b),
        '==': TypeSafeCall(['boolean', 'boolean'], (a, b) => a === b),
        '!=': TypeSafeCall(['boolean', 'boolean'], (a, b) => a != b),
        '!': ([a]) => !a,
        'not': ([a]) => !a,
    },
    array: {
        'contains': TypeSafeCall(['array', 'any'], (a, b) => a.includes(b)),
        'intersects': TypeSafeCall(['array', 'array'], () => NotImplemented('intersects')),
        'like': TypeSafeCall(['array', 'array'], (a, b) => a == b),
        '==': TypeSafeCall(['array', 'array'], (a, b) => a === b),
        '!=': TypeSafeCall(['array', 'array'], (a, b) => a != b),
        '..': TypeSafeCall(['array', 'array'], (a, b) => (0, value_1.Value)('array', [...a, ...b]), true),
        '+': TypeSafeCall(['array', 'any'], (a, b) => (0, value_1.Value)('array', a.push(b) && a), true),
    },
    object: {
        'like': TypeSafeCall(['object', 'object'], (a, b) => a == b),
        '==': TypeSafeCall(['object', 'object'], (a, b) => a === b),
        '!=': TypeSafeCall(['object', 'object'], (a, b) => a != b),
        '..': TypeSafeCall(['object', 'object'], (a, b) => ({ ...a, ...b })),
    }
};
function TypeSafeCall(types, call, preserve) {
    return (values) => {
        const args = [];
        for (let i = 0; i < types.length; i++) {
            const t = types[i];
            const v = values[i];
            if (t != 'any' && t != v.kind) {
                return (0, value_1.Control)('error', `Invalid Type Error: Expected ${t} Recieved: ${v.kind}`);
            }
            args.push(v.value);
        }
        const result = call(...args);
        return preserve ? result : (0, value_1.DynamicValue)(result);
    };
}
function NotImplemented(operator) {
    return (0, value_1.Control)('error', `This "${operator}" operator is not yet implemented.`);
}
//# sourceMappingURL=operators.js.map