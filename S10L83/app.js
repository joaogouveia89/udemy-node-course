var express = require('express');
var app = express();
var mongoose = require('mongoose');

mongoose.connect("mongodb://joao:123@ds055722.mlab.com:55722/test-joao-app");

var Schema = mongoose.Schema;

var userSchema = new Schema({
  firstname: String,
  lastname: String,
  age: String
});

var User = mongoose.model('user', userSchema)

var elson = User({
  firstname: 'aaaa',
  lastname: 'Gouveia',
  age: '4'
});

elson.save(function(err){
  if(err) throw err;
  console.log('person saved!');
})

app.use('/', function(req, res, next){
  console.log("Request Url: " + req.url);
  User.find({}, function(err, users){
      if(err) throw err;
      console.log(users);
  });
  next();
});

app.listen(3000);
