var entrada1 = require('readline-sync');
var numero = entrada1.question('Digite um numero positivo: ');
for (var i = 0; i <= numero; i = i + 2) {
    console.log(i);
}
