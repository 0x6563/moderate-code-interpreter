import { ResolveStatements, ResolveValue } from "../runner";
import { Context } from "../shared/context";
import { Control, Value } from "../shared/value";
import { CallExpression } from "../types";

export function Call(context: Context, expression: CallExpression) {
    const r = context.get(expression.name);
    if (r.type == 'control') {
        return r;
    }
    if (r.kind != 'function') {
        return Control('error', `${expression.name} is not callable`)
    }
    const callable = r.value;
    const sub = callable.context.fork();
    for (let i = 0; i < callable.args.length; i++) {
        if (expression.args[i]) {
            const v = ResolveValue(context, expression.args[i]);
            if (v.type == 'control') {
                return v;
            }
            const dec = sub.declare('var', callable.args[i].name, v);
            if (dec) {
                return dec;
            }
        } else if (callable.args[i].default) {
            const dec = sub.declare('var', callable.args[i].name, callable[i].default);
            if (dec) {
                return dec;
            }
        }
    }

    const value = ResolveStatements(sub, callable.statements);
    if (value) {
        if (value.kind == 'return') {
            return value.value;
        }
        return value;
    }
    return Value('undefined', undefined);
}