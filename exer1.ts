const entrada1 = require('readline-sync');
let numero1: number = entrada1.question('Digite um numero positivo: ');

for (let i = 0; i<= numero1; i = i+2){
    console.log(i);
}