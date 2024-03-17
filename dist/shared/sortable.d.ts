export declare class Sortable {
    private compare;
    private low?;
    private high?;
    set: any[];
    get first(): number;
    get firstItem(): any;
    get last(): number;
    get lastItem(): any;
    get length(): number;
    cap: number;
    constructor(compare: (a: any, b: any) => 0 | -1 | 1, low?: number, high?: number);
    add(item: any): void;
    extract(): any[];
    private seek;
}
