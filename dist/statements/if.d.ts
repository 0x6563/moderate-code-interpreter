import { Context } from "../shared/context.ts";
import type { ControlType, StatementConditional } from "../types.ts";
export declare function If(context: Context, { statements }: StatementConditional): ControlType | void;
