grammar LispLike

entry Model:
    data=(ID | BOOL | INT | FLOAT | Application | Annotation);

Application:
    ('(' func=Unary data+=(ID | BOOL | INT | FLOAT | Application | Annotation) ')') |
    ('(' func=Binary data+=(ID | BOOL | INT | FLOAT | Application | Annotation) data+=(ID | BOOL | INT | FLOAT | Application) ')') |
    ('(' func=Ternary data+=(ID | BOOL | INT | FLOAT | Application | Annotation) data+=(ID | BOOL | INT | FLOAT | Application) data+=(ID | BOOL | INT | FLOAT | Application) ')') |
    ('(' func=Nary data+=(ID | BOOL | INT | FLOAT | Application | Annotation)* ')') |
    ('(' func=Declare symbol=ID data=(Type) ')') |
    ('(' func=Define symbol=ID data=(ID | BOOL | INT | FLOAT | Application | Annotation) ')');

Unary:
    name=('display' | 'sqrt' | '!');

Binary:
    name=('+' | '-' | '*' | '/' | '%' | '^' |
          '>' | '<' | '>=' | '<=' | '==' | '!=' |
          '&' | '|' );

Ternary:
    name=('if');

Nary:
    name=('conditional' | 'do' | '|>' | '>>=');

Declare:
    name=('declare');

Define:
    name=('define');

Annotation:
    '(' name=':' data+=Type data+=(ID | BOOL | INT | FLOAT | Application) ')';

Type:
    name=('i8' | 'i16' | 'i32' | 'i64' | 'f32' | 'f64' | 'bool' | 'byte' | 'char' );

hidden terminal WS: /\s+/;
terminal ID: /[_a-zA-Z][\w_]*/;
terminal BOOL returns boolean: /true|false/;
terminal FLOAT returns number: /[-+]?((\d+\.\d*)|(\d*\.\d+))/;
terminal INT returns number: /[-+]?[0-9]+/;
terminal STRING: /"(\\.|[^"\\])*"|'(\\.|[^'\\])*'/;

hidden terminal SL_COMMENT: /\#[^\n\r]*/;

