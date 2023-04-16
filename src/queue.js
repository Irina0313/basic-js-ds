const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }



  getUnderlyingList() {
    let current = this.head;
    //current = current.next;
    return current;
  }

  enqueue(value) {
    const node = new ListNode(value);

    if (this.head) { // if the first Node exitsts
      this.tail.next = node; // inserts the created node after the tail of our Queue
      this.tail = node; // now the created node is the last node
    } else { // if there are no nodes in the Queue
      this.head = node; // the created node is a head 
      this.tail = node // also the created node is a tail in Queue because it is single.
    }

    this.length++; // increases the length of Queue by 1
  }

  dequeue() {
    const current = this.head; // saves the link to the head which we need to remove
    this.head = this.head.next; // moves the head link to the second Node in the Queue
    this.length--; // decreaments the length of our Queue

    return current.value; // returns the removed Node's value
  }
}
//const list = new ListNode(x);
const queue = new Queue();


module.exports = {
  Queue
};
