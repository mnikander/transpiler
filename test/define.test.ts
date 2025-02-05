// Copyright (c) 2025 Marco Nikander

import { describe, it, expect } from 'vitest';
import { cpp_toolchain } from '../src/cpp_toolchain'
import { generate } from '../src/generate';
import { Application, Display } from '../src/nodes';

// (define x 2)
let define_x: Application = {
    lexeme: "Application",
    value: [
        {
            lexeme: "Abstraction",
            value: "define"
        },
        {
            lexeme: "Variable",
            value: "x"
        },
        {
            lexeme: "Abstraction",
            value: "2"
        },
    ]
}

// (display x)
let display_x: Display = {
    lexeme: "Display",
    value: {
        lexeme: "Variable",
        value: "x"
    }
}

describe('Define', () => {

    it('(define x 2)', () => {
        let filename: string = "test_define";
        let content: string = generate(define_x);
        const result: string = cpp_toolchain(filename, content);
        expect(result).toBe("");
    });

    it('(define x 2); (display x)', () => {
        let filename: string = "test_define_display";
        let content: string = generate(define_x) + generate(display_x);
        const result: string = cpp_toolchain(filename, content);
        expect(result).toBe("2\n");
    });
});
