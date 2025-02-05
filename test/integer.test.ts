// Copyright (c) 2025 Marco Nikander

import { describe, it, expect } from 'vitest';
import { cpp_toolchain } from '../src/cpp_toolchain'
import { generate } from '../src/generate';

// (display 5)
let data = ["display", 5];

describe('Integer', () => {

    it('direct', () => {
        let code: string = generate(data[1]);
        expect(code).toBe("5");
    });

    it('(display 5)', () => {
        let filename: string = "test_integer";
        let content: string = generate(data);
        const result: string = cpp_toolchain(filename, content);
        expect(result).toBe("5\n");
    });
});
