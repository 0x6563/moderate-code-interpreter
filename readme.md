# Moderate Code Interpreter

Moderate Code Interpreter is a basic interpreter that can run in the browser. It input is designed to be easily comprehensible for end-users, allowing them to understand the intended functionality of the code. Moreover, it is crafted to be straightforward enough for developer-adjacent roles, such as spreadsheet wizards, to swiftly create their own scripts. The grammar is designed with extensibility in mind, by priortizing essential functionality and having a rudimentary aesthetic to writing statements and expressions. Ideally domain-specific syntax could be layered atop of this core language.

# Samples

## Array Concat
```
return Merge(["abc"],["def"]);

function Merge(a, b){
    return [123] .. a .. b;
}
```

## Array Push
```
var a = [];
a += 1 + 2;
a += 3;
```

## Complex Query
```
var a = query o in orders 
filter all { 
    o.status == "paid"; 
    o.items[?].id == "0120120";
} or all {
    o.status == "pending";
}
list {
    orderId: o.id,
    status: o.status,
    user: query u in users filter o.userId == u.id and u.id within 2 to 3 first u ,
    itemIds: query i in o.items list i.id,
    sum: query o in o.items aggregate (p, c) => p + c.cost,
    ... query o in o.items
        aggregate { 
            stats: {
                sum: (p = 0, c) => p + c.cost,
                qty: (p, c) => p + c.qty,

                a: match {
                    a < 3: "some";
                    b < 3: "else";
                    default: a;
                }
            },
            sum: (p, c) => p + c.cost,
            qty: (p, c) => p + c.qty
        }
}
cluster (orderId, status, user)
sort o.id
segment 0 to 100;
```

## Filter Array Objects
```
var items = [
   {k: {i: 1}},
   {k: {i: 2}},
   {k: {i: 3}},
   {k: {i: 4}},
   {k: {i: 5}},
   {k: {i: 6}},
   {k: {i: 7}}
];

return query o in items
filter all { 
    o.k.i > 2;
    o.k.i < 5;
}
list o;
```

## Loop Statement
```
var i = 100000;
while( i > 0 ){
    i -= 1;
}
```

## Multiple Condition Expression
```
all {
 1 < 2;
 3 /2 < 3;
 4 + 2 > 5;
}
```

## Reference Assignment
```
var a ={
    b: 2,
    c: {
        d: 3
    }
};

a.c.d = 7;
```

## Simple Math
```
var a = 3;
var b = 4; 
return a + b;
```

## Variable Declaration
```
var a = 2;
```