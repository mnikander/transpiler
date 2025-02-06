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

    it('(define first (lambda (a b) a)); (display (first 1 2))', () => {
        let abstraction = ["define", "first", ["lambda", ["a", "b"], "a"]];
        let application = ["display", ["first", 1, 2]];
        let filename: string = "test_lambda_named";
        let content: string = generate(abstraction) + generate(application);
        const result: string = cpp_toolchain(filename, content);
        expect(result).toBe("1\n");
    });

    it('(define first (lambda (a b) a)); (define second (lambda (a b) b)); (display ((first first second) 1 2))', () => {
        let first = ["define", "first", ["lambda", ["a", "b"], "a"]];
        let second = ["define", "second", ["lambda", ["a", "b"], "b"]];
        let application = ["display", [["first", "first", "second"], 1, 2]];
        let filename: string = "test_lambda_2nd_order";
        let content: string = generate(first) + generate(second) + generate(application);
        const result: string = cpp_toolchain(filename, content);
        expect(result).toBe("1\n");
    });
});
