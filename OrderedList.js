/******************************************************************************
 *  Execution       :   1. default node         cmd> node OrderedList.js 
 *                      2. if nodemon installed cmd> nodemon OrderedList.js
 * 
 *  Purpose         : Take list of numbres from file, arrange in ascending order in linked list.
 *                    Take user input to find emlement in file, if found then pop up else add  element in file at 
 *                    its proper location
 * 
 *  @description    
 * 
 *  @file           : OrderedList.js
 *  @overview       : OrderedList module to Take list of numbres from file, arrange in ascending order in linked list.
 *                    Take user input to find emlement in file, if found then pop up else add  element in file at
 *                    its proper location.
                      money and maintain the cash balance.
 *  @module         : OrderedList - This is optional if expeclictly its an npm or local package
 *  @author         : Parmeshwar Raut
 *  @version        : 1.0
 *  @since          : 31-12-2018
 *
 ******************************************************************************/

/*
 *readline module provides an interface for reading data from a Readable stream one line 
 */

var readline = require('readline');

var list = require('./LinkedList.js')
/*fs is a system module used to read data from the file*/
var fs = require('fs');


/**
 * @param {object} redline 
 * @var {object} prompts 
 */
var prompts = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var a;
var data = fs.readFileSync('IntegerFile', 'utf8')
/*split used to convert string into array*/

var a = data.split(' ');
//console.log(a);
var arr = a.map(Number);
console.log(arr);
const ll = new list.Linkedlist();
for (i = 0; i < arr.length; i++) {
    ll.orderedAdd(arr[i]);
}


{
    prompts.question('Enter number to search = ', (value) => {
        ifnot(value);
    });
}



function ifnot(value) {

    console.log(ll.search(value));
    if (ll.search(value) == true) {
        console.log('Already in the list  ');
        console.log("So removed element from list");
        ll.remove(value);
      
        console.log();
        ll.print();
    }
    else {
        console.log('Not in the list');
        ll.orderedAdd(value);
        console.log('Updated list ');
        console.log();
        ll.print();
    }
    var data = "";
   

}