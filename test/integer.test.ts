// Copyright (c) 2025 Marco Nikander

import { describe, it, expect } from 'vitest';
import { Integer } from '../src/nodes';
import { generate } from '../src/generate';

let data: Integer = {
    "lexeme": "Integer",
    "value": 5
}

describe('Integer', () => {
    let code: string = generate(data);

    it('five', () => {
        expect(code).toBe("5l");
    });
});
