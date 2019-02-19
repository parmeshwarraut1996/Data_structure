/******************************************************************************
 *  Execution       :   1. default node         cmd> node Palindrome.js 
 *                      2. if nodemon installed cmd> nodemon Palindrome.js
 * 
 *  Purpose         : To determine given string is palindrome or not.
 * 
 *  @description    
 * 
 *  @file           : Palindrome.js
 *  @overview       : Palindrome module to check whether string is palindrome or not.
 *  @module         : Palindrome - This is optional if expeclictly its an npm or local package
 *  @author         : Parmeshwar Raut
 *  @version        : 1.0
 *  @since          : 31-12-2018
 *
 ******************************************************************************/
class Node {
    constructor(value, next, prev) {
        this.value = value;
        this.prev = prev;
        this.next = next;
    }
}

/**
 * create class Deque
 */
class Deque {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    /**
     * 
     * function addFront(item) defines add element at front of queue
     */

    addFront(item) {
        const newNode = (item, null, this.tail);
        if (this.tail) {
            this.tail.next = newNode;
        }
        else {
            this.head = newNode;
        }
        this.tail = newNode;
    }
/**
 * 
 * function addRear(item) defines add element at rear of queue 
 */
    addRear(item) {
        const newNode = new Node(item, this.head, null);
        if (this.head) {
            this.head.prev = newNode;
        }
        else {
            this.tail = newNode;
        }
        this.head = newNode;
    }
    /**
     * remove element from front of queue
     */

    removeFront() {
        if (!this.tail) {
            return null;
        }
        let value = this.tail.value;
        this.tail = this.tail.prev;
        if (this.tail) {
            this.tail.next = null;
        }
        else {
            this.head = null;
        }
        return value;
    }
    /**
     * remove element from rear of queue
     */

    removeRear() {
        if (!this.head) {
            return null;
        }
        let value = this.head.value;
        this.head = this.head.next;

        if (this.head) {
            this.head.prev = null
        }
        else {
            this.tail = null;
        }
        return value;
    }
/**
 * return size of queue
 */
    size() {
        let counter = 0;
        let current = this.head;
        while (current) {
            counter++;
            current = current.next;
        }
        return counter;
    }
/**
 * if queue size is zero then queue is empty
 */
    isEmpty() {
        return this.size() < 1;
    }
    /**
     * return reverse of string 
     */

    print() {
        var current = this.head;
        var str = "";
        while (current.next !== null) {
            str += current.value;

            current = current.next;



        }
        str += current.value;

        var data = str;
        return data;
        // console.log(data);
    }

}
module.exports = {
    Deque
}