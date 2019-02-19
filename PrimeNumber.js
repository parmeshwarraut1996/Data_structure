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
var util=require('util');
module.exports = {

    range(min, max) {
        var flag;
        var k = 0;
        var primeNumber = new Array(max);
        for (var i = (min * 1) + 1; i < max; ++i) {
            flag = 0;
            for (var j = 2; j <= i / 2; ++j) {
                if (i % j == 0) {
                    flag = 1;
                    break;
                }
            }
            if (flag == 0) {
                primeNumber.push(i);
              //  k++;
            }



        }
        
      console.log(primeNumber.join(' '));
      //  return primeNumber;
        
    },
   
}