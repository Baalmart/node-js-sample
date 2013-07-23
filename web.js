var express = require('express');
var app = express.createServer(express.logger());

//var fs = require ('fs');
//fs.readFileSync(index.html, 'htf8');
//var app = fs.create.createServer(fs.logger());

app.get('/', function(request, response) {
response.send('hello world from index.html!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
