import type { ControlType, ValueType } from "../types.ts";
export declare const Operators: {
    number: {
        like: (values: ValueType[]) => ValueType | ControlType;
        '==': (values: ValueType[]) => ValueType | ControlType;
        '!=': (values: ValueType[]) => ValueType | ControlType;
        '>': (values: ValueType[]) => ValueType | ControlType;
        '>=': (values: ValueType[]) => ValueType | ControlType;
        '<=': (values: ValueType[]) => ValueType | ControlType;
        '<': (values: ValueType[]) => ValueType | ControlType;
        '-': (values: ValueType[]) => ValueType | ControlType;
        '+': (values: ValueType[]) => ValueType | ControlType;
        '/': (values: ValueType[]) => ValueType | ControlType;
        '%': (values: ValueType[]) => ValueType | ControlType;
        '*': (values: ValueType[]) => ValueType | ControlType;
        within: (values: ValueType[]) => ValueType | ControlType;
        between: (values: ValueType[]) => ValueType | ControlType;
    };
    string: {
        contains: (values: ValueType[]) => ValueType | ControlType;
        like: (values: ValueType[]) => ValueType | ControlType;
        '==': (values: ValueType[]) => ValueType | ControlType;
        '!=': (values: ValueType[]) => ValueType | ControlType;
        '..': (values: ValueType[]) => ValueType | ControlType;
    };
    boolean: {
        like: (values: ValueType[]) => ValueType | ControlType;
        '==': (values: ValueType[]) => ValueType | ControlType;
        '!=': (values: ValueType[]) => ValueType | ControlType;
        '!': (values: ValueType[]) => ValueType | ControlType;
        not: (values: ValueType[]) => ValueType | ControlType;
    };
    array: {
        contains: (values: ValueType[]) => ValueType | ControlType;
        intersects: (values: ValueType[]) => ValueType | ControlType;
        like: (values: ValueType[]) => ValueType | ControlType;
        '==': (values: ValueType[]) => ValueType | ControlType;
        '!=': (values: ValueType[]) => ValueType | ControlType;
        '..': (values: ValueType[]) => ValueType | ControlType;
        '+': (values: ValueType[]) => ValueType | ControlType;
    };
    object: {
        like: (values: ValueType[]) => ValueType | ControlType;
        '==': (values: ValueType[]) => ValueType | ControlType;
        '!=': (values: ValueType[]) => ValueType | ControlType;
        '..': (values: ValueType[]) => ValueType | ControlType;
    };
};
