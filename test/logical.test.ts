// Copyright (c) 2025 Marco Nikander

import { describe, it, expect } from 'vitest';
import { cpp_toolchain } from "../src/cpp_toolchain";
import { generate } from "../src/generate";

describe('Logical', () => {

    it('(display (if True 1 2))', () => {
        let ast = ["display", ["if", "True", 1, 2]];
        let filename: string = "test_if";
        let content: string = generate(ast);
        const result: string = cpp_toolchain(filename, content);
        expect(result).toBe("1\n");
    });

    it('(display (if (equal 11 11) 1 2)', () => {
        let ast = ["display", ["if", ["equal", 10, 10], 1, 2]];
        let filename: string = "test_if_correct";
        let content: string = generate(ast);
        const result: string = cpp_toolchain(filename, content);
        expect(result).toBe("1\n");
    });

    it('(display (if (equal 11 22) 1 2)', () => {
        let ast = ["display", ["if", ["equal", 11, 22], 1, 2]];
        let filename: string = "test_if_wrong";
        let content: string = generate(ast);
        const result: string = cpp_toolchain(filename, content);
        expect(result).toBe("2\n");
    });
});
