// import http module and create web server
const http = require('http');

// create server
const server = http.createServer((req, res) => {

  // log request path
  console.log(req.url);

  // status code
  res.statusCode = 200;

  // headers
  res.setHeader('Content-Type', 'text/plain');

  // response body
  res.end('Hello World');
});

// need to start andlisten on port 8080 for requests
server.listen(8080, () => {

  console.log('Server listening on port 8080');
});