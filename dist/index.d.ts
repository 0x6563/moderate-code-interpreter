import { Statement, ValueType, Expression, ControlType, ScopeResult, ValueTypeObject } from "./types";
import { Context } from "./shared/context";
export declare function Run(tree: any, data?: ValueTypeObject['value']): ValueType | ControlType | ScopeResult;
export declare function Resolve(context: Context, tree: any): ControlType | ValueType | ScopeResult;
export declare function ResolveStatements(context: Context, statements: Statement[]): ControlType | void;
export declare function ResolveStatement(context: Context, statement: Statement): ControlType | void;
export declare function ResolveValue(context: Context, obj: Expression | ValueType): ControlType | ValueType;
