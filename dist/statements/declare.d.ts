import { Context } from "../shared/context.ts";
import type { StatementDeclareConstant, StatementDeclareFunction, StatementDeclareVariable } from "../types.ts";
export declare function Declare(context: Context, statement: StatementDeclareVariable | StatementDeclareConstant | StatementDeclareFunction): void | import("../types.ts").ControlType;
