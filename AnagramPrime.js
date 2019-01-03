
/******************************************************************************
 *  Execution       :   1. default node         cmd> node Anagram.js 
 *                      2. if nodemon installed cmd> nodemon Anagram.js
 * 
 *  Purpose         : Print anagram numbers and those also prime numbers in between given range.  
 * 
 *  @description    
 * 
 *  @file           : Anagram.js
 *  @overview       : Anagram module to print anagram numbers and those are prime numbers. 
                      money and maintain the cash balance.
 *  @module         : Anagram - This is optional if expeclictly its an npm or local package
 *  @author         : Parmeshwar Raut
 *  @version        : 1.0
 *  @since          : 02-01-2019
 *
 ******************************************************************************/
var util = require('util');
module.exports = {
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
            /**
             * store the numbers that are prime in the range.
             */
            if (this.isPrime(k)) {
                arr.push(k);
            }

        }

        var range1 = 100, k = 0;
        /**
         * execute loop upto prime array lenth numbers are prime and anagram .
         */
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                /**
                 * check numbers are prime and angram or not
                 */
                if (this.isAnagram(arr[i], arr[j])) {

                    if (arr[i] <= range1) {
                        if (arr[j] <= range1) {
                            /**
                             * store the prime and  anagram elements in array
                             */
                            array[k].push(arr[i]);
                            array[k].push(arr[j]);
                        }
                    } else {
                        /**
                         * print range like 0-100,101-200 ..901-1000
                         */
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
                /**
                 *  print numbers that are angaram and prime.
                 */
                util.print(array[i][j]);
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
