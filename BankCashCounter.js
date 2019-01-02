/******************************************************************************
 *  Execution       :   1. default node         cmd> node BankCashCounter.js 
 *                      2. if nodemon installed cmd> nodemon BankCashCounter.js
 * 
 *  Purpose         : Implement module for people to either deposit or withdraw
                      money and maintain the cash balance.  
 * 
 *  @description    
 * 
 *  @file           : BankCashCounter.js
 *  @overview       : BankCashCounter module to implement module for people to either deposit or withdraw
                      money and maintain the cash balance.
 *  @module         : CashCounter - This is optional if expeclictly its an npm or local package
 *  @author         : Parmeshwar Raut
 *  @version        : 1.0
 *  @since          : 29-12-2018
 *
 ******************************************************************************/
/** 
*readline module provides an interface for reading data from readable stream one line

*/
var readline = require('readline');
var utility = require("./Queue.js");
var userInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const q = new utility.Queue();

bank();
/*function for recursive call for oprations to be performed*/
function bank() {

    console.log(' 1) Insert a person in Queue \n 2) Remove a person from Queue \n 3) Exit ');


    userInput.question('Enter  your choice = ', (ch) => {

        input(ch);

    });

    /*function to give user choice*/

    function input(ch) {
    this.amount = 100000;


        if (ch == 1) {

            console.log(' 1) Deposit  cash \n 2) Withdraw cash');
            userInput.question('Enter your choice = ', (c) => {
                if (c == 1) {

                    userInput.question('Enter amount to deposite = ', (amnt) => {
                        this.amount += parseInt(amnt);
                        console.log('Amount deposited = ' + this.amount);
                        q.enqueue(amnt);
                        bank();
                    });
                }
                if (c == 2) {

                    userInput.question('Enter amount to be  withdraw = ', (amnt) => {
                        if (this.amount < amnt) {
                            console.log('Insufficent balance');



                        } else {
                            this.amount -= parseInt(amnt);
                            console.log('Amount withdrawn = ' + amnt);
                            console.log("Remainig amount = "+this.amount);
                            q.enqueue(amnt);
                            bank();
                        }

                    });

                }



            });

        }



        if (ch == 2) {
            if (q.isEmpty() == true) {
                console.log(" !!!! Queue empty !!!!")
                bank();
            } else {
                q.dequeue();
                bank();
            }


        }


        if (ch == 3) {
            q.exit(ch);
            
            
        }
    }
}