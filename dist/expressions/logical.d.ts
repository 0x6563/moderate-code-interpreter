import { Context } from "../shared/context.ts";
export declare const Logical: {
    all: (context: Context, operands: any) => import("../types.ts").ValueType | import("../types.ts").ControlTypeError | import("../types.ts").ControlTypeContinue | import("../types.ts").ControlTypeBreak | import("../types.ts").ControlTypeReturn;
    any: (context: Context, operands: any) => import("../types.ts").ValueType | import("../types.ts").ControlTypeError | import("../types.ts").ControlTypeContinue | import("../types.ts").ControlTypeBreak | import("../types.ts").ControlTypeReturn;
};
