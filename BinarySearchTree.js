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
 *  @since          : 02-01-2019
 *
 ******************************************************************************/
module.exports = {

    /**
     * method returns factorial of number;
     */
    factorial(a) {
        var fact = 1;

        for (var i = 1; i <= a; i++) {
            /**
             * calculate factorial of number
             */
            fact = fact * i;

        }
        return fact;


    }
}
