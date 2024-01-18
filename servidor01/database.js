//import { Client } from "pg";
const { Client } = require("pg");
const { createClient } = require("redis");
const query = async () => {
  const client = new Client({
    host: "localhost",
    port: 5432,
    user: "postgres",
    database: "postgres",
    password: "local_password",
  });
  await client.connect();
  const res = await client.query("SELECT $1::text as message", [
    "Hello world!",
  ]);
  //console.log(res.rows[0].message); // Hello world!
  await client.end();
  return res;
};

const redisWrite = async () => {
  const client = await createClient()
    .on("error", (err) => console.log("Redis Client Error", err))
    .connect();
  await client.set("nome", "Jesus");
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
module.exports = { query, redisWrite, redisQuery };
/*export default {
  carro: query,
};*/
