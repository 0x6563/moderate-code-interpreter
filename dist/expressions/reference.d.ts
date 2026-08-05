import type { ControlType, ReferenceExpression, ValueType } from "../types.ts";
import { Context } from "../shared/context.ts";
export declare function Reference(context: Context, { path }: {
    path: ReferenceExpression['path'];
}): ValueType | ControlType;
export declare function ResolveReferencePathItem(context: Context, k: ReferenceExpression['path'][number]): string | ControlType;
