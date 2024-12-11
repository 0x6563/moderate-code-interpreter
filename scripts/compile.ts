import { Generate } from "grammar-well";
import { FileSystemResolver } from "grammar-well/import-resolvers/filesystem";
import { Read, Write } from "../utils/file";
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