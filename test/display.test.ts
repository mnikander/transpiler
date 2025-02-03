// Copyright (c) 2025 Marco Nikander

import { describe, it, expect } from 'vitest';
import { Display } from '../src/nodes';
import { generate } from '../src/generate';

let data: Display = {
    "lexeme": "Display",
    "value":
    {
        "lexeme": "Integer",
        "value": 5
    }
}

describe('Display', () => {
    let code: string = generate(data);
    it('zero', () => {
        expect(code).toBe("std::cout << 5l << std::endl;");
    });
});
