import { ArrayAccessor, Control, DynamicValue, Value } from "../shared/value.js";
export const Operators = {
    number: {
        'like': TypeSafeCall(['number', 'number'], (a, b) => a.value === b.value),
        '==': TypeSafeCall(['number', 'number'], (a, b) => a.value === b.value),
        '!=': TypeSafeCall(['number', 'number'], (a, b) => a.value != b.value),
        '>': TypeSafeCall(['number', 'number'], (a, b) => a.value > b.value),
        '>=': TypeSafeCall(['number', 'number'], (a, b) => a.value >= b.value),
        '<=': TypeSafeCall(['number', 'number'], (a, b) => a.value <= b.value),
        '<': TypeSafeCall(['number', 'number'], (a, b) => a.value < b.value),
        '-': TypeSafeCall(['number', 'number'], (a, b) => a.value - b.value),
        '+': TypeSafeCall(['number', 'number'], (a, b) => a.value + b.value),
        '/': TypeSafeCall(['number', 'number'], (a, b) => a.value / b.value),
        '%': TypeSafeCall(['number', 'number'], (a, b) => a.value % b.value),
        '*': TypeSafeCall(['number', 'number'], (a, b) => a.value * b.value),
        'within': TypeSafeCall(['number', 'number', 'number'], (a, b, c) => b.value <= a.value && a.value <= c.value),
        'between': TypeSafeCall(['number', 'number', 'number'], (a, b, c) => b.value < a.value && a.value < c.value)
    },
    string: {
        'contains': TypeSafeCall(['string', 'string'], (a, b) => a.value.includes(b.value)),
        'like': TypeSafeCall(['string', 'string'], (a, b) => new RegExp(b.value).test(a.value)),
        '==': TypeSafeCall(['string', 'string'], (a, b) => a.value === b.value),
        '!=': TypeSafeCall(['string', 'string'], (a, b) => a.value != b.value),
        '..': TypeSafeCall(['string', 'string'], (a, b) => a.value + b.value),
    },
    boolean: {
        'like': TypeSafeCall(['boolean', 'boolean'], (a, b) => a.value === b.value),
        '==': TypeSafeCall(['boolean', 'boolean'], (a, b) => a.value === b.value),
        '!=': TypeSafeCall(['boolean', 'boolean'], (a, b) => a.value != b.value),
        '!': ([a]) => !a,
        'not': ([a]) => !a,
    },
    array: {
        'contains': TypeSafeCall(['array', 'any'], (a, b) => a.value.includes(b)),
        'intersects': TypeSafeCall(['array', 'array'], () => NotImplemented('intersects')),
        'like': TypeSafeCall(['array', 'array'], (a, b) => a.value == b.value),
        '==': TypeSafeCall(['array', 'array'], (a, b) => a.value === b.value),
        '!=': TypeSafeCall(['array', 'array'], (a, b) => a.value != b.value),
        '..': TypeSafeCall(['array', 'array'], (a, b) => {
            const result = [];
            const lengthA = a.value.length.value;
            for (let i = 0; i < lengthA; i++) {
                result.push(a.value[i]);
            }
            const lengthB = b.value.length.value;
            for (let i = 0; i < lengthB; i++) {
                result.push(b.value[i]);
            }
            return Value('array', ArrayAccessor(result));
        }, true),
        '+': TypeSafeCall(['array', 'any'], (a, b) => {
            a.value[a.value.length.value] = b;
            return a;
        }, true),
    },
    object: {
        'like': TypeSafeCall(['object', 'object'], (a, b) => a.value == b.value),
        '==': TypeSafeCall(['object', 'object'], (a, b) => a.value === b.value),
        '!=': TypeSafeCall(['object', 'object'], (a, b) => a.value != b.value),
        '..': TypeSafeCall(['object', 'object'], (a, b) => ({ ...a.value, ...b.value })),
    }
};
function TypeSafeCall(types, call, preserve) {
    return (values) => {
        const args = [];
        for (let i = 0; i < types.length; i++) {
            const t = types[i];
            const v = values[i];
            if (t != 'any' && t != v.kind) {
                return Control('error', `Invalid Type Error: Expected ${t} Recieved: ${v.kind}`);
            }
            args.push(v);
        }
        const result = call(...args);
        return preserve ? result : DynamicValue(result);
    };
}
function NotImplemented(operator) {
    return Control('error', `This "${operator}" operator is not yet implemented.`);
}
//# sourceMappingURL=operators.js.map