/******************************************************************************
 *  Execution       :   1. default node         cmd> node BalanceParenthesis.js 
 *                      2. if nodemon installed cmd> nodemon BalanceParenthesis.js
 * 
 *  Purpose         : Read the expression and ensure parentheses must appear in a balanced fashion or not.
 * 
 *  @description    
 * 
 *  @file           : BalanceParenthesis.js
 *  @overview       : BalanceParenthesis module to read the expression and ensure parentheses must appear in a balanced fashion or not.
                      money and maintain the cash balance.
 *  @module         : BalanceParenthesis - This is optional if expeclictly its an npm or local package
 *  @author         : Parmeshwar Raut
 *  @version        : 1.0.
 *  @since          : 29-12-2018.
 *
 ******************************************************************************/
/** 
*readline module provides an interface for reading data from readable stream one line

*/
var readline = require('readline');
var x=require('./BalanceExp.js');
var userInput = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    });

function input() {
/**
 * take user input as expression
 */
    userInput.question(" Enter expression = ", (exp) => {
        x.isBalance(exp);
        userInput.close();//close userInput interface
    });

} input();