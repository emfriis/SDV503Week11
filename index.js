function number(num) { // Factorial without recursive function.
    let total = 1;
    for (let n = num; n > 1; n--) {
        total = total * n;
    }
    return total;
};

console.log(number(5));

function factorial(n) {
    if (n === 1 || n === 0) {
        return 1
    };
    return n * factorial(n - 1);
};

console.log(factorial(5));
console.trace(factorial(5));

function countdown(dig) {
    if (dig === 1 || dig < 1) {
        return 1
    };
    console.log(dig);
    return countdown(dig - 1);
}

console.log(countdown(5));




class Node {
    
    constructor( data = null ) { // Default is null.
        this.data = data;
        this.next = null; // By default, each node will point to nothing.

    }

}

class LinkedList {
    
    constructor() {
        this.head = new Node(); // Construct head node whenever an instance of LinkedList is created.
    }

    append( item ) {
        let current = this.head;
        let newNode = new Node();
        while( current.next !== null ) { // Iterate over each node until we reach the last one.
            current = current.next
        }
        current.next = newNode;
        return this.display();
    }

    remove( item ) {}

}

let myLinkedList = new LinkedList();

// Whenever we create an instance of our LinkedList class, the constructor executes and it create a head node with both data and next as null. 
// Then we use its append method to insert items into this list.

// A linked list is nothing more than a objects nested deeply inside each each other. 
// Each node object in the list has a 'next' property, which is a reference to the next node object.
// Thereby, while you would access the third element in an array with 'arr[2]', 
// The third element in a linked list 

