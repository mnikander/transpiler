# Lisp-Like Grammar

```math
\begin{align}
\text{ expression}   &\to (\text{ atom} \mid \text{call} \mid \text{list }) \text{ comment}^? \\
\text{ atom}         &\to \text{ identifier} \mid \text{number\_literal} \mid \text{string\_literal} \mid \text{type\_literal} \\
\text{ call}         &\to \texttt{`(`} \text{ expression}^+ \texttt{`)`} \\
\text{ list}         &\to \texttt{`[`} \text{ expression}^* \texttt{`]`} \\
\end{align}
```

## Comments, Identifiers, and Literals
```math
\begin{align}
\text{ comment}             &\to \text{ linebreak}^* ( \texttt{`\#`} (\text{ char} \mid \texttt{`'`} \mid \texttt{`"`})^* \text{ linebreak} \text{ linebreak}^*)^? \\
\text{ identifier}          &\to (\text{ letter } (\text{ letter} \mid \text{digit })^*) \mid \text{special}^+ \\
\text{ number\_literal}     &\to \text{ sign}^? \text{ digit}^+ (\texttt{`.`} \text{ digit}^+)^? \\
\text{ string\_literal}     &\to \texttt{`'`} (\text{ char} \mid \texttt{`"`})^* \texttt{`'`} \mid
                                    \texttt{`"`} (\text{ char} \mid \texttt{`'`})^* \texttt{`"`} \\
\text{ type\_literal}       &\to \texttt{`Type`} \mid \texttt{`Empty`} \mid \texttt{`Boolean`} \mid \texttt{`Byte`} \mid \texttt{`Ascii`} \mid \texttt{`I8`} \mid \texttt{`I16`} \mid \texttt{`I32`} \mid \texttt{`I64`} \mid \texttt{`F32`} \mid \texttt{`F64`} \\
\end{align}
```

## Characters and Digits
```math
\begin{align}
\text{ char}                &\to \text{ letter} \mid \text{digit} \mid \text{parenthesis} \mid \text{special} \mid \text{space} \\
\text{ letter}              &\to \texttt{`a`} \mid ... \mid \texttt{`z`} \mid \texttt{`A`} \mid ... \mid \texttt{`Z`} \\
\text{ digit}               &\to \texttt{`0`} \mid ... \mid \texttt{`9`} \\
\text{ parenthesis}         &\to \texttt{`(`} \mid \texttt{`)`} \mid \texttt{`[`} \mid \texttt{`]`} \mid \texttt{`\{`} \mid \texttt{`\}`} \\
\text{ special}             &\to
\begin{cases}
                            \texttt{`.`} \mid \texttt{`,`} \mid \texttt{`:`} \mid \texttt{`;`} \mid \\
                            \texttt{`!`} \mid \texttt{`?`} \mid \texttt{`<`} \mid \texttt{`>`} \mid \\
                            \texttt{`@`} \mid \texttt{`\#`} \mid \texttt{`\$`} \mid \texttt{`}\backslash\texttt{`} \mid \\
                            \texttt{`+`} \mid \texttt{`-`} \mid \texttt{`*`} \mid \texttt{`/`} \mid \\
                            \texttt{`\%`} \mid \texttt{`=`} \mid \texttt{`|`} \mid \texttt{`\&`} \mid \\
                            \texttt{`\_`} \mid \texttt{`}\wedge\texttt{`} \mid \texttt{`}\sim\texttt{`}
\end{cases}\\
\text{ sign}                &\to \texttt{`+`} \mid \texttt{`-`} \\
\text{ space}               &\to \texttt{` `} \mid \texttt{`}\backslash\texttt{t`} \\
\text{ linebreak}           &\to \texttt{`}\backslash\texttt{n`} \mid \texttt{`}\backslash\texttt{n}\backslash\texttt{r`} \\
\end{align}
```

## Sources
- Lisp BNF: https://iamwilhelm.github.io/bnf-examples/lisp
