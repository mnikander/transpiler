grammar LispLike

entry Model:
    data=(ID | Type | BOOL | INT | FLOAT | CHAR | STRING | List | Abstraction | Application | Annotation);

Abstraction:
    ('(' func=Lambda data+=(ID | List) data+=(ID | Type | BOOL | INT | FLOAT | CHAR | STRING | List | Abstraction | Application | Annotation)')');

Application:
    ('(' func=Unary data+=(ID | Type | BOOL | INT | FLOAT | CHAR | STRING | List | Abstraction | Application | Annotation) ')') |
    ('(' func=Binary data+=(ID | Type | BOOL | INT | FLOAT | CHAR | STRING | List | Abstraction | Application | Annotation) data+=(ID | BOOL | INT | FLOAT | Application) ')') |
    ('(' func=Ternary data+=(ID | Type | BOOL | INT | FLOAT | CHAR | STRING | List | Abstraction | Application | Annotation) data+=(ID | BOOL | INT | FLOAT | Application) data+=(ID | BOOL | INT | FLOAT | Application) ')') |
    ('(' func=Nary data+=(ID | Type | BOOL | INT | FLOAT | CHAR | STRING | List | Abstraction | Application | Annotation)* ')') |
    ('(' func=Define symbol=ID data+=(ID | Type | BOOL | INT | FLOAT | CHAR | STRING | List | Abstraction | Application | Annotation) ')') |
    ('(' func=Annotation data+=(Type | Abstraction) data+=(ID | Type | BOOL | INT | FLOAT | CHAR | STRING | List | Abstraction | Application) ')') |
    ('(' func=Declare symbol=ID data+=(Type) ')');

Lambda:
    data=('lambda' | '->');

Unary:
    data=('display' | 'sqrt' | '!' | 'copy' | 'move' | 'lend');

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
    data=':';

Type:
    ((BasicType | Abstraction | Application | List)) |
    ('(' Linear (BasicType | Abstraction | Application | List)) ')';

BasicType:
    data+=('i8' | 'i16' | 'i32' | 'i64' | 'f32' | 'f64' | 'bool' | 'byte' | 'char' );

Linear:
    data+='linear';

List:
    '[' data+=(ID | Type | BOOL | INT | FLOAT | CHAR | STRING | List | Abstraction | Application | Annotation)* ']';

hidden terminal WS: /\s+/;
terminal ID: /[_a-zA-Z][\w_]*/;
terminal BOOL returns boolean: /true|false/;
terminal FLOAT returns number: /[-+]?((\d+\.\d*)|(\d*\.\d+))/;
terminal INT returns number: /[-+]?[0-9]+/;
terminal CHAR: /'[_a-zA-Z0-9]'/;
terminal STRING: /"(\\.|[^"\\])*"/;

hidden terminal SL_COMMENT: /\#[^\n\r]*/;
