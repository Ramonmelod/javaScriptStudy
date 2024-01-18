const carro = require("./objetos.js").carro;

let c1 = new carro("Fera", 3);
c1.infoCarro();
console.log(`aqui = > ${c1.getNome()}`);
console.log(c1.NumeroRodas);

// c2.infoCarro();
// c3.infoCarro();
// c4.infoCarro();

//console.log(carro);

// let c2 = new carro("Storm", 2);
// let c3 = new carro("Mars", 1);
// let c4 = new carro("modulado", 2);
//verificar problema da impressão de objetos do arquivo objetos.js
