const http = require("http");
const port = 8081;
const ip = "0.0.0.0"; // 127.0.0.1 || 0.0.0.0

const server = http.createServer((request, response) => {
  const respostas = [];
  respostas["/"] = "<h1>Home</h1>";
  respostas["/fotos"] = "<h1>Fotos</h1>";
  respostas["/contato"] = "<h1>Contato</h1>";

  response.end(respostas[request.url]);

  // if (request.url === "/") {
  //   response.end("<h1>Home</h1>");
  // } else if (request.url === "/fotos") {
  //   response.end("<h1>Fotos</h1>");
  // } else if (request.url === "/contato") {
  //   response.end("<h1>Contato</h1>");
  // } else {
  //   response.end("<meta charset='utf-8'><h1>Essa página não existe!!!</h1>");
  // }
});

server.listen(port, ip, () => {
  console.log(`Servidor de pé em: http://${ip}:${port}`);
  console.log("Pra desligar o servidor: ctrl + c");
});
