var express = require('express');
var app = express();
var datas = require('./vo/datas');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json());

app.get('/getCountryInfo', function(req, res) {
  var country = req.query.country;
  var retval = {};
  if(country) {
    retval = datas.city;
  } else {
    retval = datas.country;
  }
  retval = makeResponseTemplate('01', {
    resultMessage : 'Success'
  }, retval);
  addApiDescription(retval, "This is API for search Country or City information. parameter List : [empty | countryId]");//TODO to be deleted
  res.send(retval);
});

app.get('/getCityInfo', function(req, res) {
  addApiDescription(retval, "This is API for search Country or City information. parameter List : [cityId]");//TODO to be deleted
});

app.get('/getPartnerList', function(req, res) {
  addApiDescription(retval, "This is API for search Country or City information. parameter List : [partnerId]");//TODO to be deleted
});

app.get('/getPartnerPricePolicyInfo', function(req, res) {
  addApiDescription(retval, "This is API for search Country or City information. parameter List : [partnerId]");//TODO to be deleted
})

app.post('/getBookList',function(req,res) {
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

app.post('/insertBookInfo', function(req, res) {
  addApiDescription(retval, "This is API for search Country or City information. parameter List : [empty | countryId]");//TODO to be deleted
});

app.post('/deleteBookInfo', function(req, res) {

});

app.post('/insertPayment', function(req, res) {

});

app.get('/getLuggageLocationInfo', function(req, res) {

});

app.get('/getUsers', function(req, res) {
  res.send(datas.users);
});


app.listen(8080);

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
