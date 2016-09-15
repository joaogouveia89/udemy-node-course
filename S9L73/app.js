var express = require('express');

var app = express();

var port = process.env.PORT || 3000;

app.get('/', function(req, res){
  console.log('get method called!');
  res.send('<html><head></head><body><h1>Hello world</h1></body></html>');
});

app.get('/api', function(req, res){
  res.json({firstname: 'Joao', lastname: 'Gouveia'});
});

app.listen(port);
