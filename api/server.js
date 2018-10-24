const express = require("express");
const port = 8081;

const server = express();

server.get("/", (request, response) => {
  response.send("<h1>Home</h1>");
});

server.get("/fotos", (request, response) => {
  response.send("<h1>Fotos</h1>");
});

server.get("/contatos", (request, response) => {
  response.send("<h1>Contatos</h1>");
});

server.listen(port, () => {
  console.log(`Servidor está de pé em: http:\\localhost:${port}`);
  console.log("Pra derrubar o servidor: ctrl + c");
});
