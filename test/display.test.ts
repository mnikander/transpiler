// Copyright (c) 2025 Marco Nikander

import { describe, it, expect } from 'vitest';
import { generate } from '../src/generate';
import { Display } from '../src/nodes';

let data: Display = {
    lexeme: "Display",
    value: {
        lexeme: "Integer",
        value: 5
    }
}

describe('Display', () => {
    it('simple', () => {
        let code: string = generate(data);
        expect(code).toBe("std::cout << 5l << std::endl;");
    });
});
