const http = require("http");
const port = 8081;
const host = "0.0.0.0"; // 127.0.0.1 || 0.0.0.0

const server = http.createServer((request, response) => {
  const respostas = [];
  respostas["/"] = "<h1>Home</h1>";
  respostas["/fotos"] = "<h1>Fotos</h1>";
  respostas["/contato"] = "<h1>Contato</h1>";

  response.end(respostas[request.url]);
});

server.listen(port, host, () => {
  console.log(`Servidor de pé em: http://${host}:${port}`);
  console.log("Pra desligar o servidor: ctrl + c");
});
