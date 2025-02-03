// Copyright (c) 2025 Marco Nikander

import { describe, it, expect } from 'vitest';
import { generate } from '../src/generate';
import { Display, Integer } from '../src/nodes';

let data: Display = {
    lexeme: "Display",
    value: {
        lexeme: "Integer",
        value: 5
    }
}

describe('Integer', () => {

    it('simple', () => {
        let code: string = generate(data.value as Integer);
        expect(code).toBe("5l");
    });
});
