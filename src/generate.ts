// Copyright (c) 2025 Marco Nikander

import assert from "assert";

// TODO: set reasonable type information for the 'ast' parameter
export function generate(ast: any): string {
    if (ast instanceof Array) {
        if (is_display(ast)) {
            return generate_display(ast);
        }
        else if (is_add(ast)) {
            return generate_add(ast);
        }
        else if (is_define(ast)) {
            return generate_define(ast);
        }
        else {
            let [head, ...tail] = ast;
            assert(false, `unknown function <${head.toString()}> of type <${typeof head}> or incorrect number of arguments: <${tail.toString()}>, i.e. ${ast.length - 1}`);
        }
    }
    else if (typeof ast !== 'undefined') {
        return generate_atom(ast);
    }
    else {
        assert(false, "undefined node");
        return "/* ERROR: UNDEFINED NODE */";
    }
}

function generate_atom(ast: any): string {
    if (typeof ast === 'string') {
        return ast;
    }
    else if (ast !== Object(ast)) { // primitive data-type (not an object)
        return ast.toString();
    }
    else {
        assert(false, `invalid symbol <${ast.toString()}> of type <${typeof ast}>`);
        return "/* ERROR: INVALID SYMBOL */";
    }
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
    if (tail.length == 1) {
        return `auto const ${generate(tail[0])};`;
    }
    else if (tail.length == 2) {
        return `auto const ${generate(tail[0])} = ${generate(tail[1])};`;
    } else {
        assert(false, `'define' requires 1 or 2 arguments, ${tail.length} provided <${tail.toString}>`);
        return " /* ERROR: INCORRECT NUMBER OF ARGUMENTS */ ";
    }
}
