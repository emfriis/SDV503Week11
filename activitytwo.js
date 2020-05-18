class LinkedList { // Creates a new instance of a linked list.
    
    constructor() { // Constructor for the linked list.
        this.head = null; // Sets the linked list's head property to null.
    };

    addToHead(data) { // Constructs a new node at the head.
        const newNode = { data }; // Creates a node object with a data property storing a value.
        newNode.next = this.head; // Sets the new node's next property to the linked list's current head property.
        this.head = newNode; // Sets the linked list's head property to the node.
    };

    removeFromHead() { // Removes the node at the head.      
        if (this.head === null) { // Checks if the linked list's head property is null.
            return undefined; // Returns undefined.
        };
        this.head = this.head.next; // Sets the linked list's head property to the successive node.   
    };

    findAtIndex(index) {
        if (index >= 0) { // Checks if the index is positive.
            let current = this.head; // Creates a pointer for traversing through the list.
            let i = 0; // Creates a tracker to check the place in the list.
            while (current !== null && i < index) { // Continues until the end of the list or the index.
                current = current.next; // Sets the pointer to the next node.
                i++; // Increments the tracker.
            };
            return current !== null ? current.data : undefined; // Returns the data at current index if it isn't null.
        } else { // Done if the index is negative.
            return undefined; // Returns undefined.
        };
    };

};

const myList = new LinkedList();
myList.addToHead('one');
myList.addToHead('two');
console.log(myList);

myList.removeFromHead();
console.log(myList);

myList.addToHead('two');
myList.addToHead('three');
myList.addToHead('four');
console.log(myList.findAtIndex(2));