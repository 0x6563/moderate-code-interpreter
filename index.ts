import { readdirSync, readFileSync, writeFileSync } from "fs";
import { resolve } from "path";
import { ParseSample } from "./src/parse.js";
import { Run } from "./src/index.js";
const BaseDir = './samples/';

const grammar = read('../src/grammar.gwell');
const files = readdirSync(BaseDir);

for (const file of files) {
    console.log();
    try {
        console.log(file);
        const { result } = await ParseSample(grammar, read(file))
        if (result.results[0]) {
            console.log(Run(result.results[0]) || '');
        }
    } catch (error) {
        console.log(`\x1b[31m${error}\x1b[0m`)
        console.log(error.stack);
    }
    console.log();

}

function read(filename) {
    return readFileSync(fullpath(filename), 'utf-8')
}

function write(filename, body) {
    return writeFileSync(fullpath(filename), body, 'utf8');
}

function fullpath(file: string) {
    return resolve(BaseDir, file)
}