function sleep(milliseconds) {
    let e = new Date().getTime() + milliseconds;
    while (new Date().getTime() <= e) { }
}

function sum(...args) {
    // Замедление на половину секунды.
    sleep(500); // Можно использовать другое значение замедления.
    return args.reduce((sum, arg) => {
        return sum += +arg;
    }, 0);
}

function compareArrays(arr1, arr2) {
    if (arr1.length != arr2.length) {
        return false;
    }
    return arr1.every((value, index) => value === arr2[index]);

}

console.log(compareArrays([8, 9], [6]));
console.log(compareArrays([8, 10], [6, 1]));
console.log(compareArrays([8, 1, 2], [8, 1, 2]));

function memorize(fn, limit) {
  
    return fn;
}

const mSum = memorize(sum,5);
console.log(mSum(2,5,3));
console.log(mSum(10,10,10));
