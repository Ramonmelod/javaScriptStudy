const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
const port = 3000;

app.use(cookieParser());

app.get("/", (req, res) => {
  let username = req.cookies.username;

  if (!username) {
    res.send(
      "Olá! Por favor, insira seu nome na URL como /setUserName?username=SEU_NOME para definir o nome do usuário."
    );
  } else {
    res.send(`Bem-vindo, ${username}!`);
  }
});

app.get("/setUserName", (req, res) => {
  let username = req.query.username;

  if (!username) {
    res.send("Por favor, insira um nome válido.");
  } else {
    res.cookie("username", username);
    res.redirect("/");
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
