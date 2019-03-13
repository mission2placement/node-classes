var http = require('http');
var fs = require('fs');


// var myReadStream = fs.createReadStream(__dirname + '/readme.txt');
// var myWriteableStream = fs.createWriteStream(__dirname + '/readme.txt')
//
// // This pipe() function is doing the exactly samething as .on(data, funtion())
// // We can only pipe from a ReadStream to a writeStream and not vice versa.
// myReadStream.pipe(myWriteableStream);


var server = http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/html'});
  var myReadStream = fs.createReadStream(__dirname + '/index.html');
  // res.end('Hi my server');
  // we won't need the writeStream because we have the response object.
  // So instead of the writeableStream we can pipe() the read datachunk to the response.
  // We will also not need to end it because the pipe will end the esponse object.
  myReadStream.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log('Yo! Listening to 3000 port')
