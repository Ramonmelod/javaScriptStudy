//import { Client } from "pg";
const { Client } = require("pg");
const { createClient } = require("redis");

const queryPostgres = async () => {
  const client = new Client({
    host: "localhost",
    port: 5432,
    user: "postgres",
    database: "postgres",
    password: "local_password",
  });
  await client.connect();
  const res = await client.query(
    "SELECT * FROM cadastropessoas ORDER BY i_idade_cadastropessoas DESC LIMIT 10;"
  );
  //console.log(res.rows[0].message); // Hello world!
  await client.end();
  return res;
};

const writePostgres = async (nome, idade) => {
  // falta colocar os trys and catchs
  const client = new Client({
    host: "localhost",
    port: 5432,
    user: "postgres",
    database: "postgres",
    password: "local_password",
  });
  await client.connect();
  //const sqlCode = INSERT into cadastropessoas values('Ramon Melo',31);
  const res = await client.query({
    text: "INSERT into cadastropessoas (s_nome_cadastroPessoas, i_idade_cadastroPessoas) VALUES ($1,$2);",
    values: [nome, idade],
  });
  // "INSERT into cadastropessoas values('Alfredo',62);"
  /*const res = await client.query("SELECT $1::text as message", [
    "Hello world!",
  ]);*/
  //console.log(res.rows[0].message); // Hello world!
  await client.end();
  return res;
};

const redisWrite = async (nomePessoa) => {
  const client = await createClient()
    .on("error", (err) => console.log("Redis Client Error", err))
    .connect();
  await client.set("nome", nomePessoa);
  await client.disconnect();
};

const redisQuery = async () => {
  const client = await createClient()
    .on("error", (err) => console.log("Redis Client Error", err))
    .connect();
  const value = await client.get("nome");
  await client.disconnect();
  return value;
};
module.exports = { queryPostgres, writePostgres, redisWrite, redisQuery };
/*export default {
  carro: query,
};*/
