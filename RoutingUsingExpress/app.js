// There's really no reason to create your own http server using the http module.
// Express will just do that for you with app.listen() just fine and save you little bit of typing.

// If you were creating an https server, then you would need to use the https module
// and pass security credentials to https.createServer(...) in order to create a properly configured server.
// Express does not have the ability to create a properly configured https server for you automatically.

var express = require('express');

// So we now need to fire the function that is returned to us by express module.
// This will give us all the functionality that comes loaded with express : Example - Routing, Templating
var app = express();  // We have our app var variable with all the express methods.

// We can now easily make our routes using the express module
// We need to listen to request so we will specify which port we are listening to.
// We will use the HTTP verbs (GET, POST, PUT, DELETE) to specify what we want to do with the request.
// Let's make the basic get request and send the response.
app.get('/' , (req, res) => {
  res.send('This is my homepage');
});

app.get('/about' , (req, res) => {
  res.send('This is my about page');
});

/*
  In the above requests the app is able to understand the url request and is sending back the text we are specifying.
  This is possible because of the express() module.
  This is a more efficient way compared to our previous example(BasicRouting) where we use conditional statement to differentiate between routes.
*/


app.listen(3000, '127.0.0.1');
