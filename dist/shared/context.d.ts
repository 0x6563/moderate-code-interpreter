import { ControlType, Scope, ValueType } from "../types";
export declare class Context {
    scope: Scope;
    private stack;
    constructor(stack?: Context[]);
    fork(): Context;
    declare(kind: 'var' | 'const', key: string, value: ValueType): ControlType | void;
    assign(key: string, value: ValueType): ControlType | void;
    get(key: string): ValueType | ControlType;
    private getContext;
}
