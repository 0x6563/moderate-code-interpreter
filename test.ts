import { readdirSync } from "fs";
import { ParseSample } from "./src/parse";
import { Run } from "./src/index";
import { Fullpath, Read } from "./utils/file";

const BaseDir = './samples/';

const files = readdirSync(BaseDir);
console.log();
(async () => {

    for (const file of files) {
        try {
            console.log(file);
            const { result, timing } = await ParseSample(Read(Fullpath(BaseDir, file)))
            console.log('Parsed in ' + timing.toFixed(2) + 'ms');
            if (result.results[0]) {
                const runstart = performance.now();
                const r = Run(result.results[0]);
                const runtime = (performance.now() - runstart);
                console.log(JSON.stringify(r) || '');
                console.log('Executed in ' + runtime.toFixed(2) + 'ms')
            }
        } catch (error) {
            console.log(`\x1b[31m${error}\x1b[0m`)
            console.log(error.stack);
        }
        console.log();
    }
    const runstart = performance.now();

    var i = 100000;
    while (i > 0) {
        i -= 1;
    }
    const runtime = (performance.now() - runstart);
    console.log('Executed in ' + runtime.toFixed(2) + 'ms')
})()