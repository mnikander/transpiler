// Copyright (c) 2025 Marco Nikander

import assert from "assert";

// TODO: set reasonable type information for the 'ast' parameter
export function generate(ast: any): string {
    let result: string = "";

    if (ast instanceof Array) {
        let [head, ...tail] = ast;

        if (head == "display" && ast.length == 2) {
            result += generate_display(head, tail);
        }
        else if (head == "add" && ast.length == 3) {
            result += generate_add(head, tail);
        }
        else if (head == "define" && ast.length == 3) {
            result += generate_define(head, tail);
        }
        else {
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

function generate_display(head: any, tail: any): string {
    assert(tail.length == 1, `'display' requires 1 argument, ${tail.length} provided: <${tail.toString()}>`);
    return `std::cout << ${generate(tail[0])} << std::endl;\n`;
}

function generate_add(head: any, tail: any): string {
    assert(tail.length == 2, `'add' requires 2 arguments, ${tail.length} provided: <${tail.toString()}>`);
    return `std::plus<>{}(${generate(tail[0])}, ${generate(tail[1])})`;
}

function generate_define(head: any, tail: any): string {
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
