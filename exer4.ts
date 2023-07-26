const entrada4 = require("readline-sync");

let an: number  = 0;
let pr: number  = 1;

for (let i = 0; i <= 10; i++){
    let f = an + pr;

    console.log(f);

    pr = an
    an = f
}