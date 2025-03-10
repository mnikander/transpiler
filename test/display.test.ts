// Copyright (c) 2025 Marco Nikander

import { describe, it, expect } from 'vitest';
import { cpp_toolchain } from '../src/cpp_toolchain'
import { Document } from "../src/document";
import { generate } from '../src/generate';

// (display 5)
let ast = ["display", 5];

describe('Display', () => {
    it('direct', () => {
        let doc: Document = {
            filename: "none",
            main: "",
            lambda_counter: 0
        };
        doc = generate(doc, ast);
        expect(doc.main).toBe("std::cout << 5 << std::endl;\n");
    });

    it('(display 5)', () => {
        let doc: Document = {
            filename: "test_display",
            main: "",
            lambda_counter: 0
        };
        doc = generate(doc, ast);
        const result: string = cpp_toolchain(doc);
        expect(result).toBe("5\n");
    });
});
