var express = require('express');
var app = express();
var router = require('./controllers/router');
app.set('view engine', 'ejs');
app.set('views', 'views' );
app.use(express.static('public'));
app.use('/', router);

var server = app.listen(3000, function () {
  var port = server.address().port;
  console.log('Server up and listening on', port);
});
