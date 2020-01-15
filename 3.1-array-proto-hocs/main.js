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

    let results = [
        {
            args: [],
            result: undefined
        }
    ];

    return function optimSum(...args) {
        // console.log(results[0].args);
        let result = results.find(
            function compareArr(elements) {
                console.log(args);
                return elements.args.every((value, index) => value === args[index]);
            });

        // console.log(result);

        if (result === "undefined") {         
        //    console.log("1");
            const sum = fn(args);
            results.push(
                {
                    args: args,
                    result: sum
                });

        } else {
            // console.log("2");     
            return result.result;
        }

        if (results.length === limit) {
            results = result.slice(1);
        };
        return sum;
    }
}

const limit = 5;
const mSum = memorize(sum, limit);
// console.log(mSum([[2, 5, 3],[2, 5, 3],[2, 5, 3]]));
console.log(mSum(10, 10, 10));
