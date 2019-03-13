var http = require('http');


var server = http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'application/json'});
  var objectRes = {
    name : 'Rafael',
    age: '37',
    sports: 'tennis'
  };
  // We are using the end() to end the response but we can't directly send myObj
  // That is because since the Content-Type is json, it expects a json or a string.
  // So we can use JSON.stringify() which converts the obj to JSON.
  res.end(JSON.stringify(objectRes));
});

server.listen(3000, '127.0.0.1');
console.log('Yo! Listening to 3000 port')
