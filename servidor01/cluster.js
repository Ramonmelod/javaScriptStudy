const express = require("express");
const app = express();
const porta = 3000;
const localHost = "localhost";
const coreNumber = require("os").cpus().length;
const database = require("./database"); // falta exportar o modulo

const cluster = require("node:cluster");

if (cluster.isMaster) {
  console.log(`Master process ${process.pid} is running`);
  cluster.fork();
  cluster.fork();
} else {
  console.log(`Worker ${process.pid} started`);

  //--------------------------/get-----------------------------------------------------
  app.get("/", async (req, res) => {
    res.type("text/plain");

    console.log(await database);
    const query = await database.query();
    console.log(query.rows);
    res
      .status(200)
      .send("Este servidor possui " + coreNumber + " Núcleos em sua CPU");
  });

  //----------------------- slow endpoint -------------------------------------------

  app.get("/slowendpoint", (req, res) => {
    res.type("text/plain");

    for (let i = 0; i < 10000000000; i++) {} // este for foi inserido para causar demora na resposta para que seja feito teste de cluster
    res.status(200).send("Bem vindo ao Slow Endpoint");
  });

  // ----------------------listen-------------------------------------------------------
  app.listen(porta, localHost, () => {
    console.log("Servidor Rodando!");
  });
}
