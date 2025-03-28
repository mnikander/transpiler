// Copyright (c) 2025 Marco Nikander

import { describe, it, expect } from 'vitest';
import { cpp_toolchain } from '../src/cpp_toolchain'
import { generate } from "../src/generate";
import { parse } from "../src/parse";

// (display 5)
let ast = ["display", 5];

describe('Display', () => {
    it('direct', () => {
        let code: string = generate(parse(ast));
        expect(code).toBe("std::cout << 5 << std::endl;\n");
    });

    it('(display 5)', () => {
        let filename: string = "test_display";
        let content: string = generate(parse(ast));
        const result: string = cpp_toolchain(filename, content);
        expect(result).toBe("5\n");
    });
});
