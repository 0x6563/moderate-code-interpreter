export function Wrap(type, kind, value) {
    return { type, kind, value };
}
export function Value(kind, value) {
    return { type: 'value', kind, value };
}
export function Control(kind, value) {
    return { type: 'control', kind, value };
}
export function DynamicValue(value) {
    const valuetype = GetValueType(value);
    if (valuetype == 'array') {
        return Value('array', value.map(v => DynamicValue(v)));
    }
    if (valuetype == 'object') {
        const r = Object.assign(null);
        for (const key in value) {
            r[key] = DynamicValue(value[key]);
        }
        return Value('object', r);
    }
    return Value(valuetype, value);
}
export function Marshal(value) {
    return DynamicValue(value);
}
export function Unmarshal(value) {
    if (value.kind == 'array') {
        return value.value.map(v => Unmarshal(v));
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
export function GetValueType(r) {
    if (Array.isArray(r)) {
        return 'array';
    }
    return typeof r;
}
export function Truthy(val) {
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
//# sourceMappingURL=value.js.map