import type { ControlType, ValueType } from "../types.ts";
import { ArrayAccessor, Control, DynamicValue, Value } from "../shared/value.ts";

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
        '!': TypeSafeCall(['boolean'], (a) => !a.value),
        'not': TypeSafeCall(['boolean'], (a) => !a.value),
    },
    array: {
        'contains': TypeSafeCall(['array', 'any'], (a, b) => a.value.includes(b)),
        'intersects': TypeSafeCall(['array', 'array'], () => NotImplemented('intersects')),
        'like': TypeSafeCall(['array', 'array'], (a, b) => a.value == b.value),
        '==': TypeSafeCall(['array', 'array'], (a, b) => a.value === b.value),
        '!=': TypeSafeCall(['array', 'array'], (a, b) => a.value != b.value),
        '..': TypeSafeCall(['array', 'array'], (a, b) => {
            const result: ValueType[] = [];
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
}

function TypeSafeCall(types: string[], call: (...args: any[]) => any, preserve?: boolean): (values: ValueType[]) => ValueType | ControlType {
    return (values: ValueType[]) => {
        const args: ValueType[] = [];
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
    }
}

function NotImplemented(operator) {
    return Control('error', `This "${operator}" operator is not yet implemented.`);
}