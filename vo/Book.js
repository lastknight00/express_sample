class Book{
  constructor(bookNo, fromTime, fromArea, toTime,toArea, partner,secNo) {
    this.bookNo = bookNo;
    this.fromTime = fromTime;
    this.fromArea = fromArea;
    this.toTime = toTime;
    this.toArea = toArea;
    this.partner = partner;
    this.secNo = secNo;
  }
}
module.exports = Book;
