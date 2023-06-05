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
  shift() {
    if (this.isEmpty()) {
      return undefined;
    }
    const remove = this.head;
    this.head = this.head.next;
    if (this.head == null) {
      this.tail = null;
    }
    this.length--;
    return remove.value;
  }

  unshift(value) {
    const node = new LinkedListNode(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = this.head;
    } else {
      const temp = this.head;
      this.head = node;
      this.head.next = temp;
    }
    this.length++;
    return value;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    let current = this.head;
    let currentIndex = 0;
    while (currentIndex < index) {
      current = current.next;
      currentIndex++;
    }
    return current.value;
  }

  set(index, value) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    let current = this.head;
    let currentIndex = 0;
    while (currentIndex < index) {
      current = current.next;
      currentIndex++;
    }
    current.value = value;
    return value;
  }
  insert(index, value) {
    if (index < 0 || index > this.length) {
      return undefined;
    }

    if (index === 0) {
      return this.unshift(value);
    } else if (index === this.length) {
      return this.push(value);
    } else {
      let current = this.head;
      let currentIndex = 0;
      let previous = null;
      while (currentIndex < index) {
        previous = current;
        current = current.next;
        currentIndex++;
      }
      const node = new LinkedListNode(value, current);
      previous.next = node;
      this.length++;
      return value;
    }
  }
  remove(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    if (index === 0) {
      return this.shift();
    } else if (index === this.length - 1) {
      return this.pop();
    } else {
      let current = this.head;
      let currentIndex = 0;
      let prev = null;
      while (currentIndex < index) {
        prev = current;
        current = current.next;
        currentIndex++;
      }
      prev.next = current.next;
      this.length--;
      return current.value;
    }
  }
  indexOf(value) {
    let current = this.head;
    let currentIndex = 0;
    while (current != null) {
      if (current.value === value) {
        return currentIndex;
      }
      current = current.next;
      currentIndex++;
    }
    return -1;
  }

  includes(value) {
    return this.indexOf(value) !== -1;
  }

  fromArray(array) {
    array.forEach((value) => {
      this.push(value);
    });
    return this;
  }

  reverse() {
    let previous = null;
    let current = this.head;
    let next = null;
    while (current) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }
    this.tail = this.head;
    this.head = previous;
    return this;
  }
}

export default LinkedList;
