// Copyright (c) 2025 Marco Nikander

import { describe, it, expect } from 'vitest';
import { cpp_toolchain } from "../src/cpp_toolchain";
import { Document } from "../src/document";
import { generate } from "../src/generate";

describe('Logical', () => {

    it('(display (if True 1 2))', () => {
        let ast = ["display", ["if", "True", 1, 2]];
        let doc: Document = {
            filename: "test_if",
            main: "",
            lambda_counter: 0
        };
        doc = generate(doc, ast);
        const result: string = cpp_toolchain(doc);
        expect(result).toBe("1\n");
    });

    it('(display (if (equal 11 11) 1 2)', () => {
        let ast = ["display", ["if", ["equal", 10, 10], 1, 2]];
        let doc: Document = {
            filename: "test_if_correct",
            main: "",
            lambda_counter: 0
        };
        doc = generate(doc, ast);
        const result: string = cpp_toolchain(doc);
        expect(result).toBe("1\n");
    });

    it('(display (if (equal 11 22) 1 2)', () => {
        let ast = ["display", ["if", ["equal", 11, 22], 1, 2]];
        let doc: Document = {
            filename: "test_if_wrong",
            main: "",
            lambda_counter: 0
        };
        doc = generate(doc, ast);
        const result: string = cpp_toolchain(doc);
        expect(result).toBe("2\n");
    });
});
