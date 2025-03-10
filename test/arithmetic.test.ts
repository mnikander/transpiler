// Copyright (c) 2025 Marco Nikander

import { describe, it, expect } from 'vitest';
import { cpp_toolchain } from "../src/cpp_toolchain";
import { Document } from "../src/document";
import { generate } from "../src/generate";

describe('Arithmetic', () => {

    it('(display (add 1 2))', () => {
        let ast = ["display", ["add", 1, 2]];
        let doc: Document = {
            filename: "test_add",
            main: "",
            lambda_counter: 0
        };
        doc = generate(doc, ast);
        const result: string = cpp_toolchain(doc);
        expect(result).toBe("3\n");
    });

    it('(display (+ 1 2))', () => {
        let ast = ["display", ["+", 1, 2]];
        let doc: Document = {
            filename: "test_plus",
            main: "",
            lambda_counter: 0
        };
        doc = generate(doc, ast);
        const result: string = cpp_toolchain(doc);
        expect(result).toBe("3\n");
    });

    it('(display (add 1 (add 2 4)))', () => {
        let ast = ["display", ["add", 1, ["add", 2, 4]]]
        let doc: Document = {
            filename: "test_add_nested_right",
            main: "",
            lambda_counter: 0
        };
        doc = generate(doc, ast);
        const result: string = cpp_toolchain(doc);
        expect(result).toBe("7\n");
    });

    it('(display (add (add 1 2) 4))', () => {
        let ast = ["display", ["add", ["add", 1, 2], 4]];
        let doc: Document = {
            filename: "test_add_nested_left",
            main: "",
            lambda_counter: 0
        };
        doc = generate(doc, ast);
        const result: string = cpp_toolchain(doc);
        expect(result).toBe("7\n");
    });

    it('(display (- 1 2))', () => {
        let ast = ["display", ["-", 1, 2]];
        let doc: Document = {
            filename: "test_minus",
            main: "",
            lambda_counter: 0
        };
        doc = generate(doc, ast);
        const result: string = cpp_toolchain(doc);
        expect(result).toBe("-1\n");
    });

    it('(display (* 2 3))', () => {
        let ast = ["display", ["*", 2, 3]];
        let doc: Document = {
            filename: "test_multiply",
            main: "",
            lambda_counter: 0
        };
        doc = generate(doc, ast);
        const result: string = cpp_toolchain(doc);
        expect(result).toBe("6\n");
    });

    it('(display (/ 8 2))', () => {
        let ast = ["display", ["/", 8, 2]];
        let doc: Document = {
            filename: "test_multiply",
            main: "",
            lambda_counter: 0
        };
        doc = generate(doc, ast);
        const result: string = cpp_toolchain(doc);
        expect(result).toBe("4\n");
    });
});
