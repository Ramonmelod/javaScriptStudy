//------------------------Class com construtor básico básico------------------------
class natureza {
  constructor() {
    this.nome = "amazonia";
  }
}

let n1 = new natureza();
console.log(n1.nome);

//-------------------Class com construtor recebendo um parâmetro------------------------
class pessoa {
  constructor(pnome) {
    this.nome = pnome;
  }
}

let p1 = new pessoa("Ramon");
console.log(p1.nome);
