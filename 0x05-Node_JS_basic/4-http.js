// Importing required HTTP module
const http = require('http');

const server = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });

  response.end('Hello Holberton School!\n');
});

server.listen(1245);

module.exports = server;
