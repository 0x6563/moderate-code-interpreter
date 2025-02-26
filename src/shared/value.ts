import { ControlType, ValueType } from "../types";

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

export function DynamicValue(value: any) {
    const valuetype = GetValueType(value);
    if (valuetype == 'array') {
        return Value('array', value.map(v => DynamicValue(v)))
    }
    if (valuetype == 'object') {
        const r = Object.assign(null);
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
        return value.value.map(v => Unmarshal(v))
    }
    if (value.kind == 'object') {
        const r = Object.assign(null);
        for (const key in value.value) {
            r[key] = Unmarshal(value[key]);
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