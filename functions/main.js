//task 1
"use strict";
    
function showSolutionsMessage(a, b, c) {
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    let result = getSolutions(a, b, c);
    console.log(`Значение дискриминанта: ${result.d}`);
    if (result.d < 0) {
        console.log("равнение не имеет вещественных корней");
    } else if (result.d === 0) {
        console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
    } else {
        console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
    };
}

function getSolutions(a, b, c) {

    let d = 0,
        x1 = 0,
        x2 = 0,
        sqrtD = 0,
        arrX = [],
        result = {};

    d = b ** 2 - 4 * a * c;
    result.d = d;
 
    if (d < 0) {
        return result;
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
    result.roots = arrX;
    return result;
}

//task 2
console.log(getAverageScore({
    maths: [3, 3, 5],
    english: [4, 4, 5],
    physics: [4, 4, 5]
}));

function getAverageScore(data) {
    let sum = 0,
        total = 0;
    for (let key in data) {
        sum = getAverageMark(data[key]);
        data[key] = sum;
        console.log(key + ": " + data[key]);
        total += sum;
    };
    // data.average = Math.round(total / Object.keys(data).length);
    data.average = total / Object.keys(data).length;
    
    console.log(data.average);
    return data;
}

function getAverageMark(marks) {
    let sum = 0;

    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    };
    console.log(sum / marks.length);
    return sum / marks.length;
}
