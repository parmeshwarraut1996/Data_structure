/******************************************************************************
 *  Execution       :   1. default node         cmd> node Calender.js 
 *                      2. if nodemon installed cmd> nodemon Calender.js
 * 
 *  Purpose         : Display days in month to take command line input month and year .
 * 
 *  @description    
 * 
 *  @file           : Calender.js
 *  @overview       : Calender module to Display days in month to take command line input month and year.
 *  @module         : Calender - This is optional if expeclictly its an npm or local package
 *  @author         : Parmeshwar Raut
 *  @version        : 1.0
 *  @since          : 31-12-2018
 *
 ******************************************************************************/
var utility = require("./Days.js");
month=+process.argv[2];
year=+process.argv[3];

var day = utility.dayOfWeek((month), (year));
console.log(day);
utility.display(month, day, year);