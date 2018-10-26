const express = require("express");
const port = 8081;

const server = express();

const logado = false;

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

// Autenticação
server.use("/*", (req, res, next) => {
  if (logado) {
    next();
  } else {
    res.send("<h1>Você não está logado!</h1>");
  }
});

server.get("/collabs", (req, res) => {
  res.send(COLLABS);
});

server.use((req, res) => {
  res.send({ msg: "Essa rota não tem fucionalidade" });
});

server.listen(port, () => {
  console.log(`Servidor está de pé em: http://localhost:${port}`);
  console.log("Pra derrubar o servidor: ctrl + c");
});
