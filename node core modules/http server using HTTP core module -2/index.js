import http from 'http'

http.createServer((req, res) => {
  res.end('Hello from Node.js!');
}).listen(3000);

console.log('Server running at http://localhost:3000');
