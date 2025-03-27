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

|    op | `lambda`
| ----: | :---
|    ex | `(lambda [a b] (+ 1 (+ a b))`
|    in | (List Identifier), Expression
|   out | T0, ..., Tn → U
| about | creates and returns an anonymous function

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
| about | lisp-style conditional expression, can be used to immitate pattern-matching and switch-case statements

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
