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
        else if (is_subtract(ast)) {
            return generate_subtract(ast);
        }
        else if (is_equal(ast)) {
            return generate_equal(ast);
        }
        else if (is_define(ast)) {
            return generate_define(ast);
        }
        else if (is_lambda(ast)) {
            return generate_lambda(ast);
        }
        else if (is_if(ast)) {
            return generate_if(ast);
        }
        else {
            return generate_function_application(ast);
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
        if (ast == "True") {
            return "true";
        }
        else if (ast === "False") {
            return "false";
        }
        else {
            return ast;
        }
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
    return head == "display";
}

function generate_display(ast: any): string {
    let [head, ...tail] = ast;
    assert(tail.length == 1, `'display' requires 1 argument, ${tail.length} provided: <${tail.toString()}>`);
    return `std::cout << ${generate(tail[0])} << std::endl;\n`;
}

function is_add(ast: any): boolean {
    let [head, ...tail] = ast;
    return head == "add" || head == "+";
}

function generate_add(ast: any): string {
    let [head, ...tail] = ast;
    assert(tail.length == 2, `'add' requires 2 arguments, ${tail.length} provided: <${tail.toString()}>`);
    return `std::plus<>{}(${generate(tail[0])}, ${generate(tail[1])})`;
}

function is_subtract(ast: any): boolean {
    let [head, ...tail] = ast;
    return head == "subtract" || head == "-";
}

function generate_subtract(ast: any): string {
    let [head, ...tail] = ast;
    assert(tail.length == 2, `'subtract' requires 2 arguments, ${tail.length} provided: <${tail.toString()}>`);
    return `std::minus<>{}(${generate(tail[0])}, ${generate(tail[1])})`;
}

function is_equal(ast: any): boolean {
    let [head, ...tail] = ast;
    return head == "equal" || head == "==";
}

function generate_equal(ast: any): string {
    let [head, ...tail] = ast;
    assert(tail.length == 2, `'equal' requires 2 arguments, ${tail.length} provided: <${tail.toString()}>`);
    return `std::equal_to<>{}(${generate(tail[0])}, ${generate(tail[1])})`;
}

function is_define(ast: any): boolean {
    let [head, ...tail] = ast;
    return head == "define";
}

function generate_define(ast: any): string {
    let [head, ...tail] = ast;
    if (tail.length == 1) {
        return `auto const ${generate(tail[0])};`;
    }
    else if (tail.length == 2) {
        return `auto const ${generate(tail[0])} = ${generate(tail[1])};\n`;
    } else {
        assert(false, `'define' requires 1 or 2 arguments, ${tail.length} provided <${tail.toString}>`);
        return " /* ERROR: INCORRECT NUMBER OF ARGUMENTS */ ";
    }
}

function is_if(ast: any): boolean {
    let [head, ...tail] = ast;
    return head == "if"; // || head == "?";
}

function generate_if(ast: any): string {
    let [head, ...tail] = ast;
    assert(tail.length == 3, `'if' requires 3 arguments, ${tail.length} provided: <${tail.toString()}>`);
    return `((${generate(tail[0])}) ? (${generate(tail[1])}) : (${generate(tail[2])}))`;
}

function generate_function_application(ast: any[]): string {
    let [head, ...tail] = ast;
    let result = "";
    result += generate(head);
    result += "(";
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
    return head == "lambda";
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
