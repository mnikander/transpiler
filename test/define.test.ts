// Copyright (c) 2025 Marco Nikander

import { describe, it, expect } from 'vitest';
import { cpp_toolchain } from '../src/cpp_toolchain'
import { Document } from "../src/document";
import { generate } from '../src/generate';

// (define x 2)
let define_x = ["define", "x", 2];

// (display x)
let display_x = ["display", "x"];

describe('Define', () => {

    it('(define x 2)', () => {
        let doc: Document = {
            filename: "test_define",
            text: "",
            lambda_counter: 0
        };
        doc = generate(doc, define_x);
        const result: string = cpp_toolchain(doc);
        expect(result).toBe("");
    });

    it('(define x 2); (display x)', () => {
        let doc: Document = {
            filename: "test_define_display",
            text: "",
            lambda_counter: 0
        };
        doc = generate(doc, define_x);
        doc = generate(doc, display_x);
        const result: string = cpp_toolchain(doc);
        expect(result).toBe("2\n");
    });
});
