// Copyright (c) 2025 Marco Nikander

import { Node } from "./nodes";

export class Display implements Node {
    readonly $type = "Display";
    value: Node;
    generate(): string {
        return `std::cout << ${this.value.generate()} << std::endl;`;
    }

    constructor(input: Node) {
        this.value = input;
    }
}
