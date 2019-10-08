let Employee = function () {
    this.setNameEmployee = function (nameEmployee) {
        this.nameEmployee = nameEmployee;
    };
    this.getNameEmployee = function () {
        return this.nameEmployee;
    };
    this.setIDNameEmployee = function (nameIDEmployee) {
        this.nameIDEmployee = nameIDEmployee;
    };
    this.getIDNameEmployee = function () {
        return this.nameIDEmployee;
    };
    this.setBirthdayEmployee = function (birthdayEmployee) {
        this.birthdayEmployee = birthdayEmployee;
    };
    this.getBirthdayEmployee = function () {
        return this.birthdayEmployee;
    };
    this.setPhoneEmployee = function (phoneEmployee) {
        this.phoneEmployee = phoneEmployee;
    };
    this.getPhoneEmployee = function () {
        return this.phoneEmployee;
    };
    this.setEmailEmployee = function (emailEmployee) {
        this.emailEmployee = emailEmployee;
    };
    this.getEmailEmployee = function () {
        return this.emailEmployee;
    };
    this.setLiteracyEmployee = function (literacyEmployee) {
        this.literacyEmployee = literacyEmployee;
    };
    this.getLiteracyEmployee = function () {
        return this.literacyEmployee;
    };
    this.setPositionEmployee = function (positionEmployee) {
        this.positionEmployee = positionEmployee;
    };
    this.getPositionEmployee = function () {
        return this.positionEmployee;
    };
    this.salary = function () {
        let subsidy = 0;
        if (this.positionEmployee === "Manager") {
            subsidy = 500;
        } else if (this.positionEmployee === "Sale") {
            subsidy = 300;
        } else if (this.positionEmployee === "Marketing") {
            subsidy = 200;
        }
        return subsidy + 1000;
    };
};