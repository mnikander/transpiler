// Copyright (c) 2025 Marco Nikander

import assert from "assert";
import { Expression, generate, parse } from "../generate";

export interface Add {
    type: 'Add';
    left: Expression;
    right: Expression;
}

export function is_add(ast: any): boolean {
    let [head, ...tail] = ast;
    return head == "add" || head == "+";
}

export function make_add(ast: any): Add {
    let [head, ...tail] = ast;
    assert(tail.length == 2, `'add' requires 2 arguments, ${tail.length} provided: <${tail.toString()}>`);
    return {type: 'Add', left: parse(tail[0]), right: parse(tail[1])} as Add;
}

export function generate_add(ast: Add): string {
    return `std::plus<>{}(${generate(ast.left)}, ${generate(ast.right)})`;
}
