// Copyright (c) 2025 Marco Nikander

import { describe, it, expect } from 'vitest';
import { Display } from '../../src/generator/display';
import { Integer } from '../../src/generator/integer';
import data from './display.json';

describe('Display', () => {
    let int = new Integer(data.value.value);
    let node = new Display(int);

    it('zero', () => {
        expect(node.generate()).toBe("std::cout << 5l << std::endl;");
    });
});
