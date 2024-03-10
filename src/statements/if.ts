import { ResolveStatements, ResolveValue } from "../index";
import { Context } from "../shared/context";
import { Truthy } from "../shared/value";
import { StatementConditional } from "../types";

export function If(context: Context, statement: StatementConditional) {
    for (const st of statement.statements) {
        const r = !st.condition || Truthy(ResolveValue(context, st.condition))
        if (typeof r == 'object') {
            return r;
        }
        if (r) {
            const nested = context.fork();
            return ResolveStatements(nested, st.statements);
        }
    }
}