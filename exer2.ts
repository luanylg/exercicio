const entrada2 = require("readline-sync");
let media: number = 0;

for(let i = 0; i <= 5; i++){
    let valor: number = parseFloat(entrada2.question('Digite a nota: '));
    media = media + valor;
}

console.log(media/5)