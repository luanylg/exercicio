var entrada4 = require("readline-sync");
var an = 0;
var pr = 1;
for (var i = 0; i <= 10; i++) {
    var f = an + pr;
    console.log(f);
    pr = an;
    an = f;
}
