// Copyright (c) 2025 Marco Nikander

import assert from "assert";
import { Expression, Node } from "../common";
import { generate } from "../generate";
import { parse } from "../parse";

export interface If extends Node {
    type: 'If';
    condition: Expression;
    trueExpr: Expression;
    falseExpr: Expression;
}

export function is_if(ast: any): boolean {
    let [head, ...tail] = ast;
    return head == "if"; // || head == "?";
}

export function make_if(ast: any): If {
    let [head, ...tail] = ast;
    assert(tail.length == 3, `'if' requires 3 arguments, ${tail.length} provided: <${tail.toString()}>`);
    return {type: 'If', condition: parse(tail[0]), trueExpr: parse(tail[1]), falseExpr: parse(tail[2])} as If;
}

export function generate_if(ast: If): string {
    return `((${generate(ast.condition)}) ? (${generate(ast.trueExpr)}) : (${generate(ast.falseExpr)}))`;
}
