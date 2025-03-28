// Copyright (c) 2025 Marco Nikander

import assert from "assert";
import { Expression, generate } from "../generate";

export interface Display {
    type: 'Display';
    arg: string; // TODO: change to Expression once everything is refactored
}

export function is_display(ast: any): boolean {
    let [head, ...tail] = ast;
    return head == "display";
}

export function make_display(ast: any): Display {
    let [head, ...tail] = ast;
    assert(tail.length == 1, `'display' requires 1 argument, ${tail.length} provided: <${tail.toString()}>`);
    return {type:'Display', arg: generate(tail[0])} as Display;
}

export function generate_display(node: Display): string {
    return `std::cout << ${node.arg} << std::endl;\n`;
}