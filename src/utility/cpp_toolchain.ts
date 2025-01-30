import { execSync } from 'node:child_process';

function includes(): string {
    return `#include <cmath>
#include <cstdlib>
#include <iostream>
#include <functional>

`;
}

function main(body: string): string {
    return `int main() {
${body}
return EXIT_SUCCESS;
}`;
}

function clearfiles(filename: string): string {
    return `echo '//empty file' > out/${filename}.cpp && echo 'empty' > out/${filename}.txt`;
}

function write(filename: string, content: string): string {
    return "echo '" + includes() + main(content) + `' > out/${filename}.cpp`;
}

function compile(filename: string): string {
    return `g++ -o out/${filename} out/${filename}.cpp`;
}

function execute(filename: string): string {
    return `./out/${filename} > out/${filename}.txt`;
}

function read(filename: string): string {
    return `cat ./out/${filename}.txt`;
}

// see possible improvements: https://nodejs.org/api/child_process.html#child_processexeccommand-options-callback
export function cpp_toolchain(filename: string, content: string): string {
    let command: string = clearfiles(filename) + " && "
                        + write(filename, content) + " && "
                        + compile(filename) + " && "
                        + execute(filename) + " && "
                        + read(filename);
    try {
        let stdout = execSync(command);
        return stdout.toString();
    } catch (error) {
        return `Error while executing C++ toolchain:\n${error}`;
    }
}
