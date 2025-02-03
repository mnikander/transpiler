// Copyright (c) 2025 Marco Nikander

import { describe, it, expect } from 'vitest';
import { cpp_toolchain } from '../src/cpp_toolchain'
import { generate } from '../src/generate';
import { Display, String } from '../src/nodes';

let data: Display = {
    lexeme: "Display",
    value: {
        lexeme: "String",
        value: "Hello, world."
    }
}

describe('String', () => {
    it('simple', () => {
        let code: string = generate(data.value as String);
        expect(code).toBe('"Hello, world."');
    });

    it('(display "Hello, world.")', () => {
        let filename: string = "test_string";
        let content: string = generate(data);
        const result: string = cpp_toolchain(filename, content);
        expect(result).toBe("Hello, world.\n");
    });
});
