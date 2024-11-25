async function exemple() {
  console.log("Início");

  const result = await new Promise((resolve) => {
    setTimeout(() => resolve("received data"), 2000); // Simula uma operação assíncrona
  });

  console.log("Result:", result);
  console.log("End");
}

exemple();
console.log("The rest of the program runs while the async function waits...");
