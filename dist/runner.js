import { Control } from "./shared/value";
import { Context } from "./shared/context";
import { Assignment } from "./statements/assignment";
import { Declare } from "./statements/declare";
import { If } from "./statements/if";
import { Scan } from "./statements/scan";
import { For } from "./statements/for";
import { While } from "./statements/while";
import { Operators } from "./expressions/operators";
import { Literals } from "./expressions/literals";
import { Logical } from "./expressions/logical";
import { ObjectLiteral } from "./expressions/object";
import { Reference } from "./expressions/reference";
import { Query } from "./expressions/query";
import { ArrayLiteral } from "./expressions/array";
import { Call } from "./expressions/call";
export function Run(tree, data) {
    const context = new Context();
    if (data)
        for (const key in data) {
            context.declare('var', key, data[key]);
        }
    return Resolve(context, tree);
}
export function Resolve(context, tree) {
    if (tree.expression) {
        return ResolveValue(context, tree.expression);
    }
    if (tree.statements) {
        const r = ResolveStatements(context, tree.statements);
        if (r) {
            return r.kind == 'break' || r.kind == 'return' ? r.value : ({ result: r, scope: context.scope });
        }
        return { type: 'scope', scope: context.scope };
    }
}
export function ResolveStatements(context, statements) {
    for (const statement of statements) {
        let r = ResolveStatement(context, statement);
        if (r) {
            return r;
        }
    }
}
export function ResolveStatement(context, statement) {
    if (statement.type == 'assignment') {
        return Assignment(context, statement);
    }
    if (statement.type == 'declare') {
        return Declare(context, statement);
    }
    if (statement.type == 'conditional') {
        return If(context, statement);
    }
    if (statement.type == 'loop') {
        if (statement.kind == 'scan') {
            return Scan(context, statement);
        }
        if (statement.kind == 'for') {
            return For(context, statement);
        }
        if (statement.kind == 'while') {
            return While(context, statement);
        }
    }
    if (statement.type == 'control') {
        if (statement.kind == 'break' || statement.kind == 'return') {
            return Control(statement.kind, ResolveValue(context, statement.value));
        }
        return statement;
    }
    return Control('error', `Unhandled Statement: ${statement?.type}`);
}
export function ResolveValue(context, obj) {
    if (obj.type == 'value') {
        return obj;
    }
    if (obj.type == 'literal') {
        if (!Literals[obj.kind]) {
            return Control('error', `Unknown Literal Type ${obj.kind}`);
        }
        return Literals[obj.kind](obj.value);
    }
    if (obj.type == 'operation') {
        const operands = [];
        for (const o of obj.operands) {
            const r = ResolveValue(context, o);
            if (r.type == 'control')
                return r;
            operands.push(r);
        }
        if (!(Operators?.[operands[0].kind]?.[obj.operator])) {
            return Control('error', `Unknown Operator Type ${obj.operator} for ${operands[0].kind}`);
        }
        return Operators[operands[0].kind][obj.operator](operands);
    }
    if (obj.type == 'call') {
        return Call(context, obj);
    }
    if (obj.type === 'query') {
        return Query(context, obj);
    }
    if (obj.type === 'object') {
        return ObjectLiteral(context, obj);
    }
    if (obj.type === 'array') {
        return ArrayLiteral(context, obj);
    }
    if (obj.type == 'reference') {
        return Reference(context, obj);
    }
    if (obj.type == 'logical') {
        return Logical[obj.operator](context, obj.operands);
    }
    return Control('error', `Unhandled Expression: ${obj?.type}`);
}
//# sourceMappingURL=runner.js.map