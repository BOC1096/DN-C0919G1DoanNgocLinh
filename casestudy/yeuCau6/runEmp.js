let listEmployee = [];
let checkEditEmployee = false;
let checkDeleteEmployee = false;
let checkDisplaySalary = false;
let validatePhone = /^[0-9]{2}(?:-[0][1-9]{9})$/;

function addNewEmployee() {
    let emp = new Employee();
    let checkvalidateEmployee = false;
    emp.setNameEmployee(prompt("enter name employee"));
    do {
        emp.setIDNameEmployee(prompt("enter id name employee: "));
        if (validateId.test(emp.getIDNameEmployee())) {
            checkvalidateEmployee = true;
        }
    }
    while (!checkvalidateEmployee);

    do {
        checkvalidateEmployee = false;
        emp.setBirthdayEmployee(prompt("enter birthday employee"));
        if (validateBirthday.test(emp.getBirthdayEmployee())) {
            checkvalidateEmployee = true;
        }
    }
    while (!checkvalidateEmployee);
    do {
        checkvalidateEmployee = false;
        emp.setPhoneEmployee(prompt("enter phone employee"));
        if (validatePhone.test(emp.getPhoneEmployee())) {
            checkvalidateEmployee = true;
        }
    }
    while (!checkvalidateEmployee);
    do {
        checkvalidateEmployee = false;
        emp.setEmailEmployee(prompt("enter email employee"));
        if (validateEmail.test(emp.getEmailEmployee())) {
            checkvalidateEmployee = true;
        }
    }
    while (!checkvalidateEmployee);

    emp.setLiteracyEmployee(prompt("enter literacy employee: "));
    emp.setPositionEmployee(prompt("enter position employee"));
    listEmployee.push(emp);
    employeeMenu();
}

function chooseDisplay() {
    let result = "";
    for (let i = 0; i < listEmployee.length; i++) {
        result += "\n" + (i + 1) + ".Name: " + listEmployee[i].getNameEmployee() +
            "ID: " + listEmployee[i].getIDNameEmployee()
    }
    let chooseEmployee = parseInt(prompt(result +
        "\n" + (listEmployee.length + 1) + ". Back to menu"));
    if (chooseEmployee !== (listEmployee.length + 1)) {
        displayInformationEmployee(chooseEmployee - 1);

    } else {
        checkEditEmployee = false;
        checkDeleteEmployee = false;
        checkDisplaySalary = false;
        employeeMenu();
    }
}

function displayInformationEmployee(index) {
    if (checkEditEmployee) {
        let chooseEditEmp = parseInt(prompt(
            "\n1.Name: " + listEmployee[index].getNameEmployee() +
            "\n2.ID: " + listEmployee[index].getIDNameEmployee() +
            "\n3.Birthday: " + listEmployee[index].getBirthdayEmployee() +
            "\n4.Phone: " + listEmployee[index].getPhoneEmployee() +
            "\n5.Email: " + listEmployee[index].getEmailEmployee() +
            "\n6.Literacy: " + listEmployee[index].getLiteracyEmployee() +
            "\n7.Position: " + listEmployee[index].getPositionEmployee() +
            "\n8. Back"
        ));
        if (chooseEditEmp !== 8) {
            editInformationEmployee(index, chooseEditEmp);

        } else chooseDisplay();
    } else if (checkDeleteEmployee) {
        let submit = prompt("\you sure want delete?" +
            "\n 1. Yes" +
            "\n 2. No");
        switch (submit) {
            case "1":
                listEmployee.splice(index, 1);
                checkDeleteEmployee = false;
                employeeMenu();
                break;
            case "2":
                checkDeleteEmployee = false;
                employeeMenu();
                break;
        }
    } else if (checkDisplaySalary) {
        alert("salary: " + listEmployee[index].salary());
        checkDisplaySalary = false;
        employeeMenu();
    } else {
        alert(
            "\n1.Name: " + listEmployee[index].getNameEmployee() +
            "\n2.ID: " + listEmployee[index].getIDNameEmployee() +
            "\n3.Birthday: " + listEmployee[index].getBirthdayEmployee() +
            "\n4.Phone: " + listEmployee[index].getPhoneEmployee() +
            "\n5.Email: " + listEmployee[index].getEmailEmployee() +
            "\n6.Literacy: " + listEmployee[index].getLiteracyEmployee() +
            "\n7.Position: " + listEmployee[index].getPositionEmployee()
        );
        employeeMenu();
    }
}

function editInformationEmployee(indexEmp, index) {
    let inforEdit = prompt("enter infor want edit: ");
    switch (index) {
        case 1:
            listEmployee[indexEmp].setNameEmployee(inforEdit);
            break;
        case 2:
            listEmployee[indexEmp].setIDNameEmployee(inforEdit);
            break;
        case 3:
            listEmployee[indexEmp].setBirthdayEmployee(inforEdit);
            break;
        case 4:
            listEmployee[indexEmp].setPhoneEmployee(inforEdit);
            break;
        case 5:
            listEmployee[indexEmp].setEmailEmployee(inforEdit);
            break;
        case 6:
            listEmployee[indexEmp].setLiteracyEmployee(inforEdit);
            break;
        case 7:
            listEmployee[indexEmp].setPositionEmployee(inforEdit);
            break;
    }
    checkEditEmployee = false;
    employeeMenu()
}

function chooseDleteEmployee() {
    checkDeleteEmployee = true;
    chooseDisplay();
}

function chooseEditEmployee() {
    checkEditEmployee = true;
    chooseDisplay();
}

function chooseDislaySalary() {
    checkDisplaySalary = true;
    chooseDisplay();
}

function employeeMenu() {
    let menu = prompt(
        "\n1. Add New Employee" +
        "\n2. Display Information Employee" +
        "\n3. Display Salary Employee" +
        "\n4. Edit Information Employee" +
        "\n5. Delete Employee" +
        "\n6. Exit"
    );
    switch (menu) {
        case "1":
            addNewEmployee();
            break;
        case "2":
            chooseDisplay();
            break;
        case "3":
            chooseDislaySalary();
            break;
        case "4":
            chooseEditEmployee();
            break;
        case "5":
            chooseDleteEmployee();
            break;
        case "6":
            break;
        default:
            alert("Fail!!!");
            break;
    }
}

employeeMenu();
