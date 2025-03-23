# Lisp-Like Grammar

```math
\begin{align}
 % \mid "\t" \mid "\r" \mid "\f" \mid "\b" )
\text{expression}   &\to (\text{atom} \mid \text{call} \mid \text{list}) \space \text{comment}^? \\
\text{atom}         &\to \text{identifier} \mid \text{number\_literal} \mid \text{string\_literal} \\
\text{call}         &\to \texttt{`(`} \space \text{expression}^+ \space \texttt{`)`} \\
\text{list}         &\to \texttt{`[`} \space \text{expression}^* \space \texttt{`]`} \\
\text{comment}     &\to \text{whitespace}^* \space ( \space \texttt{`\#`} \space (\text{char} \mid \texttt{`'`} \mid \texttt{`"`})^* \space \text{linebreak} \space \text{whitespace}^*)^? \\
\end{align}
```

## Identifiers and Literals
```math
\begin{align}
\text{identifier}           &\to (\text{letter} \space (\text{letter} \mid \text{digit})^*) \mid \text{special}^+ \\
\text{number\_literal}      &\to \text{sign}^? \space \text{digit}^+ \space (\texttt{`.`} \space \text{digit}^+)^? \\
\text{string\_literal}      &\to \texttt{`'`} \space (\text{char} \mid \texttt{`"`})^* \space \texttt{`'`} \mid
                                    \texttt{`"`} \space (\text{char} \mid \texttt{`'`})^* \space \texttt{`"`} \\
\text{char}                 &\to \text{letter} \mid \text{digit} \mid \text{parenthesis} \mid \text{special} \mid \text{space} \\
\text{letter}               &\to \texttt{`a`} \mid ... \mid \texttt{`z`} \mid \texttt{`A`} \mid ... \mid \texttt{`Z`} \\
\text{digit}                &\to \texttt{`0`} \mid ... \mid \texttt{`9`} \\
\text{parenthesis}          &\to \texttt{`(`} \mid \texttt{`)`} \mid \texttt{`[`} \mid \texttt{`]`} \mid \texttt{`\{`} \mid \texttt{`\}`} \\
\text{special}              &\to
\begin{cases}
                            \texttt{`.`} \mid \texttt{`,`} \mid \texttt{`:`} \mid \texttt{`;`} \mid \\
                            \texttt{`!`} \mid \texttt{`?`} \mid \texttt{`<`} \mid \texttt{`>`} \mid \\
                            \texttt{`@`} \mid \texttt{`\#`} \mid \texttt{`\$`} \mid \texttt{`}\backslash\texttt{`} \mid \\
                            \texttt{`+`} \mid \texttt{`-`} \mid \texttt{`*`} \mid \texttt{`/`} \mid \\
                            \texttt{`\%`} \mid \texttt{`=`} \mid \texttt{`|`} \mid \texttt{`\&`} \mid \\
                            \texttt{`\_`} \mid \texttt{`}\wedge\texttt{`} \mid \texttt{`}\sim\texttt{`}
                            %\texttt{```} \mid \texttt{`'`} \mid \texttt{`"`} \mid \\\texttt{` `} \mid
\end{cases}\\
\text{sign}                 &\to \texttt{`+`} \mid \texttt{`-`} \\
\text{whitespace}           &\to \text{space} \mid \text{linebreak} \\
\text{space}                &\to \texttt{` `} \mid \texttt{`}\backslash\texttt{t`} \\
\text{linebreak}            &\to \texttt{`}\backslash\texttt{n`} \mid \texttt{`}\backslash\texttt{n}\backslash\texttt{r`} \\
\end{align}
```

## Sources
- Lisp BNF: https://iamwilhelm.github.io/bnf-examples/lisp
