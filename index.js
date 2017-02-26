var express = require('express');
var app = express();
var datas = require('./vo/datas');
var bodyParser = require('body-parser');
var cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json());

app.get('/api/selectCountryInfo', function(req, res) {

  //var country = req.query.country;
console.log(req.query)
  var request = req.query;
  console.log(request.IATA);
  if(request.IATA == 'true') {
    var retval = {
      "resultCode" : "S001"
      ,"resultData" : {
           "data" : [
             {
                             "countryInfo" : {
                                  "name" : "South Korea"
                                  ,"code" :  "KOR"
                              }
                            ,"IATAInfo" : [
                                   { "name" :  "Incheon International", "IATA":"ICN", "city" : "Seoul", "country" : "south korea"}
                                  ,{ "name" :  "Gimpo International", "IATA":"GMP", "city" : "Seoul2", "country" : "south korea"}
                                  ,{ "name" :  "Gimhae International", "IATA":"PUS", "city" : "Busan", "country" : "south korea"}
                                  ,{ "name" :  "Jeju International", "IATA":"CJU", "city" : "Jeju city", "country" : "south korea"}
                           ]
                           ,"picture" : [
                                  { "contents" :"XXXXXXXXXXXXXXXXx", "format":"bmp", "wsize":"300", "hsize":"300"}
                                 ,{ "contents" :"XXXXXXXXXXXXXXXXx", "format":"bmp", "wsize":"300", "hsize":"300"}
                                 ,{ "contents" :"XXXXXXXXXXXXXXXXx", "format":"bmp", "wsize":"300", "hsize":"300"}
                                 ,{ "contents" :"XXXXXXXXXXXXXXXXx", "format":"bmp", "wsize":"300", "hsize":"300"}
                          ]
                       }
                     ]
           }
           ,"tokenId" : "XXXXXXXXXXXXXXXX"
           ,"tokenValidStartTime" : "YYYYMMDDhhmmsss"  //GMT 0 기준
           ,"tokenValidEndTime" : "YYYYMMDDhhmmsss"  //GMT 0 기준
    };
  } else {
    var retval = {
       "resultCode" : "S001"
       ,"resultData" : {
            "data" : [
              {
                  "countryInfo" : {
                   "name" : "Japan",
                   "code" :  "JPN"
                  }
                  ,"picture" : [
                   { "url":"http://cfile8.uf.tistory.com/image/255DC34B54C700871C698E",
                     "contents" :"XXXXXXXXXXXXXXXXx", "format":"bmp", "wsize":"300", "hsize":"300"},
                  ]
                  }
                  ,{
                  "countryInfo" : {
                   "name" : "South Korea",
                   "code" :  "KOR"
                  }
                  ,"picture" : [
                   { "url":"http://cfile24.uf.tistory.com/original/1410BD344EF1FEAD292FC3",
                     "contents" :"XXXXXXXXXXXXXXXXx", "format":"bmp", "wsize":"300", "hsize":"300"},
                  ]
                  }
                      ]
            }
            ,"tokenId" : "XXXXXXXXXXXXXXXX"
            ,"tokenValidStartTime" : "YYYYMMDDhhmmsss"  //GMT 0 기준
            ,"tokenValidEndTime" : "YYYYMMDDhhmmsss"  //GMT 0 기준
       };

  }
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

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
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
