var http = require('http');
var fs = require('fs');


var myReadStream = fs.createReadStream(__dirname + '/readme.txt');
// what we want is to write the recieved chunk to the stream.
var myWriteableStream = fs.createWriteStream(__dirname + '/writeme.txt')

myReadStream.pipe(myWriteableStream);

// Since we use these streams so often we have a another way of doing all this.
// There is a better way of doing all of this and those things are called Pipes.
