
const readline = require('readline');
const userInput = readline.createInterface(
    {

        /**
         * @param{object}readline
         * var {object} userInput
         */
        input: process.stdin,
        output: process.stdout
    });

var fs = require('fs');
var l = require('./link.js');
const ll = new l.link();
var f = fs.readFileSync('IntegerValue', 'utf8');
var arr = f.split(' ');
var data = arr.map(Number);
var len = data.length - 1;
for (i = 0; i <= len; i++) {
    ll.add(arr[i]);
}
console.log("list");

ll.printList();

{
userInput.question("Enter element to search = ", (element) => {
    notFound(element);


});}
function notFound(element) {

    console.log(ll.searchNum(element));
    var a = ll.searchNum(element);
    if (a=== element) {
        console.log("Element present in list ");
        ll.removeElement(element);
        console.log("Updated list -");
        ll.printList();


    }
    else {
        console.log("Element not in list ");
       ll.add(element);

                console.log("After adding new element in list  =");
        ll.printList();
    }
}
// // testing isEmpty on an empty list 
// // returns true 
// console.log(ll.isEmpty());

// // adding element to the list 
// ll.add(10);

// // prints 10 
// ll.printList();

// // returns 1 
// console.log(ll.size_of_list());

// // adding more elements to the list 
// ll.add(20);
// ll.add(30);
// ll.add(40);
// ll.add(50);

// // returns 10 20 30 40 50 
// ll.printList();

// // prints 50 from the list 
// console.log("is element removed ?" + ll.removeElement(50));

// // prints 10 20 30 40 
// ll.printList();

// // returns 3 
// console.log("Index of 40 " + ll.indexOf(40));

// // insert 60 at second positon 
// // ll contains 10 20 60 30 40 
// ll.insertAt(60, 2);

// ll.printList();

// // returns false 
// console.log("is List Empty ? " + ll.isEmpty());

// // remove 3rd element from the list 
// console.log(ll.removeFrom(3));

// // prints 10 20 60 40 
// ll.printList();