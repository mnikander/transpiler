## Expressions and Functions

```math
\begin{align}
\text{[entry]}             &\to \text{[expression]}\\
\text{[nonliteral]}        &\to
\begin{cases}
                            \text{[identifier]}\\
                            \text{[function]}\\
                            \text{[application]}
% note: access to a list of functions is covered by the 'application' case
\end{cases}\\
\text{[expression]}        &\to
\begin{cases}
                            \text{[literal]}\\
                            \text{[list]}\\
                            \text{[nonliteral]}
\end{cases}\\
\text{[lambda]}            &\to ( \text{-> } \text{[arguments]} \text{[expression]} )\\
\text{[application]}       &\to ( \text{[nonliteral]} \text{[expression]}^* )\\
\text{[function]}          &\to
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
\text{[basicfunction]}     &\to
    \text{+} \mid \text{-} \mid \text{*} \mid
    \text{/} \mid \text{\%} \mid \wedge \mid
    \text{\&} \mid \text{|} \mid \text{!} \mid
    \text{<} \mid \text{>} \mid \text{<=} \mid
    \text{>=} \mid \text{==} \mid \text{!=}\\
\text{[if]}                &\to ( \textit{if } \text{[expression]} \text{[expression]} \text{[expression]})\\
\text{[conditional]}       &\to ( \textit{conditional } \{ \textit{ [ } \text{[expression]} \text{[expression]} \textit{ ] }\}^+ )\\
\text{[until]}             &\to ( \textit{until } \text{[expression]} \text{[expression]} \text{[expression]})\\
\end{align}
```

## Sequentially-evaluated expressions
>TODO: add these productions to the grammar above
```math
\begin{align}
\text{[do]}                &\to
    \begin{cases}
    ( \textit{do } \text{[expression]}^+ )\\
    ( \textit{do } \text{[list]})
    \end{cases}\\
\text{[inversecompose]}    &\to
    \begin{cases}
    ( \text{|> } \text{[expression]}^+ )\\
    ( \text{|> } \text{[list]})
    \end{cases}\\
\text{[monadicbind]}       &\to
    \begin{cases}( \text{>>= } \text{[expression]}^+ )\\
    ( \text{>>= } \text{[list]})
    \end{cases}\\
\end{align}
```

## Variables and Modules
>TODO: add these productions to the grammar above
```math
\begin{align}
% do I want `(declare identifier type)` or `(declare type identifier)` ?
\text{[declare]}           &\to ( \textit{declare } \text{[identifier]} \text{[type]} )\\
\text{[define]}            &\to ( \textit{define } \text{[identifier]} \text{[expression]} )\\
\text{[overload]}          &\to ( \textit{overload } \text{[identifier]}\text{[type]}\text{[expression]} )\\
\text{[module]}            &\to \\
\text{[import]}            &\to \\
\text{[export]}            &\to \\
\end{align}
```
>TODO: do I want overloading, or type-classes? It would be good if the inbuilt functions could be 'overloaded' for custom types as well.

> TODO: check how these work in Scheme. One possibility is for `import` to be similar to a let-binding in Scheme. With `module` I want to create something similar to namespaces in C++. `export` denotes which functions, types, and interfaces are publically visible, i.e. importable, from a module. This implies that a module may actually be a list of identifiers, some of which are marked with the export keyword.

## Types
> TODO: create productions for arrays, dictionaries, and non-primitive types such as ADTs
```math
\begin{align}
\text{[basictype]}        &\to \text{bool} \mid \text{byte} \mid \text{char} \mid \text{i8} \mid \text{i16} \mid \text{i32} \mid \text{i64} \mid \text{f32} \mid \text{f64}\\
\text{[type]}             &\to \text{[basictype]} \mid ...\\ %TODO
\end{align}
```

## Lists

```math
\begin{align}
\text{[list]}              &\to \textit{ [ } \text{[expression]}^* \textit{ ] }\\
\text{[construct]}         &\to ( \textit{construct } \text{[expression]}\text{[expression]} )\\
\text{[head]}              &\to ( \textit{head } \text{[list]} )\\
\text{[tail]}              &\to ( \textit{tail } \text{[list]} )\\
\end{align}
```

## Literals and Identifiers

```math
\begin{align}
\text{[integer\_literal]}  &\to \text{[+-]}^? \text{[digit]}^+\\
\text{[float\_literal]}    &\to \text{[+-]}^? \text{[digit]}^*\text{[.]}\text{[digit]}^+\\
\text{[character\_literal]}&\to \text{[']} \text{[ascii]} \text{[']}\\
\text{[string\_literal]}   &\to \text{["]} \text{[ascii]}^* \text{["]}\\
\text{[literal]}           &\to
\begin{cases}
                            \text{[integer\_literal]}\\
                            \text{[float\_literal]}\\
                            \text{[character\_literal]}\\
                            \text{[string\_literal]}
\end{cases}\\
\text{[identifier]}        &\to \text{[letter\_]}\text{[alphanumeric\_]}^*\\
\text{[identifierlist]}    &\to \textit{ [ } \text{[identifier]}^* \textit{ ] }\\
\text{[arguments]}         &\to \text{[identifier]} \mid \text{[identifierlist]}\\
\end{align}
```

## Basic characters and digits

```math
\begin{align}
\text{[digit]}             &\to \text{0}\mid ... \mid \text{9}\\
\text{[letter\_]}          &\to \text{\_} \mid \text{a} \mid ... \mid \text{z} \mid \text{A} \mid ...\mid \text{Z}\\
\text{[alphanumeric\_]}    &\to \text{[digit]} \mid \text{[letter\_]}\\
\text{[.]}                 &\to \text{.}\\
\text{[']}                 &\to \text{'}\\
\text{["]}                 &\to \text{"}\\
\text{[+-]}                &\to \text{+} \mid \text{-}\\
\text{[ascii]}             &\to ... todo\\
\end{align}
```
