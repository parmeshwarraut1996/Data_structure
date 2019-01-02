
var util=require('util');
module.exports={
    isPrime(number) {
        if (number == 0 || number == 1) {
            return false;
        }
        for (let index = 2; index < number; index++) {
            if (number % index == 0) {
                return false;
            }

        }
        return true;
    },

    isAnagram(string1, string2) {
        string1 = string1 + "";
        string2 = string2 + "";
        if (string1.length != string2.length) {
            return false;
        }
        var arr = [];
        for (let index = 0; index < 36; index++) {
            arr[index] = 0;

        }
        for (let index = 0; index < string1.length; index++) {
            var ch = string1.charAt(index);
            if (ch >= 'a' && ch <= 'z') {
                var code = ch.charCodeAt(0);

                arr[code - 97]++;
            } else if (ch >= 'A' && ch <= 'Z') {
                var code = ch.charCodeAt(0);
                arr[code - 65]++;
            } else {
                var code = ch.charCodeAt(0);
                arr[code - 22]++;
            }
            ch = string2.charAt(index);
            if (ch >= 'a' && ch <= 'z') {
                var code = ch.charCodeAt(0);

                arr[code - 97]--;
            } else if (ch >= 'A' && ch <= 'Z') {
                var code = ch.charCodeAt(0);
                arr[code - 65]--;
            } else {
                var code = ch.charCodeAt(0);
                arr[code - 22]--;
            }


        }
        for (let index = 0; index < 36; index++) {
            if (arr[index] != 0) {
                return false;
            }
        }
        return true;
    },
    primeNoAnagram2D() {
        
   
    var arr = [];
    var array = [[" 0-100   "], ["100-200  "], ["200-300  "], ["300-400  "], ["400-500  "], ["500-600  "], ["600-700  "], ["700-800  "], ["800-900  "], ["900-1000 "]];
    for (let k = 2; k <= 1000; k++) {

        if (this.isPrime(k)) {//store the numbers that are prime in the range. 
            arr.push(k);
        }

    }
      
     var range1 = 100, k = 0;
    for (let i = 0; i < arr.length; i++) {//for comparing two prime are anagram or not.
        for (let j = i + 1; j < arr.length; j++) {
            if (this.isAnagram(arr[i], arr[j])) {//check two primes angram or not

                if (arr[i] <= range1) {//
                    if (arr[j] <= range1) {//store the two anagram in array
                        array[k].push(arr[i]);
                        array[k].push(arr[j]);
                    }
                } else {
                    range1 = range1 + 100;
                    k++;
                    if (arr[j] <= range1) {
                        array[k].push(arr[i]);
                        array[k].push(arr[j]);
                    }
                }

            }

        }
    }
    console.log(" Numbers are prime and anagram  = ");
    for (let i = 0; i < array.length; i++) {
        util.print("   [ ");
        for (let j = 0; j < array[i].length; j++) {
            util.print(array[i][j]);//for printing the number that are angaram and prime.
            if (j == 0) {
                util.print(" = ");
            } else {
                if (j != array[i].length - 1)
                    util.print(",")
            }


        }
        util.print("]");
        console.log();
    }
    console.log("\n");

},

   
}
