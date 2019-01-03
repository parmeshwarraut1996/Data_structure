/******************************************************************************
 *  Execution       :   1. default node         cmd> node BST.js 
 *                      2. if nodemon installed cmd> nodemon BST.js
 * 
 *  Purpose         : Obtain number of binary search tree from given user input number.
 * 
 *  @description    
 * 
 *  @file           : BST.js
 *  @overview       : BST module to Obtain number of binary search tree from given user input number.
 *  @module         : BST - This is optional if expeclictly its an npm or local package
 *  @author         : Parmeshwar Raut
 *  @version        : 1.0
 *  @since          : 31-12-2018
 *
 ******************************************************************************/

/*
 *readline module provides an interface for reading data from a Readable stream one line 
 */

var readline = require('readline');
var utility = require("./BinarySearchTree.js");
/**
 * @param {object} readline 
 * @var {object} userInput 
 */
function input() {
    var userInput = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    /**
     * Take user input to obtain numbers of binary search tree 
     */
    userInput.question('Enter the number of nodes = ', (node) => {
        /**
         * call method bst() to return numbers of binary search tree 
         */

        bst(node);
        /**
         * close userInput interface
         */
        userInput.close();


    });

    /**function for taking values and performing operation*
     * @var intoTwo is for 2*n
     * @var one is for 1+n;
     * 
     */

    function bst(node) {
        var value = parseInt(node);
        /**
         * Get integer value input and multiply by 2
         */
        var num = 2 * value;
        /**
         * calculate factorial of that number 
         */
        num = utility.factorial(num);
        /**
         * add one in userinput value
         */
        var a = value + 1;
        /**
         * calculate factorial of recent number
         */
        a = utility.factorial(a);

        /**
         * assign userInput value to another variable n 
         */
        var n = value;
        /**
         * calculate factorial of user input number
         */
        n = utility.factorial(n)

        /**
         * calculate numbers of binary search tree  are obtain.
         */
        var result = num / (a * n);
        /**
         * Display result
         */
        console.log('Number of binary seach tree = ' + result);
    }
} input();