import { exec } from 'node:child_process'

let includes: string = `#include <cmath>
#include <cstdlib>
#include <iostream>
#include <functional>

`;

function main(body: string): string {
    return `int main() {
${body}
return EXIT_SUCCESS;
}`;
}

let content: string = 'std::cout << "Hello, world" << std::endl;';
let foo: string = "echo '" + includes + main(content) + "' > out/output.cpp";
exec(foo);
