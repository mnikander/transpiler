grammar LispLike

entry Model:
    data=(ID | BOOL | INT | FLOAT | CHAR | STRING | List | Application | Annotation);

Application:
    ('(' func=Unary data+=(ID | BOOL | INT | FLOAT | CHAR | STRING | List | Application | Annotation) ')') |
    ('(' func=Binary data+=(ID | BOOL | INT | FLOAT | CHAR | STRING | List | Application | Annotation) data+=(ID | BOOL | INT | FLOAT | Application) ')') |
    ('(' func=Ternary data+=(ID | BOOL | INT | FLOAT | CHAR | STRING | List | Application | Annotation) data+=(ID | BOOL | INT | FLOAT | Application) data+=(ID | BOOL | INT | FLOAT | Application) ')') |
    ('(' func=Nary data+=(ID | BOOL | INT | FLOAT | CHAR | STRING | List | Application | Annotation)* ')') |
    ('(' func=Declare symbol=ID data+=(Type) ')') |
    ('(' func=Define symbol=ID data+=(ID | BOOL | INT | FLOAT | CHAR | STRING | List | Application | Annotation) ')');

Unary:
    data=('display' | 'sqrt' | '!');

Binary:
    data=('+' | '-' | '*' | '/' | '%' | '^' |
          '>' | '<' | '>=' | '<=' | '==' | '!=' |
          '&' | '|' );

Ternary:
    data=('if');

Nary:
    data=('conditional' | 'do' | '|>' | '>>=');

Declare:
    data=('declare');

Define:
    data=('define');

Annotation:
    '(' data+=':' data+=Type data+=(ID | BOOL | INT | FLOAT | CHAR | STRING | List | Application) ')';

Type:
    data=('i8' | 'i16' | 'i32' | 'i64' | 'f32' | 'f64' | 'bool' | 'byte' | 'char' );

List:
    '[' data+= (ID | BOOL | INT | FLOAT | CHAR | STRING | List | Application | Annotation)* ']';

hidden terminal WS: /\s+/;
terminal ID: /[_a-zA-Z][\w_]*/;
terminal BOOL returns boolean: /true|false/;
terminal FLOAT returns number: /[-+]?((\d+\.\d*)|(\d*\.\d+))/;
terminal INT returns number: /[-+]?[0-9]+/;
terminal CHAR: /'[_a-zA-Z0-9]'/;
terminal STRING: /"(\\.|[^"\\])*"/;

hidden terminal SL_COMMENT: /\#[^\n\r]*/;
