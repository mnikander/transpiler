## Basic characters and digits

```math
\begin{align}
[\text{digit}]             &\to \text{0}\mid ... \mid \text{9}\\
[\text{letter\_}]          &\to \text{\_} \mid \text{a} \mid ... \mid \text{z} \mid \text{A} \mid ...\mid \text{Z}\\
[\text{alphanumeric\_}]    &\to [\text{digit}] \mid [\text{letter\_}]\\
[\text{.}]                 &\to \text{.}\\
[\text{'}]                 &\to \text{'}\\
[\text{"}]                 &\to \text{"}\\
[\text{+-}]                &\to \text{+} \mid \text{-}\\
[\text{ascii}]             &\to ... todo\\
\end{align}
```

## Literals and Identifiers

```math
\begin{align}
[\text{integer\_literal}]  &\to [\text{+-}]^? [\text{digit}]^+\\
[\text{float\_literal}]    &\to [\text{+-}]^? [\text{digit}]^*[\text{.}][\text{digit}]^+\\
[\text{character\_literal}]&\to [\text{'}] [\text{ascii}] [\text{'}]\\
[\text{string\_literal}]   &\to [\text{"}] [\text{ascii}]^* [\text{"}]\\
[\text{literal}]           &\to
\begin{cases}
                            [\text{integer\_literal}]\\
                            [\text{float\_literal}]\\
                            [\text{character\_literal}]\\
                            [\text{string\_literal}]
\end{cases}\\
[\text{identifier}]        &\to [\text{letter\_}][\text{alphanumeric\_}]^*\\
[\text{identifierlist}]    &\to \text{[} [\text{identifier}]^* \text{]}\\
[\text{arguments}]         &\to [\text{identifier}] \mid [\text{identifierlist}]\\
\end{align}
```

## Expressions and Functions

```math
\begin{align}
[\text{nonliteral}]        &\to
\begin{cases}
                            [\text{identifier}]\\
                            [\text{function}]\\
                            [\text{application}]
% note: access to a list of functions is covered by the 'application' case
\end{cases}\\
[\text{expression}]        &\to
\begin{cases}
                            [\text{literal}]\\
                            [\text{list}]\\
                            [\text{nonliteral}]
\end{cases}\\
[\text{lambda}]            &\to \text{(-> } [\text{arguments}] [\text{expression}] \text{)}\\
[\text{application}]       &\to \text{(} [\text{nonliteral}] [\text{expression}]^* \text{)}\\
[\text{function}]          &\to
\begin{cases}
                        [\text{lambda}]\\
                        [\text{basicfunction}]\\
                        [\text{if}]\\
                        [\text{conditional}]\\
                        [\text{until}]\\
                        [\text{construct}]\\
                        [\text{head}]\\
                        [\text{tail}]
\end{cases}\\
[\text{basicfunction}]     &\to
    \text{+} \mid \text{-} \mid \text{*} \mid
    \text{/} \mid \text{\%} \mid \wedge \mid
    \text{\&} \mid \text{|} \mid \text{!} \mid
    \text{<} \mid \text{>} \mid \text{<=} \mid
    \text{>=} \mid \text{==} \mid \text{!=}\\
[\text{if}]                &\to \text{(if} [\text{expression}] [\text{expression}] [\text{expression}]\text{)}\\
[\text{conditional}]       &\to \text{(conditional} \{ \text{[} [\text{expression}] [\text{expression}] \text{]}\}^+ \text{)}\\
[\text{until}]             &\to \text{(until} [\text{expression}] [\text{expression}] [\text{expression}]\text{)}\\
\end{align}
```

## Lists

```math
\begin{align}
[\text{list}]              &\to \text{[} \{\text{expression}\}^* \text{]}\\
[\text{construct}]         &\to \text{(construct} [\text{expression}][\text{expression}] \text{)}\\
[\text{head}]              &\to \text{(head} [\text{list}] \text{)}\\
[\text{tail}]              &\to \text{(tail} [\text{list}] \text{)}\\
\end{align}
```
