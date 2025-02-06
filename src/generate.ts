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
        else if (is_higher_order_function(ast)) {
            return generate_higher_order_function(ast);
        }
        else if (is_lambda(ast)) {
            return generate_lambda(ast);
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
    return head == "define" && (ast.length == 2 || ast.length == 3);
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

function generate_lambda_arguments(args: string | string[]): string {
    if (args instanceof Array) {
        let result: string = "";
        for (let i = 0; i < args.length; i++) {
            result += `auto const& ${args[i]}`;
            if ((i + 1) < args.length) {
                result += ', ';
            }
        }
        return result;
    }
    else if (typeof args === 'string') {
        return `auto const& ${args}`;
    }
    else
    {
        assert(false, `invalid function argument <${args}> of type <${typeof args}>`);
        return "/* ERROR: INVALID FUNCTION ARGUMENT */";
    }
}

function is_higher_order_function(ast: any): boolean {
    if (ast instanceof Array && ast[0] instanceof Array) {
        return true;
    }
    else {
        return false;
    }
}

function generate_higher_order_function(ast: any[][]): string {
    let [head, ...tail] = ast;
    let result = "";
    result += generate(ast[0]) + "(";
    for (let i = 0; i < tail.length; i++) {
        result += `${generate(tail[i])}`;
        if ((i + 1) < tail.length) {
            result += ', ';
        }
    }
    result +=  ")";
    return result;
}

function is_lambda(ast: any): boolean {
    let [head, ...tail] = ast;
    return head == "lambda" && ast.length == 3;
}

function generate_lambda(ast: string[] | string[][]): string {
    let [head, ...tail] = ast;
    if (tail.length == 2) {
        let result: string = "[](";
        result += generate_lambda_arguments(tail[0]);
        result += "){ return ";
        result += generate(tail[1]);
        result += "; }";
        return result;
    }
    else {
        assert(false, `'lambda' requires 2 arguments, ${tail.length} provided <${tail.toString}>`);
        return " /* ERROR: INCORRECT NUMBER OF ARGUMENTS */ ";
    }
}
