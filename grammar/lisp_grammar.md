# Lisp Grammar

```math
\begin{align}
\text{ expression}   &\to \text{ atom} \mid \texttt{'('} \text{ expression } \texttt{'.'} \text{ expression } \texttt{')'} \mid \text{list} \\
\text{ list}         &\to \texttt{'('} \text{ expression}^+ \texttt{')'} \\
\text{ atom}         &\to \text{ letter } \text{ character } \\
\text{ character}    &\to \text{ space} \mid \text{letter } \text{ character} \mid \text{digit } \text{ character } \\
\text{ letter}       &\to \texttt{'a'} \mid ... \mid \texttt{'z'} \mid \texttt{'A'} \mid ... \mid \texttt{'Z'} \\
\text{ digit}        &\to \texttt{'0'} \mid ... \mid \texttt{'9'} \\
\text{ space}        &\to \texttt{' '} \\
\end{align}
```

## Sources
- Lisp BNF: https://iamwilhelm.github.io/bnf-examples/lisp
