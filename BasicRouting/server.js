var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
  // Intially when we created our server the same HTML was being loaded for all the url.
  // In real world requirement the website will have multiple pages and we need to handle those routes.
  // One way of doing that is checking the req.url and handle the response based on that.
  // So we are creating the response below for different routes and if the routes don't match we send back the status -- 404
  if (req.url === '/' || req.url === '/home'){
    res.writeHead(200, {'Content-Type' : 'text/html'});
    fs.createReadStream(__dirname + '/index.html').pipe(res);
  } else if ( req.url === '/contact-me') {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    fs.createReadStream(__dirname + '/contact.html').pipe(res);
  } else if ( req.url === '/api/todos') {
    res.writeHead(200, {'Content-Type' : 'application/json'});
    todos =[
      {
        id: 1,
        item: 'Reach Crown 1 today'
      },
      {
        id: 2,
        item: 'Order BBQ pizzas for all'
      }
    ]
    res.end(JSON.stringify(todos))
  } else {
    res.writeHead(404, {'Content-Type' : 'text/html'});
    fs.createReadStream(__dirname + '/404.html').pipe(res);
  }
});

server.listen(3000, '127.0.0.1');
console.log('Yo! Listening to 3000 port')
