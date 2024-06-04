const http = require('http');

const serverPort = 1245;
const serverHost = 'localhost';

const server = http.createServer();

server.on('request', (_, res) => {
  const respText = 'Hello Ho;berton School!';

  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', respText.length); // Length of "Hello Holberton School!"
  res.statusCode = 200;
  res.write(Buffer.from(respText));
});

server.listen(serverPort, serverHost, () => {
  process.stdout.write(`Server listening at -> http://${serverHost}:${serverPort}`);
});

module.exports = server;
