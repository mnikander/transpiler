// Copyright (c) 2025 Marco Nikander

import assert from "assert";
import { Node } from "./nodes";

export class Float implements Node {
    readonly lexeme: string = "Float";
    value: number;

    constructor(input: number) {
        assert(!Number.isInteger(input), "Must be a float.");
        this.value = input;
    }

    generate(): string {
        return this.value.toString() + 'f';
    }
}
