// export interface ValueDictionary {
//     [name: string]: ValueType;
// }

export interface Context {
    resolve: (ref: any) => any;

}
export type ValueTypeUndefined = { type: 'value', kind: "undefined", value: any };
export type ValueTypeNull = { type: 'value', kind: "null", value: any };
export type ValueTypeString = { type: 'value', kind: "string", value: any };
export type ValueTypeNumber = { type: 'value', kind: "number", value: any };
export type ValueTypeBoolean = { type: 'value', kind: "boolean", value: any }
export type ValueTypeObject = { type: 'value', kind: "object", value: any };
export type ValueTypeArray = { type: 'value', kind: "array", value: any };
export type ValueTypeCustom = { type: 'value', kind: "custom", sub: string; value: any };

export type ValueType = ValueTypeUndefined | ValueTypeNull | ValueTypeString | ValueTypeNumber | ValueTypeBoolean | ValueTypeObject | ValueTypeArray | ValueTypeCustom;


export type ControlTypeError = { type: 'control', kind: "error", value: any };
export type ControlTypeContinue = { type: 'control', kind: "continue" };
export type ControlTypeBreak = { type: 'control', kind: "break", value: ValueType };
export type ControlTypeReturn = { type: 'control', kind: "return", value: ValueType };
export type ControlType = ControlTypeError | ControlTypeContinue | ControlTypeBreak | ControlTypeReturn;

export type LiteralExpressionString = { type: 'literal', kind: 'string', value: string };
export type LiteralExpressionNumber = { type: 'literal', kind: 'number', value: string };
export type LiteralExpressionBoolean = { type: 'literal', kind: 'boolean', value: string };
export type LiteralExpressionNull = { type: 'literal', kind: 'null', value: string };
export type LiteralExpression = LiteralExpressionString | LiteralExpressionNumber | LiteralExpressionBoolean | LiteralExpressionNull;

export type OperatorExpression = {
    type: "expression";
    operator: string;
    operands: any[];
}

export type LogicalExpression = {
    type: "logical";
    operator: string;
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

export type ObjectLiteralExpression = {
    type: 'object',
    properties: ObjectLiteralProperty[]
}

export type ArrayLiteralExpression = {
    type: 'array',
    items: Expression[]
}

export type ObjectLiteralProperty = { key: string, value: Expression } | { type: 'spread', value: Expression }
export type ReferenceExpression = { type: 'reference', path: ({ type: 'word', value: string } | Expression)[] }

export type Expression = LiteralExpression | OperatorExpression | LogicalExpression | QueryExpression | ReferenceExpression | ObjectLiteralExpression | ArrayLiteralExpression;

export type StatementDeclare = { type: 'declare', typeof: 'var', name: string, value: Expression };
export type StatementAssignment = { type: 'assignment', name: string, value: Expression };
export type StatementConditional = { type: 'conditional', statements: ConditionalStatement[] };
export type StatementWhile = { type: 'loop', kind: 'while', condition: Expression, statements: Statement[] };
export type StatementFor = { type: 'loop', kind: 'for', base: Statement, step: Statement, condition: Expression, statements: Statement[] };
export type StatementEach = { type: 'loop', kind: 'scan', k?: string, v: string; iterable: Expression; statements: Statement[] };

export type ConditionalStatement = { condition: Expression, statements: Statement[] };

export type Statement = StatementDeclare | StatementAssignment | StatementConditional | StatementWhile | StatementEach | StatementFor;


const TYPES = {
    Expression: "expression",
    Assignment: "assignment",
    Declare: "declare",
    Conditional: "conditional",
    Loop: "loop",
    Literal: "literal",
    Array: "array",
    Object: "object",
    Lambda: "lambda",
    Reference: "reference",
    Query: "query",
    Call: "call",
    Flow: "flow",
    Spread: "spread",
    Cluster: "cluster",
    Constant: "constant",
    Wildcard: "wildcard",
    Yield: "yield"
}