const http = require("http");
const server = http.createServer();

server.on("Connection", (socket) => {
  console.log("New");
});

server.listen(3000);
