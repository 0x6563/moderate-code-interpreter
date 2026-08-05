import type { QueryExpression, ValueType } from "../types.ts";
import { Context } from "../shared/context.ts";
export declare function Query(context: Context, query: QueryExpression): ValueType | import("../types.ts").ControlType;
