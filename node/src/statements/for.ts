import { ResolveStatement, ResolveStatements, ResolveValue } from "../index";
import { Context } from "../shared/context";
import { Truthy } from "../shared/value";
import { StatementFor } from "../types";

export function For(context: Context, statement: StatementFor) {
    const nested = context.fork();
    const r = ResolveStatement(nested, statement.base);
    if (r.type == 'control') {
        return r;
    }

    let truthy;
    do {
        truthy = !statement.condition || Truthy(ResolveValue(context, statement.condition));

        if (typeof truthy === 'object')
            return truthy;

        if (truthy) {
            const body = ResolveStatements(nested.fork(), statement.statements);
            if (body) {
                if (body.kind === 'break') {
                    return;
                }
                return body;
            }

            const step = ResolveStatement(nested, statement.step);
            if (step.type == 'control') {
                return step;
            }
        }
    } while (truthy)
} 