// Copyright (c) 2025 Marco Nikander

import { describe, it, expect } from 'vitest';
import { cpp_toolchain } from '../src/cpp_toolchain'
import { generate } from '../src/generate';

// (display "Hello, world.")
let data = ["display", "\"Hello, world.\""];

describe('String', () => {
    it('direct', () => {
        let code: string = generate(data[1]);
        expect(code).toBe('"Hello, world."');
    });

    it('(display "Hello, world.")', () => {
        let filename: string = "test_string";
        let content: string = generate(data);
        const result: string = cpp_toolchain(filename, content);
        expect(result).toBe("Hello, world.\n");
    });
});
