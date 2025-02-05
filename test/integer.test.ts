// Copyright (c) 2025 Marco Nikander

import { describe, it, expect } from 'vitest';
import { cpp_toolchain } from '../src/cpp_toolchain'
import { generate } from '../src/generate';
import { Display, Integer } from '../src/nodes';

// (display 5)
let data: Display = {
    lexeme: "Display",
    value: {
        lexeme: "Integer",
        value: 5
    }
}

describe('Integer', () => {

    it('simple', () => {
        let code: string = generate(data.value as Integer);
        expect(code).toBe("5l");
    });

    it('(display 5)', () => {
        let filename: string = "test_integer";
        let content: string = generate(data);
        const result: string = cpp_toolchain(filename, content);
        expect(result).toBe("5\n");
    });
});
