// Copyright (c) 2025 Marco Nikander

import { describe, it, expect } from 'vitest';
import { Float } from '../src/nodes';
import { generate } from '../src/generate';

let data: Float = {
    "lexeme": "Float",
    "value": 0.1
}

describe('Float', () => {
    let code = generate(data);

    it('zero', () => {
        expect(code).toBe("0.1f");
    });
});
