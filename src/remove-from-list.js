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
    this.head = null;
  }
  add(elem) {
    this.head = elem;
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

let list = new LinkedList();
function removeKFromList(l, k) {
  let elem = l;
  if (l.value === k) {

    elem = l.next;

  }

  console.log('l', elem)
  list.add(elem);
  console.log('1', list.indexOf(k))

  function del() {
    if (list.indexOf(k) != -1) {
      list.remove(k);
      if (list.indexOf(k) != -1) {
        del();
      }
    }
    return elem;

  }
  return del();

}






module.exports = {
  removeKFromList
};
