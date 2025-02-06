// Copyright (c) 2025 Marco Nikander

import { describe, it, expect } from 'vitest';
import { cpp_toolchain } from '../src/cpp_toolchain'
import { generate } from '../src/generate';

describe('lambda', () => {
    let simple = ["lambda", ["a", "b"], "a"]; // (lambda (a b) a)
    it('direct', () => {
        let code: string = generate(simple);
        expect(code).toBe("[](auto const& a, auto const& b){ return a; }");
    });
    
    it('(display ((lambda (a b) a) 1 2))', () => {
        let data = ["display", [["lambda", ["a", "b"], "a"], 1, 2]];
        let filename: string = "test_lambda_immediate";
        let content: string = generate(data);
        const result: string = cpp_toolchain(filename, content);
        expect(result).toBe("1\n");
    });
});
