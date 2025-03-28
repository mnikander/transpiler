# Transpiler for Symbolic Expressions

This project transpiles symbolic expressions similar to those found in Lisp and Scheme to C++.
The aim is to experiment with a few language features and learn about compilers and transpilers.
Currently, the focus of the codebase is on the _code generation_ stage of the transpiler.


## Getting Started

```bash
sudo apt install nodejs npm g++ cmake
git clone git@github.com:mnikander/transpiler.git
cd transpiler/
npm run clean  # the 'clean' target ensures the 'out/' and 'out/artifacts/' directories are created
npm run main   # build and run the example
npm test       # build and run the unit tests
```

Both the main function and the unit tests will automatically transpile their abstract syntax trees to C++ and then compile and execute the resulting programs. 
You can find all generated source files, executables, and result text files, in the directory `out/artifacts`, and you can run execute the programs manually from there.
**If** you wish to build the main program without immediately executing it, you can: `npm run build` and then and take a look at the generated code first.


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

We can use a ternary if-expression to do branching.
Say we wanted to check a condition, `1 > 0`, and if this condition is true we want to print "All good", and otherwise we want to print "Something is wrong".
We could implement this as follows:
```lisp
(display
    (if (> 1 0)
        "All good"
        "Something is wrong"))
```

We can create anonymous functions, lambda functions, as follows:
```lisp
(-> [a b] (+ 1 (+ a b)))
```
The 'lambda' or 'arrow' function `->` is an inbuilt function which _creates a new function_.
The created function takes a list of arguments `a` and `b`, and returns the value `1 + a + b`.
The newly created function is anonymous, i.e. it does not have a name.
This lambda function just takes arguments and returns a value.
Given a lambda, we can:
1. provide it argument values and evaluate it immediately
2. pass it into a higher-order function such as map
3. assign it a name and use it later via a `let`-binding
4. assign it a name using `define`, iff we are inside an imperative context such as a `do` block

Here is an example of creating and immediately invoking a lambda:
```lisp
((-> [a b] a) 1 2)
```
This creates a very simple function which takes two arguments, `a` and `b`, and returns `a`, i.e. the first of the two arguments.
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
