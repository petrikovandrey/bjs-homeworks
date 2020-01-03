function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
    "use strict";

    let totalAmount = 0,
        payAmount = 0,
        objDate = {};
    objDate = getDateForCalculate(percent, contribution, amount, date);

    if (objDate.error) {
        console.error("Не все данные указаны верно.");
        return totalAmount;
    };

    payAmount = Math.round(objDate.sum * (objDate.percent + objDate.percent / (((1 + objDate.percent) ** objDate.monthQty) - 1)));
    // S - сумма кредита, P - 1/12 процентной ставки (от 0 до 1), n - количество месяцев
    totalAmount = payAmount * objDate.monthQty;
    console.log(totalAmount);
    return totalAmount;
}

function getDateForCalculate(percent, contribution, amount, date) {
    "use strict";

    let objDate = {},
        today = new Date();

    objDate.error = false;
    objDate.percent = new Number(percent);
    objDate.contribution = new Number(contribution);
    objDate.amount = new Number(amount);
    date = new Date(date);

    objDate.monthQty = calcDate(date, today);

    for (let key in objDate) {
        console.log(objDate[key] === 0); // как сравнивать объекты Number?
        if (isNaN(objDate[key]) || (key != "contribution" && objDate[key] === 0)) {
            console.log(objDate[key]);
            objDate.error = true;
            return objDate;
        };
    };

    console.log(objDate);
    return objDate;
}

function calcDate(dateForCalc, today) {
    let diff = Math.floor(dateForCalc.getTime() - today.getTime());
    let day = 1000 * 60 * 60 * 24;
    let days = Math.floor(diff / day);
    return Math.floor(days / 31);
}

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    if (name.length === 0) {
        name = "Аноним";
    };
    let greeting =  `Привет, мир! Меня зовут ${name}`;
    console.log(greeting);
    return greeting;
}