{{
    // This is peggy grammar, does not work in pegjs
}}

start = a:[0-9] "+" b:[0-9] { return a + b; }