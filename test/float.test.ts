// Copyright (c) 2025 Marco Nikander

import { describe, it, expect } from 'vitest';
import { cpp_toolchain } from '../src/cpp_toolchain'
import { generate } from '../src/generate';
import { Display, Float } from '../src/nodes';

// (display 0.1)
let data: Display = {
    lexeme: "Display",
    value: {
        lexeme: "Float",
        value: 0.1
    }
}

describe('Float', () => {

    it('simple', () => {
        let code = generate(data.value as Float);
        expect(code).toBe("0.1f");
    });

    it('(display 0.1)', () => {
        let filename: string = "test_float";
        let content: string = generate(data);
        const result: string = cpp_toolchain(filename, content);
        expect(result).toBe("0.1\n");
    });
});
