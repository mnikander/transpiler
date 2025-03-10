// Copyright (c) 2025 Marco Nikander

import { describe, it, expect } from 'vitest';
import { cpp_toolchain } from '../src/cpp_toolchain'
import { Document } from "../src/document";
import { generate } from '../src/generate';

// (display 0.1)
let ast = ["display", 0.1];

describe('Float', () => {

    it('direct', () => {
        let doc: Document = {
            filename: "none",
            main: "",
            lambda_counter: 0
        };
        doc = generate(doc, ast[1]);
        expect(doc.main).toBe("0.1");
    });

    it('(display 0.1)', () => {
        let doc: Document = {
            filename: "test_float",
            main: "",
            lambda_counter: 0
        };
        doc = generate(doc, ast);
        const result: string = cpp_toolchain(doc);
        expect(result).toBe("0.1\n");
    });
});
