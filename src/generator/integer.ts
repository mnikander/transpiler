// Copyright (c) 2025 Marco Nikander

import assert from "assert";
import { Node } from "./nodes";

export class Integer implements Node {
    readonly lexeme: string = "Integer";
    value: number;

    constructor(input: number) {
        assert(Number.isInteger(input), "Must be an integer.");
        this.value = input;
    }

    generate(): string {
        return this.value.toString() + 'l';
    }
}
