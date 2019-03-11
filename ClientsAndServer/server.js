/*
  We use the module given to us by node called HTTP. And then we will use the
*/
var http = require('http');

var server = http.createServer(function(req, res){
  console.log('A request was made: ' + req.url);
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hi my server');
});

server.listen(3000, '127.0.0.1');
console.log('Yo! Listening to 3000 port')
