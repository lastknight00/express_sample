var express = require('express');
var app = express();
var datas = require('./vo/datas');

app.get('/getBooks',function(req,res) {
  res.send(datas.books);
});

app.get('/getUsers', function(req, res) {
  res.send(datas.users);
});

app.listen(8080);
