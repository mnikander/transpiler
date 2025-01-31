# Compiler fragments

The goal is to prototype several language features and gain experience with the basics of language design and compilers.
This repository contains code fragments for the _intermediate code generation_ stage of a compiler.
Each code fragment implements an individual command or language feature.
Typically, this involves transforming one kind of node in an abstract syntax tree (AST) into target code.
The underlying assumption is that the AST nodes all have a very constistent structure, which makes it easy to represent the AST nodes.
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

might be parsed into the following AST node in JSON form:

```json
{
    "$type": "Application",
    "operator": {
        "$type": "Binary",
        "value": "define"
    },
    "arguments": [
        {
            "$type": "Variable",
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
const int x = 5;
```

Each fragment in this repository transforms an AST node from JSON into C++ code.
This breaks down the task of intermediate code generation into many smaller parts.
These parts can be developed, tested, and experimented with individually.

## Design
This section outlines key design decisions, the system design, and the strategy employed for testing.

### Choice of the Target Language

Several possible target languages were considered: LLVM IR, WebAssembly, C, C++, JavaScript, and TypeScript.
The web-based languages would allow executing the program in a browser, which is great for usability.
The assembly languages could ultimately provide the best runtime performance.
C++ was chosen as the target language because it's fast and provides useful abstractions.
This makes it easier to develop and debug the code generator, than if LLVM IR or WebAssembly was chosen as the target language.
The translation into other target languages may be implemented later.
It is beneficial if the architecture and testing pipelines support adding another target language later on.

### Choice of the Implementation Language

The code generator itself is written in TypeScript, so that it can be integrated into a [Langium](https://langium.org/) project.
The ecosystem provided by _NodeJS_ and _npm_ also provide much easier access to a huge number of libraries and packages, which speeds up development.
The runtime of the _transpiler_ is currently not a concern, since the goal is to prototype a few language features.

### Test Design

There are many ways to generate C++ code for one particular language keyword or feature.
For example, `const int x = 5;` and `int const x = 5;` mean the same thing.
Another example is that an expression such as `(lambda (a b) a)` can be translated into:
```cpp
[](auto a, auto b){ return a; }
```
or into :

```c++
struct lambda_NR { // NR must be a unique ID, to avoid collisions with other function objects
    template<typename T>
    T operator()(T a, T b){ return a; }
};
lambda_NR{};
```
which have advantages in brevity or type usability, respectively.
Being able to easily experiment with several different implementations, is an important factor during development.

Overall, there are several options for how to test the code generation:
1. string comparison on the generated C++ code
2. snapshot testing, where the generated code is compared to an earlier snapshot of the generated code
3. compile and execute the generated code

#### 1. String Comparison
The string comparison approach executes quickly and ensures that the code is exactly what is expected.
String comparision tests require updating of test-cases though, if the code generation is refactored even a little bit.
Furthermore, test cases via string comparison would have to be re-implemented from scratch for each additional target language.

#### 2. Snapshot testing
Snapshot testing is easy to implement: just add the generated C++ files to the git repository and keep an eye out for changes.
Snapshot testing doesn't check the correctness of the code though.
It will probably be used, but not as the primary test mechanism.

#### 3. Compilation and Execution
The last option, to compile and execute the generated code can be tedious to implement and may take a while especially when the number of test-cases is large.
This can be mitigated by only executing the test cases for files which have been modified.
The chosen unit testing framework, Vitest, does exactly this.

This testing strategy means that the result of the executed code must be passed to the surrounding unit test somehow, for example by printing to stdout.
A test for addition could be `(display (+ 1 2))`, i.e. the expression to be tested is wrapped inside the command to print to the console.
Since these tests only check the output of the executed program, these tests are agnostic to implementation details.
Other than the call to the compilation pipeline, these tests are also agnostic with regard to the chosen target language.
This should keep the amount of maintenance work low, as the codebase evolves.

Since only the output of the executable is tested, some properties of the generated code cannot be tested directly.
This may require extra test cases.
Since only the expected result must be specified in the test-case, unit tests should be fast and easy to write.

Since the transpiler is implemented in TypeScript, the unit tests will also be implemented in TypeScript.
This avoids unecessary complexity and allows using excellent packages available via _npm_.
The primary testing strategy will look like this:

```
+-----------------------+
| TypeScript unit test  |
| - JSON string for AST |
| - Expected result     |
+-----------------------+
           v
           v  ... generate code
           v
  +------------------+
  | C++ source files |
  +------------------+
           v
           v  ... call a C++ compiler
           v
    +-------------+
    | Executable  |
    +-------------+
           v
           v  ... run executable and
           v      pipe output to a file
           v
    +-------------+
    | Result file |
    +-------------+
           v
           v
           v
  +------------------+
  | Check output vs. |
  | expected value   |
  +------------------+
```

**Note**: Piping the output to a file is optional, since stdout can be read by the unit test directly.
It _can_ be helpful for debugging purposes, but this step might be removed soon.
