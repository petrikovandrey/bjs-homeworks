//task 1
function showSolutionsMessage(a, b, c) {
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    let result = getSolutions(a, b, c);
    console.log(`Значение дискриминанта: ${result.d}`);
    console.log(result.message);
}

function getSolutions(a, b, c) {
    "use strict";
    let d = 0,
        x1 = 0,
        x2 = 0,
        sqrtD = 0,
        arrX = [],
        result = {};

    d = b ** 2 - 4 * a * c;
    result.d = d;

    if (d < 0) {
        result.message = "Уравнение не имеет вещественных корней";
        return result;
    };

    sqrtD = Math.sqrt(d);

    if (d === 0) {
        x1 = (-b + sqrtD) / (2 * a);
        arrX.push(x1);
        result.message = `Уравнение имеет один корень X₁ = ${x1}`;

    } else if (d > 0) {
        x1 = (-b + sqrtD) / (2 * a);
        x2 = (-b - sqrtD) / (2 * a);
        arrX.push(x1);
        arrX.push(x2);
        result.message = `Уравнение имеет два корня. X₁ = ${x1}, X₂ = ${x2}`;
    };
    result.roots = arrX;
    return result;
}

//task 2
console.log(getAverageScore({
    algebra: [3, 3, 3],
    fizika: [1, 1, 1]
}));

function getAverageScore(data) {
    let sum = 0;

    for (let key in data) {
        sum = getAverageMark(data[key]);
        data[key] = sum;
        console.log(key + ": " + data[key]);
        sum += sum;
    };
    average = sum / Object.keys(data).length;
    data.average = average;
    console.log(data.average);
}

function getAverageMark(marks) {
    let sum = 0;

    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    };

    return sum / marks.length;
}
