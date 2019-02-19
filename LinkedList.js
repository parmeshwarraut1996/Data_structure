/*  class node for ever node in linked list*/

class Node {


    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

/*class containing all functions in of ordered list*/
class Linkedlist {
    constuctor() {
        this.head = null;
        this.size = null;
    }
    /**r
     * reterns index of a particluar value
     */

    indexOf(value) {
        var count = 0;
        var current = this.head;
        while (current.next !== null) {
            current = current.next;

            count = count + 1;
            if (current.value == value) {
                return count;


            }
        }
        console.log(count);
    }
    /**
     * searches the value in  particular list
     */
    search(value) {
        var current = this.head;
        while (current.next !== null) {
            current = current.next;
            if (current.value == value)
                return true;
        }

        return false;
    }
    /**
     * removes the value from the list
     */
    remove(value) {
        var current = this.head;
        var prev = null;

        // iterate over the list 
        while (current != null) {
            /* comparing element with current 
             element if found then remove the 
            and return true */
            if (current.value == value) {
                if (prev == null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size--;
                return current.value;
            }
            prev = current;
            current = current.next;
        }
        return -1;
    }
    /**
     * remove s value at the end of the list
     */

    pop() {
        var current = this.head;
        var prev = this.head;
        while (current.next !== null) {
            prev = current;
            current = current.next;
            break;


        }
        prev.next = null;
    }


    /*checking for values in the ordered list and placing the node According to it*/

    orderedAdd(value) {
        var node = new Node(value);

        if (this.head == null) { //adds value if the there is no element in the list
            this.head = node;
        } else {
            var traverse = this.head;
            if (this.head.value > node.value) //inserting node by checking lowest of two 
            {
                this.head = node;
                node.next = traverse;
            }
            if (this.head.value < node.value) {
                var temp = this.head; //for travesal


                while (traverse.next != null) {
                    if (traverse.value < node.value) {
                        temp = traverse;
                    }

                    traverse = traverse.next;


                }
                /***
                 travese till the last node in the list and comparing each element
                */

                if (traverse.value < node.value) {


                    temp = traverse;
                }


                var temp1 = temp.next;
                temp.next = node;
                node.next = temp1;

                /*class containing all functions in of ordered list*/

            }
        }
    }
    print() {
        var current = this.head;
        var str = "";
        while (current.next !== null) {
            str += current.value;

            current = current.next;



        }
        str += current.value;

        var data = str;

        var arr = data.split(' ');
        var d = arr.map(Number);
        console.log(d);
        var fs = require('fs');
        /**
         * fs module is used for writing in the particular file
         */

        fs.writeFileSync('IntegerFile', d, 'utf8')

        console.log("Updated File.");

    }

}

module.exports = {
    Linkedlist
}