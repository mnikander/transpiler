// Copyright (c) 2025 Marco Nikander

import { describe, it, expect } from 'vitest';
import { cpp_toolchain } from "../src/cpp_toolchain";
import { generate } from "../src/generate";
import { Data } from '../src/nodes';

let data: Data = {
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

describe('Arithmetic', () => {

    it('(display (add 1 2))', () => {
        let filename: string = "test_add";
        let content: string = generate(data);
        const result: string = cpp_toolchain(filename, content);
        expect(result).toBe("3\n");
    });
});
