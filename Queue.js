class Node {


    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class Queue {
    constuctor() {
        this.head = null;
        this.size = null;
    }

    enqueue(value) {

        var node = new Node(value);

        if (this.head == null) {
            this.head = node;
        } else {
            var current = this.head;
            while (current.next !== null) {


                current = current.next;
            }
            current.next = node;
        }
        this.size++;

    }

    dequeue() {
        if (this.isEmpty() == true)
            console.log("Queue is empty")
        else {

            var current = this.head;

            var temp = current.next;
            this.head = temp;
            var x = current.value;
            current = null;
        }
        this.size--;
        return x;
    }

    exit(ch) {
        if(ch==3)
        break;
    }

    isEmpty() {
        if (this.head == null) {
            return true;
        }
        return false;
    }

}

module.exports = {
    Queue
}