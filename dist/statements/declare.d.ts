import { Context } from "../shared/context";
import { StatementDeclareConstant, StatementDeclareFunction, StatementDeclareVariable } from "../types";
export declare function Declare(context: Context, statement: StatementDeclareVariable | StatementDeclareConstant | StatementDeclareFunction): void | import("../types").ControlType;
