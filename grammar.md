## Basic characters and digits

$$
\begin{align}
[digit]             &\to \texttt{0}\mid ... \mid \texttt{9} \\
[letter\_]          &\to \texttt{\_} \mid \texttt{a} \mid ... \mid \texttt{z} \mid \texttt{A} \mid ...\mid \texttt{Z}\\
[alphanumeric\_]    &\to [digit] \mid [letter\_]\\
[.]                 &\to \texttt{.} \\
[']                 &\to \texttt{'} \\
["]                 &\to \texttt{"} \\
[+-]                &\to \texttt{+} \mid \texttt{-} \\
[ascii]             &\to ... todo\\
\end{align}
$$

## Literals and Identifiers

$$
\begin{align}
[integer\_literal]  &\to [+-]^? [digit]^+ \\
[float\_literal]    &\to [+-]^? [digit]^*[.][digit]^+\\
[character\_literal]&\to ['] [ascii] ['] \\
[string\_literal]   &\to ["] [ascii]^* ["] \\
[literal]           &\to
\begin{cases}
                            [integer\_literal] \\
                            [float\_literal] \\
                            [character\_literal] \\
                            [string\_literal]
\end{cases} \\
[identifier]        &\to [letter\_][alphanumeric\_]^* \\
[identifierlist]    &\to \texttt{[} [identifier]^* \texttt{]}\\
[arguments]         &\to [identifier] \mid [identifierlist] \\
\end{align}
$$

## Expressions and Functions

$$
\begin{align}
[nonliteral]        &\to
\begin{cases}
                            [identifier] \\ 
                            [function] \\
                            [application] \\ % note: access to a list of functions is covered by this case
\end{cases} \\
[expression]        &\to
\begin{cases}
                            [literal] \\
                            [list] \\ % is this correct?
                            [nonliteral] \\
\end{cases} \\
[lambda]            &\to \texttt{(->}  [arguments] [expression]  \texttt{)} \\
[application]       &\to \texttt{(} [nonliteral] [expression]^* \texttt{)} \\
[function]          &\to
\begin{cases}
                        [lambda] \\
                        [basicfunction] \\
                        [if] \\
                        [conditional] \\
                        [construct] \\
                        [head] \\
                        [tail]
\end{cases} \\
[basicfunction]     &\to
    \texttt{+} \mid \texttt{-} \mid \texttt{*} \mid
    \texttt{/} \mid \texttt{\%} \mid \texttt{\textasciicircum} \mid
    \texttt{\&} \mid \texttt{|} \mid \texttt{!} \mid
    \texttt{<} \mid \texttt{>} \mid \texttt{<=} \mid
    \texttt{>=} \mid \texttt{==} \mid \texttt{!=} \\
[if]                &\to \texttt{(if} [expression] [expression] [expression]\texttt{)} \\
[conditional]       &\to \texttt{(conditional} \{ \texttt{[} [expression] [expression] \texttt{]}\}^+ \texttt{)} \\
\end{align}
$$

## Lists

$$
\begin{align}
[list]              &\to \texttt{[} [expression]^* \texttt{]} \\
[construct]         &\to \texttt{(construct} [expression][expression]  \texttt{)} \\
[head]              &\to \texttt{(head} [list] \texttt{)} \\
[tail]              &\to \texttt{(tail} [list] \texttt{)} \\

\end{align}
$$
