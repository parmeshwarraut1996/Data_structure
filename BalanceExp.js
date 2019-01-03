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
module.exports={
isBalance(value) {
    var stack = [];
    var expression = value.trim().toString().split('');
    for (var i = 0; i < expression.length; i++) {
        if (expression[i] === '(') {
            stack.push('(');
        }
        if (expression[i] === ')') {
            stack.pop(')');
        }
    }
    if (stack.length > 0) {
        console.log('Expression not balanced ');
    }
    else {
        console.log('Expression is balanced ');
    }

    console.log(stack);
}
}