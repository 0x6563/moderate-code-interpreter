import { ResolveStatements } from "../index";
import { Context } from "../shared/context";
import { IterateIterable } from "../shared/iterable";
import { StatementEach } from "../types";

export function Scan(context: Context, statement: StatementEach) {
    return IterateIterable(context, statement, (nested, k) => ResolveStatements(nested, statement.statements));
}