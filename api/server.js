const express = require("express");
const port = 8081;

const server = express();

const COLLABS = [
  {
    nick: "ronildolps",
    qtd: 302
  },
  {
    nick: "gueio",
    qtd: 345
  },
  {
    nick: "VitorEmanoel_",
    qtd: 205
  }
];

// Verbos || Method => GET, POST, PUT (patch, quase igual ao put) e DELETE

server.get("/collabs", (req, res) => {
  res.send(COLLABS);
});

server.listen(port, () => {
  console.log(`Servidor está de pé em: http://localhost:${port}`);
  console.log("Pra derrubar o servidor: ctrl + c");
});
