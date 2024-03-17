import { Context } from "../shared/context";
import { ControlType, StatementConditional } from "../types";
export declare function If(context: Context, { statements }: StatementConditional): ControlType | void;
