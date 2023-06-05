import LinkedListNode from "./linkedListNode.js";
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  isEmpty() {
    return this.length === 0;
  }

  size() {
    return this.length;
  }

  toArray() {
    const array = [];
    let current = this.head;
    while (current) {
      array.push(current.value);
      current = current.next;
    }
    return array;
  }

  toString() {
    return this.toArray().join();
  }

  push(value) {
    const node = new LinkedListNode(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return value;
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    } else {
      let current = this.head;
      let previous = null;
      while (current.next != null) {
        previous = current;
        current = current.next;
      }
      if (previous == null) {
        this.head = null;
        this.tail = null;
      } else {
        this.tail = previous;
        this.tail.next = null;
      }
      this.length--;
      return current.value;
    }
  }
}

export default LinkedList;
