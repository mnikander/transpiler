# Compiler fragments

This repository contains code fragments for the _intermediate code generation_ stage of a compiler.
Each code fragment implements an individual command or language feature.
Typically, this involves transforming one kind of node in an abstract syntax tree (AST), into target code.
The underlying assumption is that the AST nodes all have a very constistent structure.
A language similar to Lisp, relying entirely on symbolic expressions in prefix-notation, would likely have an AST with such a homogeneous structure.
For example the function application:

```lisp
(define x 5)
```
<!--
With type annotations:
```lisp
(define x:I64 5)
(define (first foo:I64 bar:I64) foo)
```
-->

Might be parsed into the following AST node in JSON form:

```json
{
    "$type": "Application",
    "operator": {
        "$type": "Binary",
        "value": "define"
    },
    "arguments": [
        {
            "$type": "ID",
            "value": "x"
        },
        {
            "$type": "Integer",
            "value": 5
        }
    ]
}
```

This AST node could then be transformed into the following C++ code:

```c++
int const x = 5;
```

Each fragment in this repository transforms an AST node from JSON into C++ code.
This breaks down the task of intermediate code generation into many smaller parts.
These parts can which can be developed, tested, and experimented with individually. 
