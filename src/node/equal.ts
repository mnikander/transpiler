// Copyright (c) 2025 Marco Nikander

import assert from "assert";
import { Expression, Node } from "../common";
import { generate } from "../generate";
import { parse } from "../parse";

export interface Equal extends Node {
    type: 'Equal';
    left: Expression;
    right: Expression;
}

export function is_equal(ast: any): boolean {
    let [head, ...tail] = ast;
    return head == "equal" || head == "==";
}

export function parse_equal(ast: any): Equal {
    let [head, ...tail] = ast;
    assert(tail.length == 2, `'equal' requires 2 arguments, ${tail.length} provided: <${tail.toString()}>`);
    return {type: 'Equal', left: parse(tail[0]), right: parse(tail[1])} as Equal;
}

export function generate_equal(ast: Equal): string {
    return `std::equal_to<>{}(${generate(ast.left)}, ${generate(ast.right)})`;
}
