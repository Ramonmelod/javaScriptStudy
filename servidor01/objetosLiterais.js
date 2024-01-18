const Pessoa = {
  nome: "Klenildes",
  getNome: function () {
    return this.nome;
  },
  setNome: function (Novonome) {
    this.nome = Novonome;
  },
};

const p1 = Pessoa.nome + " Melo";
console.log(Pessoa.nome);
console.log(p1);

console.log("-----mesmo local da memória------");

const p2 = Pessoa;
const p3 = Pessoa;
console.log(p2.nome);
p2.nome = "Aranha";

console.log(`Pessoa: ${Pessoa.nome}`);
console.log(`p2: ${p2.nome}`);
p3["nome"] = "Formiga";
console.log(`p3: ${p3.nome}`);
console.log(`Pessoa: ${Pessoa.nome}`);
console.log(`p2: ${p2.nome}`);

console.log("---------getters e setters-----");
console.log(Pessoa.getNome());
Pessoa.setNome("Astrogildo");
console.log(p2.getNome());
console.log(`p1: ${p1}`);
