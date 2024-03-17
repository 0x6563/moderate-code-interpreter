import { Context } from "../shared/context";
export declare const Logical: {
    all: (context: Context, operands: any) => import("../types").ValueType | import("../types").ControlTypeError | import("../types").ControlTypeContinue | import("../types").ControlTypeBreak | import("../types").ControlTypeReturn;
    any: (context: Context, operands: any) => import("../types").ValueType | import("../types").ControlTypeError | import("../types").ControlTypeContinue | import("../types").ControlTypeBreak | import("../types").ControlTypeReturn;
};
