import { Expressions } from "./expressions/operators";
import { Literals } from "./expressions/literals";
import { Logical } from "./expressions/logical";
import { Statement, ValueType, Expression, ControlType } from "./types";
import { Assignment } from "./statements/assignment";
import { Declare } from "./statements/declare";
import { If } from "./statements/if";
import { Each } from "./statements/each";
import { For } from "./statements/for";
import { While } from "./statements/while";
import { Context } from "./shared/context";
import { Control, DynamicValue } from "./shared/value";
import { ObjectLiteral } from "./expressions/object";
import { Reference } from "./expressions/reference";
import { Query } from "./expressions/query";
import { ArrayLiteral } from "./expressions/array";

export function Run(tree: any, data?: any) {
    const context = new Context();
    if (data)
        for (const key in data) {
            context.declare(key, DynamicValue(data[key]));
        }
    return Resolve(context, tree);
}

export function Resolve(context: Context, tree: any) {
    if (tree.expression) {
        return ResolveValue(context, tree.expression);
    }
    if (tree.statements) {
        return ResolveStatements(context, tree.statements);
    }
}

export function ResolveStatements(context: Context, statements: Statement[]) {
    for (const statement of statements) {
        let r = ResolveStatement(context, statement);
        if (r) {
            return r;
        }
    }
}

export function ResolveStatement(context: Context, statement: Statement): any {
    if (statement.type == 'assignment') {
        return Assignment(context, statement)
    }
    if (statement.type == 'declare') {
        return Declare(context, statement)
    }
    if (statement.type == 'conditional') {
        return If(context, statement);
    }
    if (statement.type == 'loop') {
        if (statement.kind == 'each') {
            return Each(context, statement);
        }
        if (statement.kind == 'for') {
            return For(context, statement);
        }
        if (statement.kind == 'while') {
            return While(context, statement);
        }
    }

    return Control('error', `Unhandled Statement: ${(statement as any)?.type}`);
}

export function ResolveValue(context: Context, obj: Expression | ValueType): ControlType | ValueType {
    if (obj.type == 'value') {
        return obj;
    }
    if (obj.type == 'literal') {
        if (!Literals[obj.kind]) {
            return Control('error', `Unknown Literal Type ${obj.kind}`);
        }
        return Literals[obj.kind](obj.value) as ValueType;
    }

    if (obj.type == 'expression') {
        const operands = obj.operands.map(v => ResolveValue(context, v));
        if (!(Expressions?.[operands[0].kind]?.[obj.operator])) {
            return Control('error', `Unknown Operator Type ${obj.operator} for ${operands[0].kind}`);
        }
        return Expressions[operands[0].kind][obj.operator](operands);
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

    return Control('error', `Unhandled Expression: ${(obj as any)?.type}`);
}