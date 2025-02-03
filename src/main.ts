// Copyright (c) 2025 Marco Nikander

import { cpp_toolchain } from "./cpp_toolchain";
import { generate } from './generate';
import { Display } from './nodes';

let data: Display = {
    lexeme: "Display",
    value: {
        lexeme: "String",
        value: "Hello, world."
    }
}

let filename: string = "main";
let content: string = generate(data);
const result: string = cpp_toolchain(filename, content);
console.log(result);
