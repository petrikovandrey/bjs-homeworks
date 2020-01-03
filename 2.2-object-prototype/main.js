function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;
}

function checkBirthday(birthday) {
    let date = new Date(birthday);
    let now = new Date();
    let diff = Math.floor(now.getTime() - date.getTime());
    let year = 1000 * 60 * 60 * 24 * 365;
    let age = diff / year;
   
    console.log(date);
    console.log(diff);
    console.log(year);
    console.log(age);
    return age >= 18;
}

function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;
}

function getAnimalSound(animal) {
    if (checkUndefined(animal)) {
        return null;
    };
    let sound = animal.sound;
    if (!checkUndefined(sound)) {
        return sound;
    };
}
function checkUndefined(param) {
    if (typeof param == "undefined") {
        return true;
    } else {
        return false;
    };
}

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {

    let sum = 0,
        total = 0;
    for (let key in marks) {
        sum = getAverage(marks[key]);
        marks[key] = sum;
        // console.log(key + ": " + marks[key]);
        total += sum;
    };
    marks.average = total / Object.keys(marks).length;
    let roundedAverage = Math.round(marks.average);
    console.log(roundedAverage);
    return roundedAverage;
}

function getAverage(mark) {
    let sum = 0;

    for (let i = 0; i < mark.length; i++) {
        sum += mark[i];
    };
    //console.log(sum / mark.length);
    return sum / mark.length;
}