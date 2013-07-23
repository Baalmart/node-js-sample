var express = require('express');
var app = express();
app.use(express.logger());

var buff = new Buffer(index.html, "utf-8");
ans= buff.toString('utf8',0,buff.length);

app.get('/', function(request, response) {
  response.send(ans);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
