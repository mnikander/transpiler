// Copyright (c) 2025 Marco Nikander

import { describe, it, expect } from 'vitest';
import { Integer } from '../../src/generator/integer';
import data from './integer_5.json';

describe('Integer', () => {
    let node = new Integer(data.value);

    it('five', () => {
        expect(node.generate()).toBe("5l");
    });
});
