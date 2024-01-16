//import { Client } from "pg";
const { Client } = require("pg");

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

module.exports = { query };
/*export default {
  carro: query,
};*/
