import test, { describe } from "node:test";
import { Parse, Run } from "../src";
import assert from "node:assert";
import { ListDirectory, ReadJSON } from "../utils/file";
const BaseDir = 'tests/samples/'
const files = ListDirectory(BaseDir)

describe('Result Matching', () => {
    for (const file of files) {
        const { description, input, result } = ReadJSON(BaseDir + file);
        test(description, () => {
            assert.deepEqual(Run(Parse(input)), result);
        })
    }
}) 