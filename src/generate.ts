// Copyright (c) 2025 Marco Nikander

import assert from "assert";
import { Atom, generate_atom} from "./node/atom";
import { Add, generate_add} from "./node/add";
import { Call, generate_call} from "./node/call";
import { Define, generate_define} from "./node/define";
import { Display, generate_display} from "./node/display";
import { Divide, generate_divide} from "./node/divide";
import { Error, generate_error} from "./node/error";
import { Equal, generate_equal} from "./node/equal";
import { If, generate_if} from "./node/if";
import { Lambda, generate_lambda} from "./node/lambda";
import { Multiply, generate_multiply} from "./node/multiply";
import { Subtract, generate_subtract} from "./node/subtract";
import { Expression } from "./common";

export function generate<T extends Expression>(node: T): string {
    if (node.type == 'Display') {
        return generate_display(node as Display);
    }
    else if (node.type == 'Error') {
        return generate_error(node as Error);
    }
    else if (node.type == 'Add') {
        return generate_add(node as Add);
    }
    else if (node.type == 'Subtract') {
        return generate_subtract(node as Subtract);
    }
    else if (node.type == 'Multiply') {
        return generate_multiply(node as Multiply);
    }
    else if (node.type == 'Divide') {
        return generate_divide(node as Divide);
    }
    else if (node.type == 'Equal') {
        return generate_equal(node as Equal);
    }
    else if (node.type == 'Define') {
        return generate_define(node as Define);
    }
    else if (node.type == 'Lambda') {
        return generate_lambda(node as Lambda);
    }
    else if (node.type == 'If') {
        return generate_if(node as If);
    }
    else if (node.type == 'Call') {
        return generate_call(node as Call);
    }
    else if (node.type == 'Atom') {
        return generate_atom(node as Atom);
    }
    else {
        assert(false, "undefined node");
        return "/* ERROR: UNDEFINED NODE */";
    }
}
