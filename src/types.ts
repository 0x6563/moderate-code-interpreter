export { TYPES } from "./grammar";
import { Context } from "./shared/context";

export type ValueTypeUndefined = { type: 'value', kind: "undefined", value: undefined };
export type ValueTypeNull = { type: 'value', kind: "null", value: null };
export type ValueTypeString = { type: 'value', kind: "string", value: string };
export type ValueTypeNumber = { type: 'value', kind: "number", value: number };
export type ValueTypeBoolean = { type: 'value', kind: "boolean", value: boolean }
export type ValueTypeObject = { type: 'value', kind: "object", value: { [key: string]: ValueType } };
export type ValueTypeArray = { type: 'value', kind: "array", value: ValueType[] };
export type ValueTypeCustom = { type: 'value', kind: "custom", sub: string; value: never };
export type ValueTypeFunction = { type: 'value', kind: "function", value: { context: Context, args: FunctionArgument[]; statements: Statement[] } };

export type ValueType = ValueTypeUndefined | ValueTypeNull | ValueTypeString | ValueTypeNumber | ValueTypeBoolean | ValueTypeObject | ValueTypeArray | ValueTypeCustom | ValueTypeFunction;

export type ControlTypeError = { type: 'control', kind: "error", value: any };
export type ControlTypeContinue = { type: 'control', kind: "continue" };
export type ControlTypeBreak = { type: 'control', kind: "break", value: ValueType };
export type ControlTypeReturn = { type: 'control', kind: "return", value: ValueType };
export type ControlType = ControlTypeError | ControlTypeContinue | ControlTypeBreak | ControlTypeReturn;

export type LiteralExpressionString = { type: 'literal', kind: 'string', value: string };
export type LiteralExpressionNumber = { type: 'literal', kind: 'number', value: string };
export type LiteralExpressionBoolean = { type: 'literal', kind: 'boolean', value: string };
export type LiteralExpressionNull = { type: 'literal', kind: 'null', value: string };

export type ObjectLiteralExpression = {
    type: 'object',
    properties: ObjectLiteralProperty[]
}
export type ObjectLiteralProperty = { key: string, value: Expression } | { type: 'spread', value: Expression }

export type ArrayLiteralExpression = {
    type: 'array',
    items: Expression[]
}

export type LiteralExpression = LiteralExpressionString | LiteralExpressionNumber | LiteralExpressionBoolean | LiteralExpressionNull | ObjectLiteralExpression | ArrayLiteralExpression;


export interface Scope {
    [key: string]: { kind: 'const' | 'var', value: ValueType }
}

export type ScopeResult = { type: 'scope', scope: Scope }

export type CallExpression = {
    type: "call";
    name: string;
    args: Expression[];
}

export type OperatorExpression = {
    type: "operation";
    operator: string;
    operands: any[];
}

export type LogicalExpression = {
    type: "logical";
    operator: 'all' | 'any';
    operands: any[];
}

export interface QueryExpression {
    type: 'query',
    source: {
        kind: 'query';
        iterable: KVIterable;
    },
    filter?: Expression,
    yield: {
        type: 'yield',
        kind: 'list' | 'first' | 'aggregate',
        value: Expression | ObjectLiteralExpression
    },
    cluster?: Expression[],
    sort?: {
        expression: Expression,
        direction: 'asc' | 'desc'
    },
    slice?: {
        low: Expression
        high: Expression
    }
}

export type KVIterable = {
    k?: string;
    v: string;
    iterable: Expression;
}

export type ReferenceExpression = { type: 'reference', path: ReferencePath }

export type ReferencePath = [{ type: 'word', value: string }, ...Expression[]];
export type Expression = LiteralExpression | CallExpression | OperatorExpression | LogicalExpression | QueryExpression | ReferenceExpression;

export type StatementDeclareConstant = { type: 'declare', kind: 'const', name: string, value: Expression };
export type StatementDeclareVariable = { type: 'declare', kind: 'var', name: string, value: Expression };
export type StatementDeclareFunction = { type: 'declare', kind: 'function', name: string, args: FunctionArgument[]; statements: Statement[] };
export type StatementAssignment = { type: 'assignment', reference: ReferenceExpression, value: Expression };
export type StatementConditional = { type: 'conditional', statements: ConditionalStatement[] };
export type StatementWhile = { type: 'loop', kind: 'while', condition: Expression, statements: Statement[] };
export type StatementFor = { type: 'loop', kind: 'for', base: Statement, step: Statement, condition: Expression, statements: Statement[] };
export type StatementEach = { type: 'loop', kind: 'scan', k?: string, v: string; iterable: Expression; statements: Statement[] };

export type ConditionalStatement = { condition: Expression, statements: Statement[] };
export type FunctionArgument = { name: string, default: Expression };
export type Statement = StatementDeclareConstant | StatementDeclareVariable | StatementDeclareFunction | StatementAssignment | StatementConditional | StatementWhile | StatementEach | StatementFor | ControlType;
