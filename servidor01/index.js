const express = require("express");
const { Router } = require("express");
const app = express();
const apiRouter = Router();
const porta = 3000;
const localHost = "localhost";
const BASE_URL = "https://httpbin.org"; // site httpbin  - ele auxilia no teste de requisições e resposta http
const database = require("./database");
const { Carro } = require("./objetos");

app.use(express.json());
app.use("/carros", apiRouter);

//-----------------------------apiRouter--------------------------------------------
apiRouter.get("/:modelo", (req, res) => {
  res.type("application/json");
  let C = new Carro("Felix", req.params.modelo);
  if (req.params.modelo > 0 && req.params.modelo < 4) {
    res
      .status(200)
      .json(
        `nome: ${C.getNome()}, modelo: ${C.modelo}, Velocidade Máxima: ${
          C.velocidadeMax
        },preço: ${C.preço} R$,`
      );
  } else {
    res.status(400).send("entrada inválida");
  }
});
//-----------------------/consultaRedis-------------------------------------------------------

app.get("/consultaRedis", async (req, res) => {
  console.log("Referer:", req.get("referer"));
  console.log("Content-Type: ", req.get("Content-Type"));
  console.log("User-Agent:", req.get("user-agent"));
  res.type("text/plain");
  const data = await database.redisQuery();
  res.status(200).send(`Em nome está escrito ${data}`);
});

//------------------------/PostLocal-----------------------------------------------
app.post("/postLocal", (req, res) => {
  const { nome } = req.body;

  console.log(nome);

  database.redisWrite();
  res.status(200).send(`Olá ${nome}! Jesus escrito em nome no redis`);
});

//-----------------------/consultaPostgres-----------------------------------------
app.get("/consultaPostgres", async (req, res) => {
  console.log("Referer:", req.get("referer"));
  console.log("Content-Type: ", req.get("Content-Type"));
  console.log("User-Agent:", req.get("user-agent"));
  res.type("text/plain");
  const data = await database.query();
  res.status(200).send(`Esta é a impressão do postgres${data}`);
});

//--------------------------/get-----------------------------------------------------
app.get("/get", async (req, res) => {
  const response = await fetch(BASE_URL + "/get", {
    headers: {
      "Content-Type": "application/json",
      referer: "nowhere",
      "User-Agent": "FBI agent",
    },
  });

  const data = await response.json();
  console.log(data);

  res.status(200).send(data);
});
//--------------------------/getArgs--------------------------------------------------
app.get("/getArgs", async (req, res) => {
  const response = await fetch(
    BASE_URL + "/get?Brazil=Brasília&EUA=Washington",
    {
      headers: {
        "Content-Type": "application/json",
        referer: "nowhere",
        "User-Agent": "FBI agent",
      },
    }
  );

  const data = await response.json();
  console.log(data);

  res.status(200).send(data);
});
//--------------------------/post-----------------------------------------------------
app.post("/post", async (req, res) => {
  const response = await fetch(BASE_URL + "/post", {
    method: "POST",
    body: "a=1", // payload do post
    headers: {
      "Content-Type": "application/json",
      referer: "nowhere",
      "User-Agent": "FBI agent",
    },
  });
  console.log("enviando post para httpbin");
  const data = await response.json();

  console.log(data);

  res.status(200).send(data);
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
