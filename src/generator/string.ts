// Copyright (c) 2025 Marco Nikander

import { Node } from "./nodes";

export class String implements Node {
    readonly lexeme: string = "String";
    value: string;

    constructor(input: string) {
        this.value = input;
    }

    generate(): string {
        return this.value;
    }
}
