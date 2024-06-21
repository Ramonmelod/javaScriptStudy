const query = async () => {
  const search = await fetch("https://httpbin.org/get");
  const data = await search.json();
  const dataString = JSON.stringify(data);
  console.log(dataString);
  return dataString;
};
query();
