// Copyright (c) 2025 Marco Nikander

import assert from "assert";
import { Expression, Node } from "../common";
import { generate } from "../generate";
import { parse } from "../parse";

export interface Display extends Node {
    type: 'Display';
    arg: Expression;
}

export function is_display(ast: any): boolean {
    let [head, ...tail] = ast;
    return head == "display";
}

export function make_display(ast: any): Display {
    let [head, ...tail] = ast;
    assert(tail.length == 1, `'display' requires 1 argument, ${tail.length} provided: <${tail.toString()}>`);
    return {type:'Display', arg: parse(tail[0])} as Display;
}

export function generate_display(node: Display): string {
    return `std::cout << ${generate(node.arg)} << std::endl;\n`;
}