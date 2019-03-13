/*
  We use the module given to us by node called HTTP. And then we will use the
*/
var http = require('http');

/*
    We are going to use the method called createServer() which http modules provide.
    The way this works:
      --> createServer() fires whenever there is request to this server.
      --> createServer() takes 2 parameters - request Object and response Object
      --> request Object comes loaded with request from the client and response Object sends the details back to client.
      --> request and response both have headers --> response Header and request header
      --> headers is more like an extra information (Content-Type, Status-->200 and 400)
*/
var server = http.createServer(function(req, res){
  // console.log('A request was made: ' + req.url); // The request object has the url which made the request
  // we write the header
  res.writeHead(200, {'Content-Type': 'text/plain'});
  // end method ends the response objects and then sends it to the browser
  res.end('<h1>Hi my server</h1>');
});

/*
  We have created the response but this response will not do anything untill it listens to request.
  listen() method assigns the port the node.js is going to listen to the request.
*/
server.listen(3000, '127.0.0.1'); // listen(<port_number>, <ip_address>)
console.log('Yo! Listening to 3000 port') // We are listening to localhost so 127.0.0.1 is our localhost
