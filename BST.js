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

var userInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

userInput.question('Enter the number of nodes = ', (node) => {

    bst(node);


});

/**function for taking values and performing operation*
 * @var intoTwo is for 2*n
 * @var one is for 1+n;
 * 
 */

function bst(node) {
    var value = parseInt(node);
    var num = 2 * value;
    num = utility.factorial(num);
    
    var a = value + 1;
    
    a = utility.factorial(a);
    

    var n = value;
    n = utility.factorial(n)

   
    var result = num / (a * n);
    console.log('Number of binary seach tree = '+result);
}