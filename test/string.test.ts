// Copyright (c) 2025 Marco Nikander

import { describe, it, expect } from 'vitest';
import { cpp_toolchain } from '../src/cpp_toolchain'
import { Document } from "../src/document";
import { generate } from '../src/generate';

// (display "Hello, world.")
let ast = ["display", "\"Hello, world.\""];

describe('String', () => {
    it('direct', () => {
        let doc: Document = {
            filename: "none",
            main: "",
            lambda_counter: 0
        };
        doc = generate(doc, ast[1]);
        expect(doc.main).toBe('"Hello, world."');
    });

    it('(display "Hello, world.")', () => {
        let doc: Document = {
            filename: "test_string",
            main: "",
            lambda_counter: 0
        };
        doc = generate(doc, ast);
        const result: string = cpp_toolchain(doc);
        expect(result).toBe("Hello, world.\n");
    });
});
