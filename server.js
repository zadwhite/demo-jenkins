const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
  res.end('Hello Jenkins CI/CD!\n');
});

server.listen(port, () => {
  console.log(`Server listening on http://0.0.0.0:${port}`);
});