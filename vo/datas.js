var User = require('./User');
var Book = require('./Book');
var Country = require('./Country');
var City = require('./City');

var users = [
  new User('1','이태한',32,'M'),
  new User('2','애슐리',33,'F'),
  new User('3','마태일',32,'M'),
  new User('4','한새롬',28,'F'),
  new User('5','문건웅',40,'M'),
];

var books = [
  new Book('1','13:00','서울','19:00','대전','TRiT','1412414'),
  new Book('2','14:00','대전','20:00','대구','Air Asia','4222414'),
  new Book('3','11:00','대구','21:00','부산','LTH','1442114'),
  new Book('4','15:00','부산','22:00','서울','MTI','5948271'),
  new Book('5','12:00','청주','15:00','제주','PSI','5958721'),
  new Book('6','16:00','용인','24:00','성남','HSR','9484721'),
  new Book('7','17:00','성남','21:00','용인','PMLH','6583920'),
  new Book('8','12:00','제주','23:00','청주','TRiT','1273621'),
];

var country = [
  new Country('01', 'Korea', 'Seoul.jpg'),
  new Country('02', 'Japan', 'Tokyo.jpg'),
  new Country('03', 'USA', 'LA.jpg'),
];

var city = [
  new City('01', 'Korea', 'Seoul'),
  new City('02', 'Korea', 'Inchoen'),
  new City('03', 'Korea', 'Youngin'),
  new City('04', 'Korea', 'Busan'),
  new City('05', 'Japan', 'Tokyo'),
  new City('06', 'USA', 'LA'),
];
exports.users = users;
exports.books = books;
exports.country = country;
exports.city = city;
