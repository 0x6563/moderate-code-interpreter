import { readFileSync, readdirSync, writeFileSync } from "fs";
import { resolve } from "path";


export function Read(filename) {
    return readFileSync(filename, 'utf-8')
}

export function Write(filename, body) {
    return writeFileSync(filename, body, 'utf8');
}

export function Fullpath(dir: string, file: string) {
    return resolve(dir, file)
}

export function ReadJSON(filename) {
    return JSON.parse(Read(filename));
}

export function ListDirectory(path) {
    return readdirSync(path);
}