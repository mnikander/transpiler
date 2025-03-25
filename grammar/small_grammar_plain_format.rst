=================
Lisp-Like Grammar
=================

This grammar is written in Augmented Backus-Naur Form (ABNF).

.. code-block:: abnf

   expression      =  (atom / call / list) [comment]
   atom            =  identifier / number_literal / string_literal / type_literal
   call            =  "(" expression *expression ")"
   list            =  "[" *expression "]"

-----------------------------------
Comments, Identifiers, and Literals
-----------------------------------

.. code-block:: abnf

   comment         =  *linebreak ["#" *(character / q / qq) linebreak *linebreak]
   identifier      =  [special] / (letter *(letter / digit))
   number-literal  =  [sign] digit *digit ["." digit *digit]
   string-literal  =  (q *(character / qq) q) / (qq *(character / q) qq)
   type-literal    =  "Type" / "Empty" / "Boolean" / "Byte" / "Ascii" /
                      "I8" / "I16" / "I32" / "I64" / "F32" / "F64"

---------------------
Characters and Digits
---------------------
.. code-block:: abnf

   character       =  letter / digit / parenthesis / special / space
   letter          =  "a" / ... / "z" / "A" / ... / "Z"
   digit           =  "0" / ... / "9"
   sign            =  "+" / "-"
   parenthesis     =  "(" / ")" / "[" / "]" / "{" / "}"
   special         =  "." / "," / ":" / ";" / "!" / "?" / "<" / ">" / "@" / "#" / "$" / "\" /
                      "+" / "-" / "*" / "/" / "%" / "=" / "/" / "&" / "_" / "^" / "~"
   space           =   " " / "\t"
   linebreak       =  "\n" / "\n\r"
   q               =  `'`
   qq              =  `"`

-------
Sources
-------
- Lisp BNF: https://iamwilhelm.github.io/bnf-examples/lisp
- ABNF: https://www.ietf.org/rfc/rfc5234.txt
