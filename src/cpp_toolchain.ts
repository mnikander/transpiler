// Copyright (c) 2025 Marco Nikander

import assert from 'node:assert/strict';
import { execSync } from 'node:child_process';
import { Document } from './document';

function includes(): string {
    return `// generated C++ code
#include <cmath>
#include <cstdlib>
#include <iostream>
#include <functional>

`;
}

function main(body: string): string {
    return `int main() {
${body}
return EXIT_SUCCESS;
}
`;
}

function clearfiles(filename: string): string {
    return `echo '// empty cpp file' > out/artifacts/${filename}.cpp && echo 'empty' > out/artifacts/${filename}.txt`;
}

function write(filename: string, content: string): string {
    return "echo '" + includes() + main(content) + `' > out/artifacts/${filename}.cpp`;
}

function compile(filename: string): string {
    return `g++ -o out/artifacts/${filename} out/artifacts/${filename}.cpp`;
}

function execute(filename: string): string {
    return `./out/artifacts/${filename} > out/artifacts/${filename}.txt`;
}

function read(filename: string): string {
    return `cat ./out/artifacts/${filename}.txt`;
}

export function cpp_toolchain(doc: Document): string {
    assert(!/\s/g.test(doc.filename), "filename must not contain whitespace.");
    let command: string = clearfiles(doc.filename) + " && "
                        + write(doc.filename, doc.text) + " && "
                        + compile(doc.filename) + " && "
                        + execute(doc.filename) + " && "
                        + read(doc.filename);

    try {
        // more info on execSync: https://nodejs.org/api/child_process.html#synchronous-process-creation
        let stdout = execSync(command, { stdio: 'pipe' });
        return stdout.toString();
    } catch (error) {
        return `Error while executing C++ toolchain:\n${error}`;
    }
}
