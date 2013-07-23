var express = require('express');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
 len = index.html.length;
 response.send((fs.readFileSync(index.html,'utf8')).toString('utf8',0,len));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
