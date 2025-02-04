// Copyright (c) 2025 Marco Nikander

import { cpp_toolchain } from "./cpp_toolchain";
import { generate } from './generate';
import { Data, Display } from './nodes';

let text: Display = {
    lexeme: "Display",
    value: {
        lexeme: "String",
        value: "Hello, world."
    }
}

let addition: Data = {
    lexeme: "Display",
    value: {
        lexeme: "Application",
        value: [
            {
                lexeme: "Abstraction",
                value: "add"
            },
            {
                lexeme: "Integer",
                value: 1
            },
            {
                lexeme: "Integer",
                value: 2
            }
        ]
    }
};

let filename: string = "main";
let content: string = generate(text) + generate(addition);
const result: string = cpp_toolchain(filename, content);
console.log(result);
