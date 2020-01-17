function sleep(milliseconds) {
    let e = new Date().getTime() + milliseconds;
    while (new Date().getTime() <= e) { }
}

function sum(...args) {
    // Замедление на половину секунды.
    // sleep(500); // Можно использовать другое значение замедления.
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

    const results = [];

    return function (...args) {
        const result = results.find((value, index) => {
            return value.args[index] === args[index];
        });

        console.log(result);
        if (result) {
            console.log("I finded result");
            return result.result;
        };
        console.log("I will be make calculations");
        //const arg = args.join(', ');
        //console.log("in memorize " + arg);
        const calc = fn(arg);
        console.log("sum " + calc); 

        results.push(
            {
                args: args,
                result: calc
            });

        if (results.length - 1 > limit) {
            console.log("the memory is fully");
            results = result.slice(results.length - limit);
        };
        return calc;
    }
}


function testCase() {
    const arrayForTest =[
        [1,2,3], [1,2], [1,2,3], [1,2], [9,5,2,4] 
    ];
    const mSum = memorize(sum, 3);

    console.time("testCase");
    let i = 10;
    while (i) {
        i--;
        arrayForTest.forEach(item => mSum(item));
    }

    console.timeEnd("testCase");

}

testCase();