/******************************************************************************
 *  Execution       :   1. default node         cmd> node Prime.js 
 *                      2. if nodemon installed cmd> nodemon Prime.js
 * 
 *  Purpose         : Print prime numbers from 0-1000 range.  
 * 
 *  @description    
 * 
 *  @file           : Prime.js
 *  @overview       : Prime module to print prime numbers from 0-1000.
 *  @module         : Prime - This is optional if expeclictly its an npm or local package
 *  @author         : Parmeshwar Raut
 *  @version        : 1.0
 *  @since          : 2-01-2019
 *
 ******************************************************************************/
/** 
*readline module provides an interface for reading data from readable stream one line

*/
var readline = require('readline');
var utility = require('./PrimeNumber.js');
var userInput = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);
var arr1=new Array();
userInput.question('Enter minimum value of range =', (min) => {
    userInput.question('Enter maximum value of range = ', (max) => {
        utility.range(min, max)
       // console.log(prime);
        
userInput.close();

    });

});

