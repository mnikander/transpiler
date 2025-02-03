// Copyright (c) 2025 Marco Nikander

import { describe, it, expect } from 'vitest';
import { generate_integer, Integer } from '../../src/generator/integer';
import data from './test_01.json';

describe('Integer', () => {
    const node = data as Integer;

    it('string comparison', () => {
        expect(generate_integer(node)).toBe("5");
    });
});
