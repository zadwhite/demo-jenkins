const http = require('http');

function assert(cond, msg) {
  if (!cond) {
    console.error('TEST FAILED:', msg);
    process.exit(1);
  }
}

const server = http.createServer((req, res) => {
  res.end('ok');
});

server.listen(0, () => {
  const { port } = server.address();
  http.get(`http://127.0.0.1:${port}`, (res) => {
    assert(res.statusCode === 200, `status should be 200, got ${res.statusCode}`);
    server.close(() => {
      console.log('TEST PASSED');
      process.exit(0);
    });
  }).on('error', (err) => {
    console.error(err);
    process.exit(1);
  });
});