let Mydate = function (day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;

    this.setDay = function (day) {
        this.day = day;
    };
    this.setMonth = function (month) {
        this.month = month;
    };
    this.setYear = function (year) {
        this.year = year;
    };

    this.getDay = function (day) {
        return this.day;
    };
    this.getMonth = function (month) {
        return this.month;
    };
    this.getYear = function (year) {
        return this.year;
    };
};
let date = new Mydate(2, 2, 2007);
let day = date.getDay();
let month = date.getMonth();
let year = date.getYear();
alert(day + "/" + month + "/" + year);
date.setDay(10);
date.setMonth(10);
date.setYear(1996);
day = date.getDay();
month = date.getMonth();
year = date.getYear();
alert(day + "/" + month + "/" + year);
