## Expressions and Functions
<!-- TODO: insert missing elements from the sections below -->

```math
\begin{align}
\text{[entry]}              &\to \text{[expression]}\\
\text{[nonliteral]}         &\to
\begin{cases}
                            \text{[identifier]}\\
                            \text{[function]}\\
                            \text{[application]}
% note: access to a list of functions is covered by the 'application' case
\end{cases}\\
\text{[expression]}         &\to
\begin{cases}
                            \text{[literal]}\\
                            \text{[type]}\\ % TODO: will this cause problems?
                            \text{[list]}\\
                            \text{[nonliteral]}
\end{cases}\\
\text{[lambda]}             &\to ( \text{-> } \text{[arguments]} \text{[expression]} )\\
\text{[application]}        &\to ( \text{[nonliteral]} \text{[expression]}^* )\\
\text{[function]}           &\to
\begin{cases}
                        \text{[lambda]}\\
                        \text{[basicfunction]}\\
                        \text{[if]}\\
                        \text{[conditional]}\\
                        \text{[until]}\\
                        \text{[construct]}\\
                        \text{[head]}\\
                        \text{[tail]}
\end{cases}\\
\text{[basicfunction]}      &\to
    \text{+} \mid \text{-} \mid \text{*} \mid
    \text{/} \mid \text{\%} \mid \wedge \mid
    \text{\&} \mid \text{|} \mid \text{!} \mid
    \text{<} \mid \text{>} \mid \text{<=} \mid
    \text{>=} \mid \text{==} \mid \text{!=}\\
\text{[if]}                 &\to ( \textit{if } \text{[expression]} \text{[expression]} \text{[expression]})\\
\text{[conditional]}        &\to ( \textit{conditional } \{ \textit{ [ } \text{[expression]} \text{[expression]} \textit{ ] }\}^+ )\\
\text{[until]}              &\to ( \textit{until } \text{[expression]} \text{[expression]} \text{[expression]})\\
\end{align}
```
A basic example:
```lisp
(display
    (if (> 1 0)
        "All good"
        "Something is wrong"))
```
Function application, using an immediately-invoked lambda which returns its first argument:
```lisp
((-> [a b] a) 2 4)
```
> TODO: since a function can be assigned to an identifier, do I need to include identifiers in the production rule for [function]?
If so, I need to include identifiers as a possibility in way more places.

## Sequentially-evaluated expressions
> TODO: add these productions to the grammar above -->
```math
\begin{align}
\text{[do]}                 &\to
    \begin{cases}
    ( \textit{do } \text{[expression]}^+ )\\
    ( \textit{do } \text{[list]})
    \end{cases}\\
\text{[inverse\_compose]}   &\to
    \begin{cases}
    ( \textit{pipeline } \text{[expression]} \text{[function]}^* )\\
    ( \textit{pipeline } \text{[list]})
    \end{cases}\\
\text{[monadic\_bind]}      &\to
    \begin{cases}( \textit{bind } \text{[expression]}^+ )\\
    ( \textit{bind } \text{[list]})
    \end{cases}\\
\end{align}
```

## Names
> TODO: add these productions to the grammar above

```math
\begin{align}
\text{[identifier]}         &\to \text{[letter\_]}\text{[alphanumeric\_]}^*\\
\text{[identifierlist]}     &\to \textit{ [ } \text{[identifier]}^* \textit{ ] }\\
\text{[arguments]}          &\to \text{[identifier]} \mid \text{[identifierlist]}\\
% do I want `(declare identifier type)` or `(declare type identifier)` ?
\text{[declare]}           &\to ( \textit{declare } \text{[identifier]} \text{[type]} )\\
\text{[define]}            &\to ( \textit{define } \text{[identifier]} \text{[expression]} )\\
\text{[overload]}          &\to ( \textit{overload } \text{[identifier]}\text{[type]}\text{[expression]} )\\
\text{[annotate]}          &\to ( \text{: } \text{[type]} \text{[expression]} )\\
\text{[module]}            &\to \\ % TODO
\text{[import]}            &\to \\ % TODO
\text{[export]}            &\to \\ % TODO
\end{align}
```
> TODO: is the order of the arguments consistent, concerning identifiers, types, and expressions?

> TODO: do I want overloading or type-classes?
I need to be able to extend built-in operations such as '+' to new datatypes.

> TODO: check how module, import, and export work in Scheme.
<!--
With `module` I want to create something similar to namespaces in C++ or modules in Python.
`import` could possibly be similar to a let-binding in Scheme.
`export` denotes which functions, types, and interfaces are publically visible, i.e. importable, from a module.
This implies that a module may actually be a list of identifiers, some of which are marked with the export keyword.
-->

> TODO: Keyword for linear variables and arguments

## Types

>TODO: Are types expressions, i.e. first-class citizens, which can be passed into and returned from functions, assigned to identifiers, stored in datastructures etc?
<!--
There are at least three possibilities:\
(1) types are first class citizens and belong into the expression category\
(2) types should be a category of their own\
(3) a special category is created for compile-time expressions, which types are part of (would most functions have to be part of this category too? Or is it better to check constexpr with a validation, rather than making it part of the grammar?)\
-->

> TODO: Do I need to distinguish between Lists and Typelists so that I avoid a circular reasoning when defining the List, and its type signature?
Does the existance of a type-list or type-array, with a syntax such as `<Boolean I32 F32>`, make the grammar more specific and more robust?

> TODO: Interfaces, type classes, generics


```math
\begin{align}
\text{[type]}               &\to
    \begin{cases}
    \text{[variant\_type]}\\
    \text{[tuple\_type]}\\
    \text{[list\_type]}\\
    \text{[static\_array\_type]}\\
    \text{[function\_type]}\\
    \text{[primitive\_type]}\\
    \space % TODO
    \end{cases}\\
\text{[variant\_type]}      &\to
    \begin{cases}
    ( \textit{Variant } \text{[type]}^+ )\\
    ( \textit{Variant } \text{[array]} )
    \end{cases}\\
\text{[tuple\_type]}        &\to
    \begin{cases}
    ( \textit{Tuple } \text{[type]}^+ )\\
    ( \textit{Tuple } \text{[array]} )
    \end{cases}\\
\text{[list\_type]}         &\to ( \textit{List } \text{[type]} )\\
\text{[static\_array\_type]}  &\to ( \textit{Array } \text{[type]} \text{[integer\_literal]} )\\
\text{[function\_type]}     &\to ( \textit{Function } \text{[type\_arguments]} \text{[type\_arguments]} )\\
\text{[type\_arguments]}    &\to \text{[type]} \mid \text{[typevector]}\\
\text{[typevector]}         &\to \text{<} \text{[type]}^* \text{>}\\ %TODO: can this be replaced by a list of types or array of types? A tuple of types is not an option because a tuple requires multiple type parameters, i.e. a tuple would require a tuple of types for its own type signature. This won't work, so some datastructure with only a single template parameter, set to 'Type' must be used for all type signatures. This could be a List, static Array, or a special Typevector type.
\text{[primitive\_type]}    &\to \text{Nil} \mid \text{Type} \mid \text{Boolean} \mid \text{Byte} \mid \text{C8} \mid \text{I8} \mid \text{I16} \mid \text{I32} \mid \text{I64} \mid \text{F32} \mid \text{F64}\\
\end{align}
```

<!--
TODO: Algebraic Data Types (ADTs) are variants of tuples of pointers which allow recursive tree-like structures.
How do you define the type? How do you initialize them with data?
-- I could make use of the Lisp-style list.
It stores pointers to two child elements and if the data is set to a variant of tuples then it can encode ADTs.
-->

> TODO: Can I create type-safe enums by defining a variant of empty types, as follows?
```lisp
(do
    (define Red   (: Type Nil))
    (define Green (: Type Nil))
    (define Blue  (: Type Nil))
    (define Color (: Type (Variant <Red Green Blue>))))
```

### Type Operations
```math
\begin{align}
\text{[typeof]}             &\to ( \textit{typeof } \text{[type\_indentifier]} )\\
\text{[sizeof]}             &\to ( \textit{sizeof } \text{[type\_indentifier]} )\\
\text{[type\_indentifier]}  &\to ( \text{[type]} \mid \text{[identifier]} )\\
\end{align}
```
<!--
TODO: is `sizeof` actually needed when programming, seeing as I won't be dealing with raw pointers?
If some sort of external function call or inter-operability with C is desired, this might be quite helpful.
-->

### Variant Operations
> TODO
### Tuple Operations
> TODO

### List Operations

```math
\begin{align}
\text{[list]}               &\to \textit{ [ } \text{[expression]}^* \textit{ ] }\\
\text{[construct]}          &\to ( \textit{construct } \text{[expression]}\text{[expression]} )\\
\text{[head]}               &\to ( \textit{head } \text{[list]} )\\
\text{[tail]}               &\to ( \textit{tail } \text{[list]} )\\
\end{align}
```

### Static Array Operations
> TODO: does it make sense to implement a reference-counted slice-view on arrays, so that head and tail operations are possible? Or should index-based access be the only access pattern?
```math
\begin{align}
\text{[array]}              &\to < \text{[expression]}^* >\\
\text{[get\_array]}         &\to ( \textit{get} \text{[array]} \text{[expression]} )\\
\end{align}
```
```lisp
(do
    (define data <0 10 20 30>)
    (define elem (get data 2))
    (display (== elem 20)))     # true
```
### Other Datatypes
Note that many more datatypes can be implemented in terms of the already listed datatypes.
Several notable datatypes which are NOT included in this grammar, for the time being, are:
- Dynamic Array
- Set
- Dictionary

## Memory Operations
<!-- TODO -->
```math
\begin{align}
\text{[copy]}               &\to ( \textit{copy } \text{[identifier]} )\\
\text{[move]}               &\to ( \textit{move } \text{[identifier]} )\\
\text{[borrow]}             &\to ( \textit{borrow } \text{[identifier]} )\\
\text{[box]}                &\to ( \textit{box } \text{[expression]} )\\
\end{align}
```

## Input and Output

```math
\begin{align}
\text{[display]}            &\to ( \textit{display } \text{[expression]} )
\end{align}
```

## Literals

```math
\begin{align}
\text{[integer\_literal]}   &\to \text{[+-]}^? \text{[digit]}^+\\
\text{[float\_literal]}     &\to \text{[+-]}^? \text{[digit]}^*\text{[.]}\text{[digit]}^+\\
\text{[character\_literal]} &\to \text{[']} \text{[ascii]} \text{[']}\\
\text{[string\_literal]}    &\to \text{["]} \text{[ascii]}^* \text{["]}\\
\text{[literal]}            &\to
\begin{cases}
                            \text{[integer\_literal]}\\
                            \text{[float\_literal]}\\
                            \text{[character\_literal]}\\
                            \text{[string\_literal]}
\end{cases}\\
\end{align}
```

## Basic characters and digits

```math
\begin{align}
\text{[digit]}              &\to \text{0}\mid ... \mid \text{9}\\
\text{[letter\_]}           &\to \text{\_} \mid \text{a} \mid...\mid \text{z} \mid \text{A} \mid...\mid \text{Z}\\
\text{[alphanumeric\_]}     &\to \text{[digit]} \mid \text{[letter\_]}\\
\text{[.]}                  &\to \text{.}\\
\text{[']}                  &\to \text{'}\\
\text{["]}                  &\to \text{"}\\
\text{[+-]}                 &\to \text{+} \mid \text{-}\\
\text{[ascii]}              &\to % TODO
\end{align}
```
