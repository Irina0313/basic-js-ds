const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
class LinkedList {
  constructor() {
    this.head = null
  }
  add(value) {
    //let node = new ListNode(value)
    this.head = value;
  }
  removeAt(position) {
    let current = this.head;
    if (position === 0) {
      this.head = current.next;
    } else {
      let prev = null;
      let index = 0;

      while (index < position) {
        prev = current;
        current = current.next;
        index++;
      }

      prev.next = current.next;
    }
    return current.value;
  }



  remove(element) {
    this.removeAt(this.indexOf(element));
  }

  indexOf(element) {
    let current = this.head;
    let index = 0;

    while (current) {
      if (current.value === element) {
        return index;
      }

      current = current.next;
      index++;
    }

    return -1;
  }
}

//let list = new LinkedList();
function removeKFromList(l, k) {
  //console.log(l);

  //console.log(current === k)

  //let prev = '';

  let current = l;
  let index = 0;

  while (current.value) {
    if (current.value === k) {
      //console.log(current.value)
      return removeAt(index);
    }
    current = current.next;
    index++;
  }

  function removeAt(position) {
    console.log('dddd', position)

    if (position < 0 || position >= this.length) {
      return null;
    }

    let current = l;

    if (position === 0) {
      current = current.next;
    } else {
      let prev = null;
      let index = 0;

      while (index < position) {
        prev = current;
        current = current.next;
        index++;
      }

      prev.next = current.next;
    }

    this.length--;
    if (current.value === k) {
      //console.log(current.value)
      return removeAt(index);
    } else {
      return current;
    }

  }
  //console.log('kk', l)
}






module.exports = {
  removeKFromList
};
