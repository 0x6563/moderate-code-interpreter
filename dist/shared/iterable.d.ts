import { ControlType, Expression, ValueType } from "../types";
import { Context } from "./context";
export declare function IterateIterable(context: Context, iterable: {
    iterable: Expression;
    k?: string;
    v: string;
}, callback: IterableCallback): ControlType | void;
export declare function Iterate(context: Context, value: ControlType | ValueType, keyName: string, valueName: string, callback: IterableCallback): ControlType | void;
export type IterableCallback = (context: Context, k: string) => ControlType | void;
