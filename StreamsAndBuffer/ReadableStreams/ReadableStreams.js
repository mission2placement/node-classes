var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readme.txt');

myReadStream.on('data', (dataBlock) => {
  console.log('Data chunk incoming!!!!');
  console.log(dataBlock);
})
