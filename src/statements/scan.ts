import { ResolveStatements } from "../runner.ts";
import { Context } from "../shared/context.ts";
import { IterateIterable } from "../shared/iterable.ts";
import type { StatementEach } from "../types.ts";

export function Scan(context: Context, statement: StatementEach) {
    return IterateIterable(context, statement, (nested, k) => ResolveStatements(nested, statement.statements));
}