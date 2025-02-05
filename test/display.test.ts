// Copyright (c) 2025 Marco Nikander

import { describe, it, expect } from 'vitest';
import { cpp_toolchain } from '../src/cpp_toolchain'
import { generate } from '../src/generate';

// (display 5)
let data = ["display", 5];

describe('Display', () => {
    it('direct', () => {
        let code: string = generate(data);
        expect(code).toBe("std::cout << 5 << std::endl;\n");
    });

    it('(display 5)', () => {
        let filename: string = "test_display";
        let content: string = generate(data);
        const result: string = cpp_toolchain(filename, content);
        expect(result).toBe("5\n");
    });
});
