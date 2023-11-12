import { ControlType, ValueType } from "../types";
import { Control } from "./value";

export class Context {
    scope: { [key: string]: ValueType } = Object.create(null);
    private stack: Context[];

    constructor(stack: Context[] = []) {
        this.stack = [...stack, this]
    }

    fork() {
        return new Context(this.stack);
    }

    declare(key: string, value: ValueType): ControlType | void {
        if (key in this.scope) {
            return Control('error', 'Can\'t redeclare variable');
        }
        this.scope[key] = value;
    }

    assign(key: string, value: ValueType): ControlType | void {
        const state = this.getContext(key);
        if (!state) {
            return Control('error', 'Variable not declared');
        }
        state.scope[key] = value;
    }

    get(key: string): ValueType | ControlType {
        const state = this.getContext(key);
        if (!state) {
            return Control('error', 'Variable not declared');
        }
        return state.scope[key];
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