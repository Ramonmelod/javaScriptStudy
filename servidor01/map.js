let array = ["casa", "gato", "destino", "Brasil"];
let arrayN = [0, 1, 2, 3, 4];
let objeto = {
  moradia: "casa",
  animal: "gato",
  final: "destino",
  país: "Brasil",
};

console.log(array);
console.log(objeto.moradia);
const a = arrayN.map((el, i) => {
  //console.log("o elemento: " + el + "está na posição: " + i);
  return el + 100;
});

console.log(a);
