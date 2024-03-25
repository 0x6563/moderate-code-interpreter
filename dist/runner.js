"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResolveValue = exports.ResolveStatement = exports.ResolveStatements = exports.Resolve = exports.Run = void 0;
const value_1 = require("./shared/value");
const context_1 = require("./shared/context");
const assignment_1 = require("./statements/assignment");
const declare_1 = require("./statements/declare");
const if_1 = require("./statements/if");
const scan_1 = require("./statements/scan");
const for_1 = require("./statements/for");
const while_1 = require("./statements/while");
const operators_1 = require("./expressions/operators");
const literals_1 = require("./expressions/literals");
const logical_1 = require("./expressions/logical");
const object_1 = require("./expressions/object");
const reference_1 = require("./expressions/reference");
const query_1 = require("./expressions/query");
const array_1 = require("./expressions/array");
const call_1 = require("./expressions/call");
function Run(tree, data) {
    const context = new context_1.Context();
    if (data)
        for (const key in data) {
            context.declare('var', key, data[key]);
        }
    return Resolve(context, tree);
}
exports.Run = Run;
function Resolve(context, tree) {
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
exports.Resolve = Resolve;
function ResolveStatements(context, statements) {
    for (const statement of statements) {
        let r = ResolveStatement(context, statement);
        if (r) {
            return r;
        }
    }
}
exports.ResolveStatements = ResolveStatements;
function ResolveStatement(context, statement) {
    if (statement.type == 'assignment') {
        return (0, assignment_1.Assignment)(context, statement);
    }
    if (statement.type == 'declare') {
        return (0, declare_1.Declare)(context, statement);
    }
    if (statement.type == 'conditional') {
        return (0, if_1.If)(context, statement);
    }
    if (statement.type == 'loop') {
        if (statement.kind == 'scan') {
            return (0, scan_1.Scan)(context, statement);
        }
        if (statement.kind == 'for') {
            return (0, for_1.For)(context, statement);
        }
        if (statement.kind == 'while') {
            return (0, while_1.While)(context, statement);
        }
    }
    if (statement.type == 'control') {
        if (statement.kind == 'break' || statement.kind == 'return') {
            return (0, value_1.Control)(statement.kind, ResolveValue(context, statement.value));
        }
        return statement;
    }
    return (0, value_1.Control)('error', `Unhandled Statement: ${statement?.type}`);
}
exports.ResolveStatement = ResolveStatement;
function ResolveValue(context, obj) {
    if (obj.type == 'value') {
        return obj;
    }
    if (obj.type == 'literal') {
        if (!literals_1.Literals[obj.kind]) {
            return (0, value_1.Control)('error', `Unknown Literal Type ${obj.kind}`);
        }
        return literals_1.Literals[obj.kind](obj.value);
    }
    if (obj.type == 'operation') {
        const operands = [];
        for (const o of obj.operands) {
            const r = ResolveValue(context, o);
            if (r.type == 'control')
                return r;
            operands.push(r);
        }
        if (!(operators_1.Expressions?.[operands[0].kind]?.[obj.operator])) {
            return (0, value_1.Control)('error', `Unknown Operator Type ${obj.operator} for ${operands[0].kind}`);
        }
        return operators_1.Expressions[operands[0].kind][obj.operator](operands);
    }
    if (obj.type == 'call') {
        return (0, call_1.Call)(context, obj);
    }
    if (obj.type === 'query') {
        return (0, query_1.Query)(context, obj);
    }
    if (obj.type === 'object') {
        return (0, object_1.ObjectLiteral)(context, obj);
    }
    if (obj.type === 'array') {
        return (0, array_1.ArrayLiteral)(context, obj);
    }
    if (obj.type == 'reference') {
        return (0, reference_1.Reference)(context, obj);
    }
    if (obj.type == 'logical') {
        return logical_1.Logical[obj.operator](context, obj.operands);
    }
    return (0, value_1.Control)('error', `Unhandled Expression: ${obj?.type}`);
}
exports.ResolveValue = ResolveValue;
//# sourceMappingURL=runner.js.map