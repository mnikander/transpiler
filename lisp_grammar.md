# Lisp Grammar

```math
\begin{align}
\text{expression}   &\to \text{atom} \mid \texttt{'('} \space \text{expression} \space \texttt{'.'} \space \text{expression} \space \texttt{')'} \mid \text{list} \\
\text{list}         &\to \texttt{'('} \space \text{expression}^+ \space \texttt{')'} \\
\text{atom}         &\to \text{letter} \space \text{character} \\
\text{character}    &\to \text{space} \mid \text{letter} \space \text{character} \mid \text{digit} \space \text{character} \\
\text{letter}       &\to \texttt{'a'} \mid ... \mid \texttt{'z'} \mid \texttt{'A'} \mid ... \mid \texttt{'Z'} \\
\text{digit}        &\to \texttt{'0'} \mid ... \mid \texttt{'9'} \\
\text{space}        &\to \texttt{'\space'} \\
\end{align}
```

## Sources
- Lisp BNF: https://iamwilhelm.github.io/bnf-examples/lisp
