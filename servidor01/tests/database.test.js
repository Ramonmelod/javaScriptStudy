test("teste conexão Redis", async () => {
  const response = await fetch("http://localhost:3000/consultaRedis");
  expect(response.status).toBe(200);
});
