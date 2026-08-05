import test, { describe } from "node:test";
import { Parse, Run } from "../src/index.ts";
import assert from "node:assert";
import { ListDirectory, ReadJSON } from "../utils/file.ts";
const BaseDir = 'tests/samples/'
const files = ListDirectory(BaseDir)

describe('Result Matching', () => {
    for (const file of files) {
        const { description, input, result } = ReadJSON(BaseDir + file);
        test(description, () => {
            Compare(Run(Parse(input)), result);
        })
    }
})

function Compare(actual, expected) {
    if (Array.isArray(expected)) {
        const length = actual?.length?.value ?? actual?.length;
        assert.equal(length, expected.length);
        for (let i = 0; i < expected.length; i++) {
            Compare(actual?.[i], expected[i]);
        }
        return;
    }
    if (expected !== null && typeof expected === 'object') {
        for (const key in expected) {
            Compare(actual?.[key], expected[key]);
        }
        return;
    }
    assert.equal(actual, expected);
}