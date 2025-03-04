// Copyright (c) 2025 Marco Nikander

import assert from "assert";
import { generate } from "../generate";

export function is_display(ast: any): boolean {
    let [head, ...tail] = ast;
    return head == "display";
}

export function generate_display(ast: any): string {
    let [head, ...tail] = ast;
    assert(tail.length == 1, `'display' requires 1 argument, ${tail.length} provided: <${tail.toString()}>`);
    return `std::cout << ${generate(tail[0])} << std::endl;\n`;
}
