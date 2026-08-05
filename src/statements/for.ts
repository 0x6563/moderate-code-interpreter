import { ResolveStatement, ResolveStatements, ResolveValue } from "../runner.ts";
import { Context } from "../shared/context.ts";
import { Truthy } from "../shared/value.ts";
import type { StatementFor } from "../types.ts";

export function For(context: Context, statement: StatementFor) {
    const nested = context.fork();
    const r = ResolveStatement(nested, statement.base);
    if (r && r.type == 'control') {
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
            if (step && step.type == 'control') {
                return step;
            }
        }
    } while (truthy)
} 