// Copyright (c) 2025 Marco Nikander

import { describe, it, expect } from 'vitest';
import { Float } from '../../src/generator/float';
import data from './float.json';

describe('Float', () => {
    let node = new Float(data.value);

    it('zero', () => {
        expect(node.generate()).toBe("0.1f");
    });
});
