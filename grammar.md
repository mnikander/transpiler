Basic productions for various characters:

$$
\begin{align}
[digit]             &\to \texttt{0}\mid ... \mid \texttt{9} \\
[letter\_]          &\to \texttt{\_} \mid \texttt{a} \mid ... \mid \texttt{z} \mid \texttt{A} \mid ...\mid \texttt{Z}\\
[alphanumeric\_]    &\to [digit] \mid [letter\_]\\
[.]                 &\to \texttt{.} \\
[']                 &\to \texttt{'} \\
["]                 &\to \texttt{"} \\
[\space ( \space]   &\to \texttt{(} \\
[\space ) \space]   &\to \texttt{)} \\
[+-]                &\to \texttt{+} \mid \texttt{-} \\
[ascii]             &\to ...\space todo\\
\end{align}
$$

Productions for literals and identifiers:

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
[identifierlist]    &\to \texttt{[}\space [identifier]^* \space\texttt{]}\\
[arguments]         &\to [identifier] \mid [identifierlist] \\
\end{align}
$$

Productions which define the heart of the language:

$$
\begin{align}
[abstraction]       &\to \texttt{(->} \space [arguments] \space [expression] \space \texttt{)} \\
% could you use a static function which returns a symbol, here and in the body of the lambda?
[application]       &\to \texttt{(}\space \{[basicfunction] \mid [expression]\}^+ \space\texttt{)} \\
[expression]        &\to 
\begin{cases}
                            [literal] \\
                            [identifier] \\ 
                            [abstraction] \\
                            [application] \\
\end{cases} \\
[basicfunction]     &\to
    \texttt{+} \mid \texttt{-} \mid \texttt{*} \mid
    \texttt{/} \mid \texttt{\%} \mid \texttt{\textasciicircum} \mid
    \texttt{\&} \mid \texttt{|} \mid \texttt{!} \mid
    \texttt{<} \mid \texttt{>} \mid \texttt{<=} \mid
    \texttt{>=} \mid \texttt{==} \mid \texttt{!=} \\
[list ]             &\to \texttt{[} \space [expression]^* \space \texttt{]} \\
\end{align}
$$

