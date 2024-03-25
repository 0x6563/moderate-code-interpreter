"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Context = void 0;
const value_1 = require("./value");
class Context {
    scope = Object.create(null);
    stack;
    constructor(stack = []) {
        this.stack = [...stack, this];
    }
    fork() {
        return new Context(this.stack);
    }
    declare(kind, key, value) {
        if (key in this.scope) {
            return (0, value_1.Control)('error', `Can't redeclare variable: ${key}`);
        }
        this.scope[key] = { kind, value };
    }
    assign(key, value) {
        const context = this.getContext(key);
        if (!context) {
            return (0, value_1.Control)('error', `Variable not declared: ${key}`);
        }
        if (context.scope[key].kind == 'const') {
            return (0, value_1.Control)('error', `Can't resassign variable: ${key}`);
        }
        context.scope[key].value = value;
    }
    get(key) {
        const state = this.getContext(key);
        if (!state) {
            return (0, value_1.Control)('error', `Variable not declared: ${key}`);
        }
        return state.scope[key].value;
    }
    getContext(key) {
        let i = this.stack.length;
        while (--i >= 0) {
            if (key in this.stack[i].scope) {
                return this.stack[i];
            }
        }
    }
}
exports.Context = Context;
//# sourceMappingURL=context.js.map