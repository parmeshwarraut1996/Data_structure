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
function display() {
    /**
     * require AnagramPrime.js
     */
    var util = require('../DataStructure_Programs/AnagramPrime');
    /**
     * call method primeNoAnagram2D() which gives anagram and prime numbers.
     */
    util.primeNoAnagram2D();
} display();//call function