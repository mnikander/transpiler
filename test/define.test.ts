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
        let filename: string = "test_define";
        let doc: Document = {
            text: "",
            lambda_counter: 0
        };
        doc = generate(doc, define_x);
        const result: string = cpp_toolchain(filename, doc.text);
        expect(result).toBe("");
    });

    it('(define x 2); (display x)', () => {
        let filename: string = "test_define_display";
        let doc: Document = {
            text: "",
            lambda_counter: 0
        };
        doc = generate(doc, define_x);
        doc = generate(doc, display_x);
        const result: string = cpp_toolchain(filename, doc.text);
        expect(result).toBe("2\n");
    });
});
