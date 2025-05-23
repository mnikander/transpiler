// Copyright (c) 2025 Marco Nikander

import { describe, it, expect } from 'vitest';
import { cpp_toolchain } from '../src/cpp_toolchain'
import { generate } from "../src/generate";
import { parse } from "../src/parse";

// (display "Hello, world.")
let ast = ["display", "\"Hello, world.\""];

describe('String', () => {
    it('direct', () => {
        let code: string = generate(parse(ast[1]));
        expect(code).toBe('"Hello, world."');
    });

    it('(display "Hello, world.")', () => {
        let filename: string = "test_string";
        let content: string = generate(parse(ast));
        const result: string = cpp_toolchain(filename, content);
        expect(result).toBe("Hello, world.\n");
    });
});
