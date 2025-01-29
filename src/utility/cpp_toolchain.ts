import { exec } from 'node:child_process'

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

function write(filename: string, content: string): string {
    return "echo '" + includes() + main(content) + `' > out/${filename}.cpp`;
}

function compile(filename: string): string {
    return `g++ -o out/${filename} out/${filename}.cpp`;
}

function execute(filename: string): string {
    return `./out/${filename} > out/${filename}.txt`;
}

function clearfiles(filename: string): string {
    return `echo '//empty file' > out/${filename}.cpp && echo '' > out/${filename}.txt`;
}

let filename: string = "hello";
let content: string = 'std::cout << "Hello, world" << std::endl;';

exec(clearfiles(filename) + " && "
    + write(filename, content) + " && "
    + compile(filename) + " && "
    + execute(filename));
