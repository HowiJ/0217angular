var express = require('express'),
    bodyParser = require('body-parser'),
    path    = require('path'),
    app     = express();

app.use(express.static(path.join(__dirname, './client')));
app.use(express.static(path.join(__dirname, './bower_components')));
app.use(bodyParser.json());

app.get('/users', function(req, res) {
  console.log('in server');
  res.json([{name: 'howard',age: '100'}, {name: 'bob', age: '1'}]);
})
app.post('/users', function(req, res) {
  console.log(req.body);
  res.json({foo:'bar'});
})

app.listen(8080, function() {
  console.log('angular demo on 8080');
})