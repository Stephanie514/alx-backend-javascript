const http = require('http');

const serverPort = 1245;
const serverHost = 'localhost';

const server = http.createServer();

server.on('request', (_, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', 26); // Length of "Hello Holberton School!"
  res.statusCode = 200;

  res.end('Hello Holberton School!\n');
});

server.listen(serverPort, serverHost, () => {
  console.log(`Server listening at -> http://${serverHost}:${serverPort}`);
});

module.exports = server;
