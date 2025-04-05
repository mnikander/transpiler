# Type Signatures of the Built-In Functions

## Equality

|    op | `==` `!=`
| ----: | :---
|    ex | `(== a b)`
|    in | Any, Any
|   out | Boolean
| about | equality, inequality

## Arithmetic and Comparison Functions
|    op | `+` `-` `*` `/` `%` `^` 
| ----: | :---
|    ex | `(+ a b)`
|    in | Number, Number
|   out | Number
| about | arithmetic

|    op | `<` `>` `<=` `>=`
| ----: | :---
|    ex | `(< a b)`
|    in | Number, Number
|   out | Boolean
| about | comparison

## Logical Functions

|    op | `&` `\|`
| ----: | :---
|    ex | `(& a b)`
|    in | Boolean, Boolean
|   out | Boolean
| about | and, or

|    op | `!`
| ----: | :---
|    ex | `(! a b)`
|    in | Boolean
|   out | Boolean
| about | not

## Lambda Functions

|    op | `lambda` or `->`
| ----: | :---
|    ex | `(lambda [a b] (+ 1 (+ a b))`
|    in | (List Identifier), Expression
|   out | T0, ..., Tn → U
| about | creates and returns an anonymous function, note that `lambda` and `->` are identical, it is a matter of preference

## Branching

|    op | `if`
| ----: | :---
|    ex | `(if true 42 0)`
|    in | Boolean, T0, T1
|   out | (Variant T0 T1)
| about | ternary if-expression

|    op |  `conditional`
| ----: | :---
|    ex |  `(conditional [(> 1 0) "comparisons work"] [(<= 1 0) "something is really broken"])`
|    in | [Boolean, T0] ... [Boolean, Tn]
|   out | (Variant T0 ... Tn)
| about | lisp-style conditional expression, can be used to imitate pattern-matching and switch-case statements

## Iteration

|    op | `until`
| ----: | :---
|    ex | `(until 0 (lambda x (== x 10)) (lambda (+ x 1)))`
|    in | (Tuple T0 ... Tn) <br/> (Tuple T0 ... Tn) → Boolean <br/> (Tuple T0 ... Tn) → (Tuple T0 ... Tn)
|   out | (Tuple T0 ... Tn)
| about | Until the input tuple satisfies a predicate, iteratively update the tuple by applying a projection to it. Once the condition is satisfied, return the final tuple as the result.

## Sequential Operations

|    op | `do`
| ----: | :---
|    ex | `(until expression_0 ... expression_n)`
|    in | T0 ... Tn
|   out | Tn
| about | evaluate a series of expressions in order

|    op | `pipe`
| ----: | :---
|    ex | `(pipe value function_0 ... function_n)`
|    in | T0 <br/> T0 → T1 <br/> ... <br/> Tm → Tn
|   out | Tn
| about | take a value, apply the first function to it, take that intermediate result, apply the 2nd function to it, and so on

|    op | `>>=`
| ----: | :---
|    ex | `(>>= (just 5) (lambda x (x / 5)))`
|    in | (Monad T0) <br/> T0 → T1 <br/> ... <br/> Tm → Tn
|   out | (Monad Tn)
| about | monadic bind, takes a monadic value and a series of non-monadic functions, passes the monadic value through those functions, and returns the monadic result

## Names
- `declare`
- `define`
- `overload` (?)
- `:` annotate
- `import`
- `export`
- `module`

## Types
In addition to primitive types and functions, the following data-types are provided out-of-the-box:
- `Variant`
- `Tuple`
- `List`
- `StaticArray`

### Type Operations
- `typeof`
- `sizeof`
- casts, to string, to int etc

### Variant Operations
- `Variant`
- check and access operations

### Tuple Operations
- `Tuple`
- `get`
- pattern match / decomposition / let-binding (?)

### List Operations
- `List`
- `head`
- `tail`
- empty / null
- pattern match / decomposition / let-binding (?)
- it might make sense to have a setter here which allows some acyclic operations, but requires a destructive move


### Static Array Operations
- `Array`
- `get`
- `at` with bounds-checking
- pattern match / decomposition / let-binding (?)

```lisp
(do
    (define data (Array [0 10 20 30]))
    (define elem (get data 2))
    (display (== elem 20)))     # true
```

### Other Datatypes
Note that many more datatypes can be implemented in terms of the already listed datatypes.
Several notable datatypes which are NOT included in this grammar, for the time being, are:
- Dynamic Array
- Set
- Dictionary

### Enumerations

Type-safe enums can be created by defining a variant of empty types, as follows:
```lisp
(do
    (define Red   Empty)
    (define Green Empty)
    (define Blue  Empty)
    (define Color (Variant Red Green Blue))
    (define x (: Color (Red [])))
    (== x Blue))
```
The above example returns `false` since x is not `Blue`.

> TODO: Do I have to construct an _instance_ of Red here as opposed to passing the type Red into x?
As written above, `x` is an empty variable of type `Color` of the `Red` variety.
This is the intendend behavior.
It is really easy to accidentally confuse types and values though, by typing `(define x Red)`.
That would create a variable of type `Type` with the value `Red`.
Without a type annotation for x, the compiler error may be cryptic since it will fail with an error about `x` being of type `Type` somewhere where `x` is used, or some where something else is used whose type was deduced via `x`.

### Interfaces
> TODO

### Generics
> TODO

## Memory Operations
- copy, move, borrow
- box

## Input, Output, Unsafe
- `display`
- `(unsafe arguments cpp_string)`
