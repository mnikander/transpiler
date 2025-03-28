# Transpiler for Symbolic Expressions

This project transpiles symbolic expressions similar to those found in Lisp and Scheme to C++.
The aim is to experiment with a few language features and learn about compilers and transpilers.
Currently, the focus of the codebase is on the _code generation_ stage of the transpiler.

## Getting Started

1. Clone this repo
2. Ensure you have _nodejs_, _npm_, and _g++_ installed
3. `npm run main` to build and run the example
4. `npm test` to build and run the unit tests

Both the main function and the unit tests will automatically transpile their abstract syntax trees to C++ and then compile and execute the resulting programs. 
If you wish to build the main program without immediately executing it, you can use `npm run build` and then manually execute it with `./out/artifacts/main`.
You can find all generated source files, executables, and result text files, in the directory `out/artifacts`.


## Brief Introduction to Symbolic Expressions
Here is a basic example of a [symbolic expression](https://en.wikipedia.org/wiki/S-expression) which computes computes `1 + 2`:
```lisp
(+ 1 2)
```
Symbolic expressions are written in prefix-notation, i.e. Polish notation, so the name of the function, in this case `+` is written first.
The function name is followed by its arguments, separated by spaces.
The entire expression is enclosed by parentheses, to ensure it is absolutely clear which arguments belong to which function.
This also means that the order of execution is made explicit, instead of relying on precedence rules.
For a mathematical expression such `1 + 2 * 3`, the usual precedence rule is to compute multiplication before addition.
In a symbolic expression, the order of execution is explicit:
```lisp
(+ 1 (* 2 3))
```

If we want to print something to the console, we can write:
```lisp
(display 42)
```

Here is a slightly more complex example:
```lisp
(display
    (if (> 1 0)
        "All good"
        "Something is wrong"))
```
We can make use of a ternary if-expression to check for a condition `1 > 0`, if this is true we return the string "All good" and otherwise we return "Something is wrong".
Finally, whatever the result of the if-expression is, is printed to the screen.

We can create anonymous functions, lambda functions, as follows:
```lisp
(-> [a b] (+ 1 (+ a b)))
```
The arrow `->` is a function, which creates a new function. 
The created function takes a list of arguments `a` and `b`, and returns the value `1 + a + b`.
The newly created function is anonymous, i.e. it does not have a name.
This lambda function just takes arguments and returns a value.
We can either assign it a name, or we can provide argument values and evaluate it immediately.
Here is an example of an immediately-invoked lambda:
```lisp
((-> [a b] a) 1 2)
```
This creates a very simple function that takes two arguments, `a` and `b`, and returns `a`, i.e. the first of the two arguments.
The values `1` and `2` are passed into this lambda function, so this whole expression evaluates to a `1`.

<!-- We can use the keyword `define` to assign names to values, types, and functions, for example to create a variable named `x` with the value `5` we can write:
```lisp
(define x 5)
```
Or to create a function called `first` which takes two arguments and simply returns the first one of those two, we can write:
```lisp
(define first (-> [a b] a))
```

Note that strictly speaking, `define` is a _procedure_ and not a _function_, since it does not return anything. 
Instead, `define` has side-effects on the context (i.e. environment): it introduces a new name.
In this project, the focus lies on symbolic expressions _without_ side-effects, so `define` is only available inside of certain contexts, such as a `do` block. -->

---
**Copyright (c) 2025 Marco Nikander**
