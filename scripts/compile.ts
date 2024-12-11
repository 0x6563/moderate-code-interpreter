import { Generate } from "grammar-well";
import { FileSystemResolver } from "grammar-well/import-resolvers/filesystem";
import { readFileSync, writeFileSync } from "fs";
await Transpile('./src/grammar.well');

async function Transpile(path) {
    const source = Read(path);
    const js = await Generate(source, {
        resolver: new FileSystemResolver(''),
        output: {
            name: 'grammar',
            format: 'esmodule',
            artifacts: {
                lexer: true,
                grammar: true
            }
        }
    });
    Write(path.replace(/\.well$/, '.js'), js);
}


export function Read(filename) {
    return readFileSync(filename, 'utf-8')
}

export function Write(filename, body) {
    return writeFileSync(filename, body, 'utf8');
}

