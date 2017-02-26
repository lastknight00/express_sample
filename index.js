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
  var request = req.query;
  if(request.IATA == 'true') {
    var retval = makeResultData([
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
              ]);
  } else {
    var retval = makeResultData([
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
      ]);
  }
  res.send(retval);
});

app.get('/api/selectPartnerList', function(req, res) {
  var retval = makeResultData(
    [
           {"partnerId":"com1", "partnerNm":"LTH Company" , "bagBasicPrice":30, "currency":"EUR", "grade":3 }
          ,{"partnerId":"comp2", "partnerNm":"PSI Company", "bagBasicPrice":20, "currency":"EUR", "grade":5 }
          ,{"partnerId":"comp3", "partnerNm":"MTI Company", "bagBasicPrice":45, "currency":"EUR", "grade":4 }
          ,{"partnerId":"comp4", "partnerNm":"HSR Company", "bagBasicPrice":45, "currency":"EUR", "grade":4 }
      ]
  );

  res.send(retval);
});

app.get('/api/selectPartnerInfo', function(req, res) {
  var retval = makeResultData(
    {
        "partnerId" : "XXXX"
        ,"partnerNm" : "XXXXXX"
        , "1bagBasicPrice":30
        ,"currency":"EUR"
        ,"grade":3
        ,"detail": [ //추가 옵션
          {"detailId":"XXX", "detailNm":"XXXXX", "detailDescription":"detail1", "detailPrice":30}
          ,{"detailId":"XXX", "detailNm":"XXXXX", "detailDescription":"detail2", "detailPrice":30}
        ]
    }
  );
  res.send(retval);
});

var makeResultData = function(data) {
  var retval = {
     "resultCode" : "S001"
     ,"resultData" : {
          "data" : data
      }
      ,"tokenId" : "XXXXXXXXXXXXXXXX"
      ,"tokenValidStartTime" : "YYYYMMDDhhmmsss"  //GMT 0 기준
      ,"tokenValidEndTime" : "YYYYMMDDhhmmsss"  //GMT 0 기준
   };

   return retval;
}
app.listen(8080);
