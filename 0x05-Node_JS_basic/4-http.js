const http = require('http');

const port = 1245;

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('Hello Holberton School!');
  res.end();
});

app.listen(port);

module.exports = app;
