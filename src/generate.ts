// Copyright (c) 2025 Marco Nikander

import assert from "assert";

// TODO: set reasonable type information for the 'ast' parameter
export function generate(ast: any): string {
    let result: string = "";

    if (ast instanceof Array) {
        if (is_display(ast)) {
            result += generate_display(ast);
        }
        else if (is_add(ast)) {
            result += generate_add(ast);
        }
        else if (is_define(ast)) {
            result += generate_define(ast);
        }
        else {
            let [head, ...tail] = ast;
            assert(false, `unknown function <${head.toString()}> of type <${typeof head}> or incorrect number of arguments: <${tail.toString()}>, i.e. ${ast.length - 1}`);
        }
    }
    else if (typeof ast !== 'undefined') {
        result += generate_atom(ast);
    }
    else {
        result += "/* ERROR: UNDEFINED NODE */";
        assert(false, "undefined node");
    }
    return result;
}

function generate_atom(ast: any): string {
    let result: string = "";
    if (typeof ast === 'string') {
        result += ast;
    }
    else if (ast !== Object(ast)) { // primitive data-type (not an object)
        result += ast.toString();
    }
    else {
        assert(false, `invalid symbol <${ast.toString()}> of type <${typeof ast}>`);
    }
    return result;
}

function is_display(ast: any): boolean {
    let [head, ...tail] = ast;
    return head == "display" && ast.length == 2;
}

function generate_display(ast: any): string {
    let [head, ...tail] = ast;
    assert(tail.length == 1, `'display' requires 1 argument, ${tail.length} provided: <${tail.toString()}>`);
    return `std::cout << ${generate(tail[0])} << std::endl;\n`;
}

function is_add(ast: any): boolean {
    let [head, ...tail] = ast;
    return head == "add" && ast.length == 3;
}

function generate_add(ast: any): string {
    let [head, ...tail] = ast;
    assert(tail.length == 2, `'add' requires 2 arguments, ${tail.length} provided: <${tail.toString()}>`);
    return `std::plus<>{}(${generate(tail[0])}, ${generate(tail[1])})`;
}

function is_define(ast: any): boolean {
    let [head, ...tail] = ast;
    return head == "define" && ast.length == 3;
}

function generate_define(ast: any): string {
    let [head, ...tail] = ast;
    let result: string = "";
    if (tail.length == 1) {
        result += `auto const ${generate(tail[0])};`;
    }
    else if (tail.length == 2) {
        result += `auto const ${generate(tail[0])} = ${generate(tail[1])};`;
    } else {
        assert(false, `'define' requires 1 or 2 arguments, ${tail.length} provided <${tail.toString}>`);
    }
    return result;
}
