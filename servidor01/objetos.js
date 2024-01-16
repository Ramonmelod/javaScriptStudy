class carro {
  NumeroRodas = 4;
  constructor(pnome, tipo) {
    this.nome = pnome;
    this.setterProperties(tipo);
  }
  setterProperties(tipo) {
    if (tipo == 1) {
      this.modelo = "SUV";
      this.velocidadeMax = 180;
      this.preço = 150000;
    } else if (tipo == 2) {
      this.modelo = "Hatch";
      this.velocidadeMax = 220;
      this.preço = 130000;
    } else if (tipo == 3) {
      this.modelo = "sedan";
      this.velocidadeMax = 240;
      this.preço = 160000;
    }
  }
  getNome() {
    return this.nome;
  }
  infoCarro() {
    console.log("Informações:" + this.nome);
    console.log("");
    console.log("Modelo: ---------------- " + this.modelo);
    console.log("Velocidade Máxima: ------" + this.velocidadeMax + " Km/h");
    console.log("Preço: ------------------" + this.preço + " R$");
    console.log("----------------------------------");
    console.log("");
  }
}

let c2 = new carro("Storm", 2);
c2.infoCarro();

module.exports = { carro };

//comando Ctrl + d seleciona várias linhas ao mesmo tempo e digita em todas elas de uma só vez
//------------------------Class com construtor básico básico------------------------
/*class natureza {
  constructor() {
    this.nome = "amazonia";
  }
}

let n1 = new natureza();
console.log(n1.nome);*/

//-------------------Class com construtor recebendo um parâmetro------------------------
