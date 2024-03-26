import Node from "./node.mjs";

class LinkedList {
  constructor() {
    this.headList = null;
  }
  append(value) {
    let newNode = new Node(value);
    let pointer = this.headList;
    if (this.headList === null) {
      return (this.headList = newNode);
    }
    while (pointer.nextNode !== null) {
      pointer = pointer.nextNode;
    }
    pointer.nextNode = newNode;
  }
  prepend(value) {
    const newNode = new Node(value);
    if (this.headList === null) {
      this.headList = newNode;
    }
    newNode.nextNode = this.headList;
    this.headList = newNode;
  }
  size() {
    let counter = 0;
    let pointer = this.headList;
    while (pointer !== null) {
      counter += 1;
      pointer = pointer.nextNode;
    }
    return counter;
  }
  head() {
    return this.headList;
  }
  tail() {
    if (this.headList !== null) {
      let pointer = this.headList;
      while (pointer.nextNode !== null) {
        pointer = pointer.nextNode;
      }
      return pointer;
    }
  }
  at(index) {
    if (this.headList !== null) {
      let pointer = this.headList;
      for (let i = 0; i < index; i++) {
        pointer = pointer.nextNode;
        if (pointer === null) {
          return "No node at the given index";
        }
      }
      return pointer;
    }
  }
  pop() {
    if (this.headList === null) {
      return "Linked list is already empty";
    } else if (this.headList.nextNode === null) {
      return (this.headList = null);
    }
    let cur = this.headList;

    let prev = null;
    while (cur.nextNode != null) {
      prev = cur;
      cur = cur.nextNode;
    }
    prev.nextNode = null;
  }
  contains(value) {
    if (this.headList === null) {
      return "List is empty";
    }
    let pointer = this.headList;
    while (pointer !== null) {
      if (pointer.value === value) {
        return true;
      }
      pointer = pointer.nextNode;
    }
    return false;
  }
  find(value) {
    if (this.headList === null) {
      return "List is empty";
    }
    let pointer = this.headList;
    let index = 0;
    while (pointer !== null) {
      if (pointer.value === value) {
        return index;
      }
      pointer = pointer.nextNode;
      index += 1;
    }
    return null;
  }
  toString() {
    if (this.headList === null) {
      return "List is empty";
    }
    let pointer = this.headList;
    let stringList = "";
    while (pointer !== null) {
      stringList += `( ${pointer.value} ) -> `;
      pointer = pointer.nextNode;
    }
    return (stringList += "null");
  }
  insertAt(value, index) {
    if (this.headList === null || index === 0) {
      return this.prepend(value);
    }

    const newNode = new Node(value);
    let pointer = this.headList;
    for (let i = 0; i < index - 1; i++) {
      pointer = pointer.nextNode;
      if (pointer === null) {
        return;
      }
    }
    const nextNode = pointer.nextNode;
    pointer.nextNode = newNode;
    newNode.nextNode = nextNode;
  }
  removeAt(index) {
    if (index !== undefined) {
      if (this.headList === null) {
        return "List is empty";
      }
      if (index === 0) {
        return (this.headList = this.headList.nextNode);
      }
      let cur = this.headList;
      let prev = null;
      for (let i = 0; i < index; i++) {
        prev = cur;
        cur = cur.nextNode;
        if (cur == null) return "There is no item for this index";
      }
      prev.nextNode = cur.nextNode;
    }
  }
}

const linkedList = new LinkedList();
linkedList.append("foo");
linkedList.append("zoo");
linkedList.append("baz");
linkedList.prepend("shoo");
linkedList.pop();
linkedList.insertAt("qoo", 2);
console.log(linkedList.at(2)); // Node { value: 'qoo', nextNode: Node { value: 'zoo', nextNode: null } }
console.log(linkedList.contains("foo")); // true
console.log(linkedList.find("shoo")); // 0
console.log(linkedList.toString()); // ( shoo ) -> ( foo ) -> ( qoo ) -> ( zoo ) -> null
