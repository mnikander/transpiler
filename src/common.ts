// Copyright (c) 2025 Marco Nikander

import { Atom } from "./node/atom";
import { Add } from "./node/add";
import { Call } from "./node/call";
import { Define } from "./node/define";
import { Display } from "./node/display";
import { Divide } from "./node/divide";
import { Error } from "./node/error";
import { Equal } from "./node/equal";
import { If } from "./node/if";
import { Lambda } from "./node/lambda";
import { Multiply } from "./node/multiply";
import { Subtract } from "./node/subtract";

export interface Node {
    type: string;
}

export type Expression = Add | Atom | Call | Define | Display | Divide | Equal | Error | If | Lambda | Multiply | Subtract;
