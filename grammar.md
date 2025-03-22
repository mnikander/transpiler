## Expressions and Functions

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

## Sequentially-evaluated expressions
>TODO: add these productions to the grammar above
```math
\begin{align}
\text{[do]}                 &\to
    \begin{cases}
    ( \textit{do } \text{[expression]}^+ )\\
    ( \textit{do } \text{[list]})
    \end{cases}\\
\text{[inverse\_compose]}   &\to
    \begin{cases}
    ( \text{|> } \text{[expression]}^+ )\\
    ( \text{|> } \text{[list]})
    \end{cases}\\
\text{[monadic\_bind]}      &\to
    \begin{cases}( \text{>>= } \text{[expression]}^+ )\\
    ( \text{>>= } \text{[list]})
    \end{cases}\\
\end{align}
```

## Variables and Modules
>TODO: add these productions to the grammar above

>TODO: is the order of the arguments consistent, concerning identifiers, types, and expressions?
```math
\begin{align}
% do I want `(declare identifier type)` or `(declare type identifier)` ?
\text{[declare]}           &\to ( \textit{declare } \text{[identifier]} \text{[type]} )\\
\text{[define]}            &\to ( \textit{define } \text{[identifier]} \text{[expression]} )\\
\text{[overload]}          &\to ( \textit{overload } \text{[identifier]}\text{[type]}\text{[expression]} )\\
\text{[annotate]}          &\to ( \text{: } \text{[type]} \text{[expression]} )\\
\text{[module]}            &\to \\
\text{[import]}            &\to \\
\text{[export]}            &\to \\
\end{align}
```

>TODO: do I want overloading, or type-classes?
It would be good if the inbuilt functions could be 'overloaded' for custom types as well.

> TODO: check how `module`/`import`/`export` work in Scheme.
With `module` I want to create something similar to namespaces in C++ or modules in Python.
`import` could possibly be similar to a let-binding in Scheme.
`export` denotes which functions, types, and interfaces are publically visible, i.e. importable, from a module.
This implies that a module may actually be a list of identifiers, some of which are marked with the export keyword.

## Types
>TODO: Are types expressions, i.e. first-class citizens, which can be passed into and returned from functions, assigned to identifiers, stored in datastructures etc?
Or should I keep values and types as two separate worlds?
Add types to the grammar above, accordingly.

>TODO: Interfaces, type classes, generics

```math
\begin{align}
\text{[type]}               &\to
    \begin{cases}
    \text{[variant\_type]}\\
    \text{[tuple\_type]}\\
    \text{[list\_type]}\\
    \text{[array\_type]}\\
    \text{[set\_type]}\\
    \text{[dictionary\_type]}\\
    \text{[primitive\_type]}\\
    ... %TODO
    \end{cases}\\
\text{[variant\_type]}      &\to
    \begin{cases}
    ( \textit{Variant } \text{[type]}^+ )\\
    ( \textit{Variant } \text{[list]} )
    \end{cases}\\
\text{[tuple\_type]}        &\to
    \begin{cases}
    ( \textit{Tuple } \text{[type]}^+ )\\
    ( \textit{Tuple } \text{[type]} \text{[integer\_literal]} )\\
    ( \textit{Tuple } \text{[list]} )
    \end{cases}\\
\text{[list\_type]}         &\to ( \textit{List } \text{[type]} )\\
\text{[array\_type]}        &\to ( \textit{Array } \text{[type]} )\\
\text{[set\_type]}          &\to ( \textit{Set } \text{[type]} )\\
\text{[dictionary\_type]}   &\to ( \textit{Dictionary } \text{[type]} \text{[type]} )\\
\text{[primitive\_type]}    &\to \text{Nil} \mid \text{Boolean} \mid \text{Byte} \mid \text{Character} \mid \text{I8} \mid \text{I16} \mid \text{I32} \mid \text{I64} \mid \text{F32} \mid \text{F64}\\
\end{align}
```

> TODO: Algebraic Data Types (ADTs) are variants of tuples of pointers which allow recursive tree-like structures.
How do you define the type? How do you initialize them with data?
-- I could make use of the Lisp-style list.
It stores pointers to two child elements and if the data is set to a variant of tuples then it can encode ADTs.

## Type Operations
```math
\begin{align}
\text{[typeof]}             &\to ( \textit{typeof } \text{[type\_indentifier]} )\\
\text{[sizeof]}             &\to ( \textit{sizeof } \text{[type\_indentifier]} )\\
\text{[type\_indentifier]}  &\to ( \text{[type]} \mid \text{[identifier]} )\\
\end{align}
```
> TODO: is `sizeof` actually needed when programming, seeing as I won't be dealing with raw pointers?
If some sort of external function call or inter-operability with C is desired, this might be quite helpful.

## List Operations

```math
\begin{align}
\text{[list]}               &\to \textit{ [ } \text{[expression]}^* \textit{ ] }\\
\text{[construct]}          &\to ( \textit{construct } \text{[expression]}\text{[expression]} )\\
\text{[head]}               &\to ( \textit{head } \text{[list]} )\\
\text{[tail]}               &\to ( \textit{tail } \text{[list]} )\\
\end{align}
```

## Literals and Identifiers

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
\text{[identifier]}         &\to \text{[letter\_]}\text{[alphanumeric\_]}^*\\
\text{[identifierlist]}     &\to \textit{ [ } \text{[identifier]}^* \textit{ ] }\\
\text{[arguments]}          &\to \text{[identifier]} \mid \text{[identifierlist]}\\
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
\text{[ascii]}              &\to ... todo\\
\end{align}
```
