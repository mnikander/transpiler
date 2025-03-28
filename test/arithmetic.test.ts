// Copyright (c) 2025 Marco Nikander

import { describe, it, expect } from 'vitest';
import { cpp_toolchain } from "../src/cpp_toolchain";
import { generate } from "../src/generate";
import { parse } from "../src/parse";

describe('Arithmetic', () => {

    it('(display (add 1 2))', () => {
        let ast = ["display", ["add", 1, 2]];
        let filename: string = "test_add";
        let content: string = generate(parse(ast));
        const result: string = cpp_toolchain(filename, content);
        expect(result).toBe("3\n");
    });

    it('(display (+ 1 2))', () => {
        let ast = ["display", ["+", 1, 2]];
        let filename: string = "test_plus";
        let content: string = generate(parse(ast));
        const result: string = cpp_toolchain(filename, content);
        expect(result).toBe("3\n");
    });

    it('(display (add 1 (add 2 4)))', () => {
        let ast = ["display", ["add", 1, ["add", 2, 4]]]
        let filename: string = "test_add_nested_right";
        let content: string = generate(parse(ast));
        const result: string = cpp_toolchain(filename, content);
        expect(result).toBe("7\n");
    });

    it('(display (add (add 1 2) 4))', () => {
        let ast = ["display", ["add", ["add", 1, 2], 4]];
        let filename: string = "test_add_nested_left";
        let content: string = generate(parse(ast));
        const result: string = cpp_toolchain(filename, content);
        expect(result).toBe("7\n");
    });

    it('(display (- 1 2))', () => {
        let ast = ["display", ["-", 1, 2]];
        let filename: string = "test_minus";
        let content: string = generate(parse(ast));
        const result: string = cpp_toolchain(filename, content);
        expect(result).toBe("-1\n");
    });

    it('(display (* 2 3))', () => {
        let ast = ["display", ["*", 2, 3]];
        let filename: string = "test_multiply";
        let content: string = generate(parse(ast));
        const result: string = cpp_toolchain(filename, content);
        expect(result).toBe("6\n");
    });

    it('(display (/ 8 2))', () => {
        let ast = ["display", ["/", 8, 2]];
        let filename: string = "test_multiply";
        let content: string = generate(parse(ast));
        const result: string = cpp_toolchain(filename, content);
        expect(result).toBe("4\n");
    });
});
