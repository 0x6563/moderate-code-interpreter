"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Call = void 0;
const runner_1 = require("../runner");
const value_1 = require("../shared/value");
function Call(context, expression) {
    const r = context.get(expression.name);
    if (r.type == 'control') {
        return r;
    }
    if (r.kind != 'function') {
        return (0, value_1.Control)('error', `${expression.name} is not callable`);
    }
    const callable = r.value;
    const sub = callable.context.fork();
    for (let i = 0; i < callable.args.length; i++) {
        if (expression.args[i]) {
            const v = (0, runner_1.ResolveValue)(context, expression.args[i]);
            if (v.type == 'control') {
                return v;
            }
            const dec = sub.declare('var', callable.args[i].name, v);
            if (dec) {
                return dec;
            }
        }
        else if (callable.args[i].default) {
            const dec = sub.declare('var', callable.args[i].name, callable[i].default);
            if (dec) {
                return dec;
            }
        }
    }
    const value = (0, runner_1.ResolveStatements)(sub, callable.statements);
    if (value) {
        if (value.kind == 'return') {
            return value.value;
        }
        return value;
    }
    return (0, value_1.Value)('undefined', undefined);
}
exports.Call = Call;
//# sourceMappingURL=call.js.map