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


const d = new list.Deque();
var arr = new Array();
var answer = '';
var flag = true;
var i;
var rev;
userInput.question('Enter string to check  is palindrome or not = ', (str) => {
    toArray(str);
});
function toArray(str) {


    answer = str;

    arr = answer.split('');
    var len = arr.length;
    console.log("Input String = "+answer);

   add(arr, len);
}
function add(arr, len) {
    for (i = 0; i < len; i++) {
        d.addRear(arr[i])
    }
    rev = d.print();
    console.log("Reverse string = "+rev);
    var result = isPalindrome(rev);


}

function isPalindrome(rev) {
    if (rev === answer) {
        console.log("Given String is Palindrome");

    }
    else {
        console.log("Given string is not palindrome ");

    }





}
