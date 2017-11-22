const HTTP = require('http');

const server = HTTP.createServer((request, response) => {
  console.log('Request received');
});

const port = 3000;

//start server
server.listen(3000, (error) => {
  console.log(`Server has started at http://local:${port}`);
})
