// Copyright (c) 2025 Marco Nikander

import { describe, it, expect } from 'vitest';
import { cpp_toolchain } from "../src/cpp_toolchain";
import { generate } from "../src/generate";

// (display (add 1 2))
let addition = ["display", ["add", 1, 2]];

// (display (add 1 (add 2 4)))
let nested_right = ["display", ["add", 1, ["add", 2, 4]]]

// (display (add (add 1 2) 4))
let nested_left = ["display", ["add", ["add", 1, 2], 4]];

describe('Arithmetic', () => {

    it('(display (add 1 2))', () => {
        let filename: string = "test_add";
        let content: string = generate(addition);
        const result: string = cpp_toolchain(filename, content);
        expect(result).toBe("3\n");
    });

    it('(display (add 1 (add 2 4)))', () => {
        let filename: string = "test_add_nested_right";
        let content: string = generate(nested_right);
        const result: string = cpp_toolchain(filename, content);
        expect(result).toBe("7\n");
    });

    it('(display (add (add 1 2) 4))', () => {
        let filename: string = "test_add_nested_left";
        let content: string = generate(nested_left);
        const result: string = cpp_toolchain(filename, content);
        expect(result).toBe("7\n");
    });
});
