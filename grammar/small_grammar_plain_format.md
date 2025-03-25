# Lisp-Like Grammar
This version has plain formatting, to avoid formatting issues with Latex on GitHub.

```d
 (1) expression      =  (atom | call | list ) comment?
 (2) atom            =  identifier | number_literal | string_literal | type_literal
 (3) call            =  "(" expression+ ")"
 (4) list            =  "[" expression* "]"
```

## Comments, Identifiers, and Literals
```d
 (5) comment         =  linebreak* ( "#" (character | `'` | `"`)* linebreak linebreak*)?
 (6) identifier      =  special+ | (letter (letter | digit)*)
 (7) number_literal  =  sign? digit+ ("." digit+)?
 (8) string_literal  =  (`'` (character | `"`)* `'`) | (`"` (character | `'`)* `"`)
 (9) type_literal    =  "Type" | "Empty" | "Boolean" | "Byte" | "Ascii" |
                        "I8" | "I16" | "I32" | "I64" | "F32" | "F64"
```

## Characters and Digits
```d
(10) character       =  letter | digit | parenthesis | special | space
(11) letter          =  "a" | ... | "z" | "A" | ... | "Z"
(12) digit           =  "0" | ... | "9"
(13) parenthesis     =  "(" | ")" | "[" | "]" | "{" | "}"
(14) special         =  "." | "," | ":" | ";" | "!" | "?" | "<" | ">" | "@" | "#" | "$" | `\` |
                        "+" | "-" | "*" | "/" | "%" | "=" | "|" | "&" | "_" | "^" | "~"
(15) sign            =  "+" | "-"
(16) space           =   " " | "\t"
(17) linebreak       =  "\n" | "\n\r"
```

## Sources
- Lisp BNF: https://iamwilhelm.github.io/bnf-examples/lisp
