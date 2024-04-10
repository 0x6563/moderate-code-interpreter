import test, { describe } from "node:test";
import { Parse, Run } from "../src";
import assert from "node:assert";
import { ListDirectory, ReadJSON } from "../utils/file";
const BaseDir = 'tests/samples/'
const files = ListDirectory(BaseDir)

describe('Tree Matching', () => {
    for (const file of files) {
        const { description, input, tree } = ReadJSON(BaseDir + file);
        test(description, () => {
            ObjectCompare(Parse(input), tree);
        })
    }
})

function ObjectCompare(actual, expected) {
    const map1 = Traverse(actual);
    const map2 = Traverse(expected);
    let diff = '';
    let missing = '';
    let additional = '';
    for (const key in map2) {
        if (typeof map2[key] != 'undefined' && !(key in map1)) {
            missing += `\n\t - ${key}`;
        } else if (map1[key] != map2[key]) {
            diff += `\n\t ! ${key}`
        }
    }
    for (const key in map1) {
        if (typeof map1[key] != 'undefined' && !(key in map2)) {
            additional += `\n\t + ${key}`;
        }
    }
    if (diff || missing || additional) {
        assert.fail('Objects Do Not match:' + diff + missing + additional);
    }
}

const Ary = [];
const Obj = {};
function Traverse(obj, map = {}, prefix = '/') {
    if (Array.isArray(obj)) {
        map[prefix] = Ary;
        for (let key = 0; key < obj.length; key++) {
            Traverse(obj[key], map, prefix + '/' + key)
        }
    } else if (typeof obj == 'object') {
        map[prefix] = Obj;
        for (const key in obj) {
            Traverse(obj[key], map, prefix + '/' + key)
        }
    } else {
        map[prefix] = obj;
    }
    return map;
}