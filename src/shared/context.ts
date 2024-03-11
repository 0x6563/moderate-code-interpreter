import { ControlType, Scope, Statement, ValueType } from "../types";
import { Control } from "./value";
export class Context {
    scope: Scope = Object.create(null);
    private stack: Context[];

    constructor(stack: Context[] = []) {
        this.stack = [...stack, this]
    }

    fork() {
        return new Context(this.stack);
    }

    declare(kind: 'var' | 'const', key: string, value: ValueType): ControlType | void {
        if (key in this.scope) {
            return Control('error', `Can't redeclare variable: ${key}`);
        }
        this.scope[key] = { kind, value };
    }

    assign(key: string, value: ValueType): ControlType | void {
        const context = this.getContext(key);
        if (!context) {
            return Control('error', `Variable not declared: ${key}`);
        }
        if (context.scope[key].kind == 'const') {
            return Control('error', `Can't resassign variable: ${key}`);
        }
        context.scope[key].value = value;
    }

    get(key: string): ValueType | ControlType {
        const state = this.getContext(key);
        if (!state) {
            return Control('error', `Variable not declared: ${key}`);
        }
        return state.scope[key].value;
    }

    private getContext(key: string): Context | void {
        let i = this.stack.length;
        while (--i >= 0) {
            if (key in this.stack[i].scope) {
                return this.stack[i];
            }
        }
    }
}