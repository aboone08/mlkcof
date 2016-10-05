var express = require('express'),
  logger = require('morgan')('dev'),
  server = express(),
  path = require('path');

var port = process.env.PORT || 8080;

server.use(logger);
server.use(express.static(path.join(__dirname + '/public')));

server.get('/', function(req, res){
  res.sendFile('public/html/home.html', {root:__dirname});
});

server.get('/about', function(req, res){
  res.sendFile('public/html/about.html', {root:__dirname});
});

server.get('kingcelebration', function(req, res){
  res.sendFile('public/html/kingcelebration.html', {root:__dirname});
});

server.get('/contact', function(req, res){
  res.sendFile('public/html/contact.html', {root:__dirname});
});

server.listen(8080, function(){
  console.log("Now Listening on Port" + port);
});
