var express = require('express');
var app = express();
var datas = require('./vo/datas');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
var makeResponseTemplate = function(resultCode, resultInfo, resultData) {
  return {
    resultCode : resultCode,
    resultInfo : resultInfo,
    resultData : resultData
  };
};

var addApiDescription = function(result, desc) {
  result.description = desc;
}

app.get('/getBookList',function(req,res) {
  var retval = makeResponseTemplate('01', {
    resultMessage : 'Success'
  }, datas.books);
  addApiDescription(retval, "This is API for search book list. parameter List : [empty]");//TODO to be deleted
  res.send(retval);
});

app.get('/getBookInfo', function(req, res) {
  var retval = makeResponseTemplate('01', {
    resultMessage : 'Success'
  }, datas.books);
  addApiDescription(retval, "This is API for search book information. parameter List : [bookId]");//TODO to be deleted
  res.send(retval);
});
app.get('/getUsers', function(req, res) {
  res.send(datas.users);
});

app.listen(8080);
