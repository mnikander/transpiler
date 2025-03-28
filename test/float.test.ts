// Copyright (c) 2025 Marco Nikander

import { describe, it, expect } from 'vitest';
import { cpp_toolchain } from '../src/cpp_toolchain'
import { Expression } from "../src/common";
import { generate } from "../src/generate";
import { parse } from "../src/parse";

// (display 0.1)
let ast = ["display", 0.1];

describe('Float', () => {

    it('direct', () => {
        let node: Expression = parse(ast[1]);
        let code = generate(node);
        expect(code).toBe("0.1");
    });

    it('(display 0.1)', () => {
        let filename: string = "test_float";
        let content: string = generate(parse(ast));
        const result: string = cpp_toolchain(filename, content);
        expect(result).toBe("0.1\n");
    });
});
