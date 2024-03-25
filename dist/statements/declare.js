import { ResolveValue } from "../runner";
export function Declare(context, statement) {
    if (statement.kind === 'function') {
        return context.declare('const', statement.name, { type: 'value', kind: 'function', value: { context, args: statement.args, statements: statement.statements } });
    }
    const r = ResolveValue(context, statement.value);
    if (r.type == 'control')
        return r;
    return context.declare(statement.kind, statement.name, r);
}
//# sourceMappingURL=declare.js.map