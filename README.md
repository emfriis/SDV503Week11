# SDV503Week11

***I have no idea how to create text diagrams and the Markdown Cheatsheet was not remotely helpful in understanding how to :).

## Activity One - Data Structures in JavaScript
There are several kinds of data structures in JavaScript.

*Stacks* logically function as an array. Items are inserted or *pushed* to the top of the array, and removed or *popped* from the top of the array.
Alternatively, the stack order can be reversed, with *shift* and *unshift*, so items are inserted and removed instead from the bottom of the array.
Inserting or removing items from the bottom of the stack requires all subsequent items to be reindexed, so performance will decrease at a linear rate depending on the number of items in the list. Stacks adhere to the LIFO protocol.

In contrast to Stacks, *Queues* adhere to the FIFO protocol. Items are inserted to the top of the array with *unshift*, and removed from the bottom of the array with *pop*. Similarly to Stacks, Queues can be reversed with *push* and *shift*.

*Linked Lists* use nodes referencing other nodes to store items in sequence, rather than indexing each item. Every linked list begins with a first node called the *head*, and the last node is called the *tail*. Each node in the list references only the subsequent node in Singly-Linked Lists, and also reference the preceding node in Doubly-Linked Lists. Linked lists can functionally operate as both Stacks and Queues. To function as a Queue however, a Doubly-Linked List is required, as operations must occur at both the head and the tail. Linked Lists operate in constant time, as only references/pointers have to be shifted, compared to Stacks and Queues where operating on the top of the array requires the reindexing of subsequent items. Consequently however, searching a Linked List for an item will take linear time, as potentially each node will have to be sequentially checked, unlike using references in an array.

*Trees* function similarly to Linked Lists, but each node can point to more than one subsequent node.
Trees feature parent nodes that point to child nodes, wherein parent nodes can point to multiple child nodes, but child nodes can only have one parent node. 

*Graphs* function again similarly to Linked lists and Trees, but unlike with Trees, child nodes can have more than one parent node. Therefore, relationships can be more complex, as each node may be pointed to by multiple other nodes, while also pointing to multiple nodes.

*Hash-Tables* pair *keys* to *values*, storing each pair at a location in accordance with a *hash-function*. The hash function accepts a key and returns an address where the key/value pair are to be inserted and retrieved from. Ideally, each key will cause the hash function to return a different address, given that conflicts may cause data to be overwritten.


## Activity Two - Linked Lists in JavaScript

*Linked Lists* are a highly relevant kind of Data Structure within the architecture of JavaScript. Linked Lists store their items in seqeunce using nodes, with each subsequent node pointing only to the next (and the preceding item in the case of Doubly-Linked Lists). The first node of a Linked List is referred to as its *head*, and its last node as its *tail*. The last node will always point to *null*.

Effectively, each node is a JavaScript Object, with a property storing data, and a *next* property that can contain another nested object, which can contain another nested object and so on, allowing nodes to be stored sequentially, but wherein each node can only be accessed through its preceding node. 
                  
|HEAD| --> |DATA|NEXT| --> |DATA|NEXT| --> NULL

Insertion and removal in Linked Lists are accomplished by shifting around pointers. If a node is set to be pointed to by another node as well pointing to a subsequent node it appears in sequence and is inserted. If a node doesnt have any nodes pointing to it it doesn't appear in sequence and is removed.

Searching through the list requires you to go through each node in sequence, going through the reference to each node in the next property of its preceding node.

The basic functionalities of linked lists (add to head, remove from head, search for value at index) will follow the approximate syntax of:

class linkedList {

    Create your linked list with a head property

    add(value) {
        Create a new node storing the given value
        Point the new node to the current head node
        Point the head to the new node
    }

    remove() {
        Check if the list is empty
            Return undefined
        Point the head to the node preceding the current head node
    }

    search(index) {
        Check if the index is positive {
            Create a pointer variable to point at nodes
            Create a location variable to check the index
            Until the end of the list or until you reach the given index {
                Point pointer variable to the next node
                Increment the location variable
            }
            Return the data of the current node unless current is null, then return undefined
        } Else
            Return undefined
    }
}

The Advantages of Linked Lists are:
1. Constant time complexity for insertion and removal.
2. Can be used to easily implement stacks and queues.

The Disadvantages of Linked Lists are:
1. Linear time complexity for traversing the list.
2. Increased memory usage from method of storage, even so for doubly-linked lists.

One applications of linked lists in the real world are image viewers, music players, and similar programs that want items to be linked by previous and next.

## Activity Three - Recursion in JavaScript

*Recursive Functions* refer to functions that call themselves as a part of their execution. These functions require a breaking if statement that tells the function at what point to stop recurring itself, otherwise, some Recursive Functions will infinitely call themselves which may cause technical difficulties. This if statement that prevents this is known as the *Base Case*.

Most recursive functions will follow the approximate syntax of:

function recFunction(argument) {

    If Base Case is met
        Then do something else

    Do something with argument
    Return recFunction with altered argument
}

The advantage of Recursion is that it often presents a more elegant solution for some problems within JavaScript, being more easy to visualize, and removing the potential need for nested loops. Additionally, using recursion can reduce time complexity. However, recursion is usually slower than an iterative approach, and can potentially overwhelm the call stack with excessive memory use.

Recursion is useful for accessing from Linked Lists, Trees, and Graphs, removing the need for an excessive and illegible mass of iterative code.

One application of recursion in the real world is Quickort, an efficient sorting algorithm, which uses recursion to sort sub-arrays in a way that uses very little memory and on average has logarithmic time complexity, but can have worst cases with quadratic time complexity.