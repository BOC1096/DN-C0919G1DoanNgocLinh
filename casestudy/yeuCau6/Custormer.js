let Customer = function () {
    this.setNameCustomer = function (name) {
        this.name = name;
    };
    this.getNameCustomer = function () {
        return this.name;
    };
    this.setIDCustomer = function (id) {
        this.id = id;
    };
    this.getIDCustomer = function () {
        return this.id;
    };
    this.setBirthdayCustomer = function (birthday) {
        this.birthday = birthday;
    };
    this.getBirthdayCustomer = function () {
        return this.birthday;
    };
    this.setAddressCustomer = function (address) {
        this.address = address;
    };
    this.getAddressCustomer = function () {
        return this.address;
    };
    this.setEmailCustomer = function (email) {
        this.email = email;
    };
    this.getEmailCustomer = function () {
        return this.email;
    };
    this.setTypeCustomer = function (typecus) {
        this.typecus = typecus;
    };
    this.getTypeCustomer = function () {
        return this.typecus;
    };
    this.setRentdays = function (rentdays) {
        this.rentdays = rentdays;
    };
    this.getRentdays = function () {
        return this.rentdays;
    };
    this.setDiscount = function (discount) {
        this.discount = discount;
    };
    this.getDiscount = function () {
        return this.discount;
    };
    this.setRoomtype = function (roomtype) {
        this.roomtype = roomtype;
    };
    this.getRoomtype = function () {
        return this.roomtype;
    };
    this.setServiveType = function (servicetype) {
        this.servicetype = servicetype;
    };
    this.getServivetype = function () {
        return this.servicetype;
    };
    this.setNumberIncluded = function (numberincluded) {
        this.numberincluded = numberincluded;
    };
    this.getNumberIncluded = function () {
        return this.numberincluded;
    };
    this.totalpay = function () {
        let moneypay = 0;
        if (this.servicetype === "Villa"){
            moneypay = 500;
        }else if(this.servicetype === "House"){
            moneypay = 300;
        }else if (this.servicetype === "Room"){
            moneypay = 100;
        }
        return (moneypay * parseInt(this.rentdays)*(1 - parseInt(this.discount) / 100));
    };
};