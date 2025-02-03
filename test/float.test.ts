// Copyright (c) 2025 Marco Nikander

import { describe, it, expect } from 'vitest';
import { generate } from '../src/generate';
import { Display, Float } from '../src/nodes';

let data: Display = {
    lexeme: "Display",
    value: {
        lexeme: "Float",
        value: 0.1
    }
}

describe('Float', () => {

    it('simple', () => {
        let code = generate(data.value as Float);
        expect(code).toBe("0.1f");
    });
});
