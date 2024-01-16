// arquivo: moduloC.js
const funcaoC = () => {
  console.log("Função C");
};

const variavel1 = "Variável 1";
const variavel2 = "Variável 2";

module.exports = {
  a: funcaoC,
  b: variavel1,
  c: variavel2,
};
console.log(module); // mostra o objeto module

/* a forma abaixo também é possível, caso seja a forma escolhida deve se colocar o nome de cada uma das variaveis diretamente no arquivo onde estas variáveis e funções serão colocadas 
module.exports = {
    funcaoC,
    variavel1,
    variavel2,
  };
  */
