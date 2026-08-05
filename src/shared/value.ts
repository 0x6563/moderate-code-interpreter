import type { ControlType, TDataArray, ValueType } from "../types.ts";

type VORC<T> = T extends 'value' ? ValueType : ControlType;
export function Wrap<T extends 'value' | 'control'>(type: T, kind: VORC<T>['kind'], value: any): VORC<T> {
    return { type, kind, value } as any;
}

export function Value(kind: ValueType['kind'], value: any): ValueType {
    return { type: 'value', kind, value } as ValueType;
}

export function Control(kind: ControlType['kind'], value): ControlType {
    return { type: 'control', kind, value }
}

// Array-kind TData is only ever produced through this accessor, so `.length`
// is consistent regardless of where the array came from. Anything beyond
// `.length` and numeric indices (methods, iteration) is deliberately blocked.
export function ArrayAccessor(items: ValueType[]): TDataArray {
    return new Proxy(items, {
        get(target, key) {
            if (key === 'length') {
                return Value('number', target.length) as any;
            }
            if (typeof key === 'string' && /^\d+$/.test(key)) {
                return target[key as any];
            }
            return undefined;
        }
    }) as unknown as TDataArray;
}

export function DynamicValue(value: any) {
    const valuetype = GetValueType(value);
    if (valuetype == 'array') {
        return Value('array', ArrayAccessor(value.map(v => DynamicValue(v))))
    }
    if (valuetype == 'object') {
        const r = {};
        for (const key in value) {
            r[key] = DynamicValue(value[key]);
        }
        return Value('object', r);
    }
    return Value(valuetype as any, value);
}

export function Marshal(value: any) {
    return DynamicValue(value);
}

export function Unmarshal(value: ValueType) {
    if (value.kind == 'array') {
        const length = value.value.length.value;
        const result: any[] = [];
        for (let i = 0; i < length; i++) {
            result.push(Unmarshal((value.value)[i]));
        }
        return result;
    }
    if (value.kind == 'object') {
        const r = {};
        for (const key in value.value) {
            r[key] = Unmarshal(value.value[key]);
        }
        return r;
    }
    if (value.kind == 'function') {
        return undefined;
    }
    if (value.kind == 'custom')
        return undefined;
    return value.value;
}

export function GetValueType(r: any) {
    if (Array.isArray(r)) {
        return 'array';
    }
    return typeof r;
}

export function Truthy(val: ControlType | ValueType): ControlType | boolean {
    if (val.type == 'control') {
        return val;
    }
    if (val.kind == 'object' || val.kind == 'array') {
        return true;
    }
    if (val.kind == 'boolean') {
        return val.value;
    }

    if (val.kind == 'string') {
        return val.value != '';
    }

    if (val.kind == 'number') {
        return val.value > 0;
    }
    return false;
}