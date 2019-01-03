/******************************************************************************
 *  Execution       :   1. default node         cmd> node Palindrome.js 
 *                      2. if nodemon installed cmd> nodemon Palindrome.js
 * 
 *  Purpose         : To determine given string is palindrome or not.
 * 
 *  @description    
 * 
 *  @file           : Palindrome.js
 *  @overview       : Palindrome module to check whether string is palindrome or not.
 *  @module         : Palindrome - This is optional if expeclictly its an npm or local package
 *  @author         : Parmeshwar Raut
 *  @version        : 1.0
 *  @since          : 31-12-2018
 *
 ******************************************************************************/

/*
 *readline module provides an interface for reading data from a Readable stream one line 
 */
var readline = require('readline');
var list = require("./Deque.js");

/**
 * @param {object} redline 
 * @var {object} userInput 
 */
var userInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function input() {

    const d = new list.Deque();
    var arr = new Array();
    var answer = '';
    var flag = true;
    var i;
    var rev;
    userInput.question('Enter string to check is palindrome or not = ', (str) => {
        toArray(str);
        userInput.close();
    });
    /**
     * split user input string in array 
     */
    function toArray(str) {
        answer = str;
        /**
         * split string in array
         */
        arr = answer.split('');
        /**
         * find out lenth of array
         */
        var len = arr.length;
        /**
         * display input string 
         */
        console.log("Input String = " + answer);
        /**
         * call add() method which return reverse of string
         */
        reverse(arr, len);
    }
    function reverse(arr, len) {
        for (i = 0; i < len; i++) {
            d.addRear(arr[i])
        }
        /**
         * invoke print() method of deque data structure to print string in reverse order
         */
        rev = d.print();
        console.log("Reverse string = " + rev);
        /**
         * pass that reverse string to palindrome() method for checking palindrome or not. 
         */
        var result = isPalindrome(rev);


    }

    function isPalindrome(rev) {
        /** 
         * check entered string is palindrome or not 
        */
        if (rev === answer) {
            //if both string is equal then print entered string is palindrome

            console.log("Given String is Palindrome");

        }
        else {
            //if both string is not equal then print entered string is not palindrome
            console.log("Given string is not palindrome ");

        }
    }
}input();
