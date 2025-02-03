// Copyright (c) 2025 Marco Nikander

import { describe, it, expect } from 'vitest';
import { generate } from '../src/generate';
import { Display, String } from '../src/nodes';

let data: Display = {
    lexeme: "Display",
    value: {
        lexeme: "String",
        value: "Hello, world."
    }
}

describe('String', () => {
    it('simple', () => {
        let code: string = generate(data.value as String);
        expect(code).toBe('"Hello, world."');
    });
});
