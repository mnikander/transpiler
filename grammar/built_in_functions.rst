--------
Equality
--------

=====   ==========
   op   `==` `!=`
  sig   `(== a b)`
   in   Any, Any
  out   Boolean
about   equality, inequality
=====   ==========

--------------------------------------------
Arithmetic and Comparison Functions
--------------------------------------------

=====   ==========
   op   `+` `-` `*` `/` `%` `^`
  sig   `(+ a b)`
   in   Number, Number
  out   Number
about   arithmetic
=====   ==========

=====   ==========
   op   `<` `>` `<=` `>=`
  sig   `(< a b)`
   in   Number, Number
  out   Boolean
about   comparison
=====   ==========


-----------------
Logical Functions
-----------------

=====   ==========
   op   `&` `|`
  sig   `(& a b)`
   in   Boolean, Boolean
  out   Boolean
about   and, or
=====   ==========

=====   ==========
   op   `!`
  sig   `(! a b)`
   in   Boolean
  out   Boolean
about   not
=====   ==========

---------
Branching
---------

=====   ==========
   op   `if`
  sig   `(if condition thenExpr elseExpr)`
   in   Boolean, T0, T1
  out   (Union T0 T1)
about   ternary if-expression
=====   ==========

=====   ==========
   op   `conditional`
  sig   `(conditional [predicate_0 expression_0] ... [predicate_n expression_n])`
   in   [Boolean, T0]

        ...

        [Boolean, Tn]
  out   (Union T0 ... Tn)
about   lisp-style conditional expression, can be used to immitate pattern-matching and switch-case statements
=====   ==========

---------
Iteration
---------

=====   ==========
   op   `until`
  sig   `(until state predicate project)`
   in   `(Tuple T0 ... Tn)`

        `(Tuple T0 ... Tn) => Boolean`

        `(Tuple T0 ... Tn) => (Tuple T0 ... Tn)`
  out   `(Tuple T0 ... Tn)`
about   until the state tuple satisfies the predicate, iteratively update the tuple by applying a projection to it
=====   ==========

---------------------
Sequential Operations
---------------------

=====   ==========
   op   `do`
  sig   `(until expression_0 ... expression_n)`
   in   `T0`
   
        `...`
        
        `Tn`
  out   `Tn`
about   evaluate a series of expressions in order
=====   ==========

=====   ==========
   op   `pipeline`
  sig   `(pipeline value function_0 ... function_n)`
   in   `T0`
   
        `T0 => T1`
        
        `...`

        `Tm => Tn`
  out   `Tn`
about   inverse function composition, chain a value and a series of unary functions together
=====   ==========

=====   ==========
   op   `bind`
  sig   `(bind monadic_value function_0 ... function_n)`
   in   `(Monad T0)`
   
        `T0 => T1`
        
        `...`

        `Tm => Tn`
  out   `(Monad Tn)`
about   monadic bind, executes operations in order
=====   ==========

