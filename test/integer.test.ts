import { describe, it, expect } from 'vitest';
import { generate_integer } from '../src/integer';

describe('Integer', () => {
    let json: string = 
    `{
        "$type": "Integer",
        "value": 5
    }`;
    
    const node = JSON.parse(json);

    it('five', () => {
        expect(generate_integer(node)).toBe("5");
    });
});
