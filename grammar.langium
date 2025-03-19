grammar LispLike

entry Model:
    (expressions+=(BOOL | INT | FLOAT | Application))*;

Application:
    ('(' operator=Unary arguments+=(BOOL | INT | FLOAT | Application) ')') |
    ('(' operator=Binary arguments+=(BOOL | INT | FLOAT | Application) arguments+=(BOOL | INT | FLOAT | Application)')') |
    ('(' operator=Ternary arguments+=(BOOL | INT | FLOAT | Application) arguments+=(BOOL | INT | FLOAT | Application) arguments+=(BOOL | INT | FLOAT | Application)')');

Unary:
    value='sqrt' | '!';

Binary:
    value=('+' | '-' | '*' | '/' | '%' | '^' | 
           '>' | '<' | '>=' | '<=' | '==' | '!=' |
           '&' | '|' );

Ternary:
    value='if';

hidden terminal WS: /\s+/;
terminal ID: /[_a-zA-Z][\w_]*/;
terminal BOOL returns boolean: /true|false/;
terminal FLOAT returns number: /[-+]?((\d+\.\d*)|(\d*\.\d+))/;
terminal INT returns number: /[-+]?[0-9]+/;
terminal STRING: /"(\\.|[^"\\])*"|'(\\.|[^'\\])*'/;

hidden terminal SL_COMMENT: /\#[^\n\r]*/;

