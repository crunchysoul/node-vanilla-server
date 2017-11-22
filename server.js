const HTTP = require('http');

const server = HTTP.createServer((request, response) => {
  const path = request.url;

  console.log('Request received', path);
  if (path === '/') {
    response.end('Home');
  } else if (path === '/opensesame') {
    response.end('Ooh you found the secret');
  } else if (path === '/postcode.json') {
    response.writeHead(200, {
      'Content-Type': 'application/json'
    });
    response.end(`{ "name": "Melbourne", "postcode": 3000 }`);
  } else {
    response.end('Back at you');
  }
});

const port = 3000;

//start server
server.listen(port, (error) => {
  console.log(`Server has started at http://local:${port}`);
})
