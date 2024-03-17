import { ControlType, ReferenceExpression, ValueType } from "../types";
import { Context } from "../shared/context";
export declare function Reference(context: Context, { path }: {
    path: ReferenceExpression['path'];
}): ValueType | ControlType;
export declare function ResolveReferencePathItem(context: Context, k: ReferenceExpression['path'][number]): string | ControlType;
