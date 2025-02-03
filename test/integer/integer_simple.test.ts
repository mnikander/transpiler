// Copyright (c) 2025 Marco Nikander

import { describe, it, expect } from 'vitest';
import { generate_integer } from '../../src/generator/integer';

// TODO: initialize dispatcher with the code generation function

describe('Integer', () => {
    
    it('zero', () => {
        let json: string = 
        `{
            "$type": "Integer",
            "value": 0
        }`;
        
        const node = JSON.parse(json);
        expect(generate_integer(node)).toBe("0");
    });
});
