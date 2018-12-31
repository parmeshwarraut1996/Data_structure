var readline = require('readline');
var rl = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);

rl.question('Please enter the minimum number of the range: ', (answer) => {
    rl.question('please enter the maximum number of the range: ', async (answer2) => {
        var primeNumber = await EvaluatePrimeNumber(answer, answer2)
        var lengthOFArray = primeNumber.length;
        var primeNumberRep = await primeNumberRepresentation(primeNumber, answer);
        for (var o = 0; o < primeNumberRep.length; o++) {
            console.log(primeNumberRep[o].join(' '));
        }
        rl.close();
    })
})

var EvaluatePrimeNumber = function (minRange, maxRange) {
    return new Promise(function (resolve, reject) {
        try {
            var flag;
            var k = 0;
            var primeNumber = new Array(maxRange);
            for (var i = (minRange * 1) + 1; i < maxRange; ++i) {
                flag = 0;
                for (var j = 2; j <= i / 2; ++j) {
                    if (i % j == 0) {
                        flag = 1;
                        break;
                    }
                }
                if (flag == 0) {
                    primeNumber[k] = i;
                    k++;
                }
            }
            resolve(primeNumber);
        } catch (error) {
            reject(error)
        }
    })
}

var primeNumberRepresentation = function (arrData, minRan) {
    var val = 100;
    if (minRan < 100) {
        console.log("1-100 = ");

        val = 100;
    }
    else if (minRan < 200) {
        console.log("101-200 =");
        val = 200;
    }
    else if (minRan < 300) {
        console.log("201-300 =");

        val = 300;
    }
    else if (minRan < 400) {
        console.log("301-400 =");

        val = 400;
    }
    else if (minRan < 500) {
        console.log("401-500");

        val = 500;
    }

    else if (minRan < 600) {
        console.log("501-600");

        val = 600;
    }
    else if (minRan < 700) {
        console.log("601-700");

        val = 700;
    }
    else if (minRan < 800) {
        console.log("701-800");

        val = 800;
    }
    else if (minRan < 900) {
        console.log("800-900");

        val = 900;
    }
    var arrOne = new Array();
    var arrTwo = new Array();
    let j = 0;
    let len = parseInt(arrData.length - 1)
    for (let p = 0; p < arrData.length; p++) {
        if (arrData[p] < val) {
            arrOne[j] = arrData[p];
            j++;
        }
        if (arrData[p] > val) {
            p--;
            val = val + 100;
            arrTwo.push(arrOne);
            arrOne = [];
            j = 0;
        }
        if (p === len) {
            arrTwo.push(arrOne);
        }
    }
    return arrTwo;
}