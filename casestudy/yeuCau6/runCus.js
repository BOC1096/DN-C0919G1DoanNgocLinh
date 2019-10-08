let listCustormer = [];
let checkEditCustomer = false;
let checkDeleteCustomer = false;
let checkDisplayTotalpay = false;

let validateNumber = /^[0-9]{1,9}$/;
let validateBirthday = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
let validateEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let validateId = /^[0-9]{9}$/;

function addNewCustomer() {
    let cus = new Customer();
    let checkvalidate = false;
    cus.setNameCustomer(prompt("enter name custormer: "));
    do {
        cus.setIDCustomer(prompt("enter idname: "));
        if (validateId.test(cus.getIDCustomer())) {
            checkvalidate = true;
        }
    }
    while (!checkvalidate);
    do {
        checkvalidate = false;
        cus.setBirthdayCustomer(prompt("enter birthday custormer: "));
        if (validateBirthday.test(cus.getBirthdayCustomer())) {
            checkvalidate = true;
        }
    }
    while (!checkvalidate);

    cus.setAddressCustomer(prompt("enter address custormer: "));
    do {
        checkvalidate = false;
        cus.setEmailCustomer(prompt("enter email custormer: "));
        if (validateEmail.test(cus.getEmailCustomer())) {
            checkvalidate = true;
        }
    }
    while (!checkvalidate);

    cus.setTypeCustomer(prompt("enter custormer type: "));
    do {
        checkvalidate = false;
        cus.setRentdays(prompt("enter rentdays: "));
        if (validateNumber.test(cus.getRentdays())) {
            checkvalidate = true;
        }
    }
    while (!checkvalidate);
    do {
        checkvalidate = false;
        cus.setDiscount(prompt("enter discount: "));
        if (validateNumber.test(cus.getDiscount())) {
            checkvalidate = true;
        }
    }
    while (!checkvalidate);
    do {
        checkvalidate = false;
        cus.setNumberIncluded(prompt("enter number included: "));
        if (validateNumber.test(cus.getNumberIncluded())) {
            checkvalidate = true;
        }
    }
    while (!checkvalidate);
    cus.setServiveType(prompt("enter service type: "));
    cus.setRoomtype(prompt("enter room type: "));

    listCustormer.push(cus);
    mainMenu();
}

function displayCustomer() {
    let result = "";
    for (let i = 0; i < listCustormer.length; i++) {
        result += (i + 1) + ". " + "name: " + listCustormer[i].getNameCustomer() +
            "; id name: " + listCustormer[i].getIDCustomer() + "\n";
    }
    let choseDisplayCustomer = parseInt(prompt(result + (listCustormer.length + 1)
        + "Back to menu"));
    if (choseDisplayCustomer !== (listCustormer.length + 1)) {
        displayInformationCustomer(choseDisplayCustomer - 1);
        checkDisplayTotalpay = false;
        checkDeleteCustomer = false;
        checkEditCustomer = false;
        mainMenu();
    } else {
        checkDisplayTotalpay = false;
        checkDeleteCustomer = false;
        checkEditCustomer = false;
        mainMenu();
    }
}

function displayInformationCustomer(index) {
    if (checkDisplayTotalpay) {
        alert("total pay: " + listCustormer[index].totalpay());

    } else if (checkDeleteCustomer) {
        let submit = prompt("\you sure want delete?" +
            "\n 1. Yes" +
            "\n 2. No");
        switch (submit) {
            case "1":
                listCustormer.splice(index, 1);
                checkDeleteCustomer = false;
                mainMenu();
                break;
            case "2":
                checkDeleteCustomer = false;
                mainMenu();
                break;
        }
    } else if (checkEditCustomer) {
        let choseInforMation = parseInt(prompt(
            "\n 1.name: " + listCustormer[index].getNameCustomer() +
            "\n 2.idname: " + listCustormer[index].getIDCustomer() +
            "\n 3.birthday: " + listCustormer[index].getBirthdayCustomer() +
            "\n 4.address: " + listCustormer[index].getAddressCustomer() +
            "\n 5.email: " + listCustormer[index].getEmailCustomer() +
            "\n 6.customer type: " + listCustormer[index].getTypeCustomer() +
            "\n 7.rent days: " + listCustormer[index].getRentdays() +
            "\n 8.discount: " + listCustormer[index].getDiscount() +
            "\n 9.service type: " + listCustormer[index].getServivetype() +
            "\n 10.room type: " + listCustormer[index].getRoomtype() +
            "\n 11.number included: " + listCustormer[index].getNumberIncluded() +
            "\n12.Back"
        ));
        if (choseInforMation !== 12) {
            editInformationCustormer(index, choseInforMation - 1);

        } else {
            displayCustomer();
        }
    } else {
        alert("\n Informaton Customer" +
            "\n 1.name: " + listCustormer[index].getNameCustomer() +
            "\n 2.idname: " + listCustormer[index].getIDCustomer() +
            "\n 3.birthday: " + listCustormer[index].getBirthdayCustomer() +
            "\n 4.address: " + listCustormer[index].getAddressCustomer() +
            "\n 5.email: " + listCustormer[index].getEmailCustomer() +
            "\n 6.customer type: " + listCustormer[index].getTypeCustomer() +
            "\n 7.rent days: " + listCustormer[index].getRentdays() +
            "\n 8.discount: " + listCustormer[index].getDiscount() +
            "\n 9.service type: " + listCustormer[index].getServivetype() +
            "\n 10.room type: " + listCustormer[index].getRoomtype() +
            "\n 11.number included: " + listCustormer[index].getNumberIncluded()
        );
    }
}

function editInformationCustormer(indexcus, index) {
    let inforedit = prompt("Enter infor want edit: ");
    switch (index) {
        case 0:
            listCustormer[indexcus].setNameCustomer(inforedit);
            break;
        case 1:
            listCustormer[indexcus].setIDCustomer(inforedit);
            break;
        case 2 :
            listCustormer[indexcus].setBirthdayCustomer(inforedit);
            break;
        case 3 :
            listCustormer[indexcus].setAddressCustomer(inforedit);
            break;
        case 4 :
            listCustormer[indexcus].setEmailCustomer(inforedit);
            break;
        case 5 :
            listCustormer[indexcus].setTypeCustomer(inforedit);
            break;
        case 6 :
            listCustormer[indexcus].setRentdays(inforedit);
            break;
        case 7 :
            listCustormer[indexcus].setDiscount(inforedit);
            break;
        case 8 :
            listCustormer[indexcus].setServiveType(inforedit);
            break;
        case 9 :
            listCustormer[indexcus].setRoomtype(inforedit);
            break;
        case 10 :
            listCustormer[indexcus].setNumberIncluded(inforedit);
            break;

        default:
            alert("faill!!!");
    }
    checkEditCustomer = false;
    mainMenu()
}

function choseCustomerDelete() {
    checkDeleteCustomer = true;
    displayCustomer();
}

function choseCustomeredit() {
    checkEditCustomer = true;
    displayCustomer();
}

function choseDisplayTotalpay() {
    checkDisplayTotalpay = true;
    displayCustomer();
}

function mainMenu() {
    let menu = prompt(
        "\n1. Add new customer" +
        "\n2. Display customer" +
        "\n3. Display totalpay customer" +
        "\n4. Edit customer" +
        "\n5. Delete customer" +
        "\n6. Exit"
    );
    switch (menu) {
        case "1":
            addNewCustomer();
            break;
        case "2":
            displayCustomer();
            break;
        case "3":
            choseDisplayTotalpay();
            break;
        case "4":
            choseCustomeredit();
            break;
        case "5":
            choseCustomerDelete();
            break;
        case "6":
            break;
        default:
            alert("fail!!");
            break;
    }
}

mainMenu();