import { Context } from "../shared/context.ts";
import type { CallExpression } from "../types.ts";
export declare function Call(context: Context, expression: CallExpression): import("../types.ts").ValueType | import("../types.ts").ControlType;
