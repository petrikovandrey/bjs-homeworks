

function calculateQuadraticEquation() {
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a, b, c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = " + result;
}

function getResult(a, b, c) {
    "use strict";
    let d = 0,
        x1 = 0,
        x2 = 0,
        arrX = [],
        sqrtD = 0;

    d = b ** 2 - 4 * a * c;
  
    if (d < 0) {
        return arrX;
    };

    sqrtD = Math.sqrt(d);
   
    if (d === 0) {
        x1 = (-b + sqrtD) / (2 * a);
        arrX.push(x1);

    } else if (d > 0) {
        x1 = (-b + sqrtD) / (2 * a);
        x2 = (-b - sqrtD) / (2 * a);     
        arrX.push(x1);
        arrX.push(x2);
    };
   
    return arrX;

};

function calculateAverageRating() {
    let marks = window.marks.value.split("").map(Number).filter((n) => !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks) {
    "use strict";
    let sum = 0;
    let averageMark = 0;
    let length = 0;
    if (marks.length > 5) {
        console.log("кол-во оценок больше 5");
        marks = marks.slice(0, 5);
    };
    for (let i = 0; i < marks.length; i++) {
        console.log(sum);
        sum = marks[i] + sum;
    };
    length = marks.length;
    console.log(typeof length);
    console.log(typeof sum);
    averageMark = sum / length;
   
    return averageMark;
}

function calculateDrinkTask() {
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name, dateOfBirthday) {
    let today = new Date();
    ageUser = today.getFullYear() - dateOfBirthday.getFullYear();
    if (ageUser >= 18) {
        result = `Не желаете ли олд-фэшн, ${name}?`;
    } else {
        result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    };
    console.log(result)
    return result;
}