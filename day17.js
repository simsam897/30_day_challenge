class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

let firstNode = new Node(10);
let secondNode = new Node(20);
firstNode.next = secondNode;

console.log(firstNode.value); // Output: 10
console.log(firstNode.next.value); // Output: 20

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addToEnd(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let lastNode = this.head;
    while (lastNode.next) {
      lastNode = lastNode.next;
    }
    lastNode.next = newNode;
  }

  removeFromEnd() {
    if (!this.head) {
      console.log("The list is empty.");
      return;
    }
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let secondLastNode = this.head;
    while (secondLastNode.next.next) {
      secondLastNode = secondLastNode.next;
    }
    secondLastNode.next = null;
  }

  display() {
    let currentNode = this.head;
    if (!currentNode) {
      console.log("The list is empty.");
      return;
    }
    let output = "";
    while (currentNode) {
      output += currentNode.data + " -> ";
      currentNode = currentNode.next;
    }
    output += "None";
    console.log(output);
  }
}

const linkedList = new LinkedList();
linkedList.addToEnd(1);
linkedList.addToEnd(2);
linkedList.addToEnd(3);
linkedList.display(); // Output: 1 -> 2 -> 3 -> None
linkedList.removeFromEnd();
linkedList.display(); // Output: 1 -> 2 -> None

class Stack {
  constructor() {
    this.items = [];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.items.length - 1];
  }

  size() {
    return this.items.length;
  }
}

function reverseString(inputString) {
  const stack = new Stack();

  for (let char of inputString) {
    stack.push(char);
  }

  let reversedString = "";
  while (!stack.isEmpty()) {
    reversedString += stack.pop();
  }

  return reversedString;
}

const inputString = "hello";
console.log("Original string:", inputString);
console.log("Reversed string:", reverseString(inputString));

class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(value) {
    this.queue.push(value);
  }

  dequeue() {
    return this.queue.shift();
  }

  front() {
    return this.queue[0];
  }
}

class PrinterQueue {
  constructor() {
    this.queue = new Queue();
  }

  addPrintJob(job) {
    this.queue.enqueue(job);
  }

  processPrintJob() {
    const job = this.queue.dequeue();
    if (job) {
      console.log(`Printing job: ${job}`);
    } else {
      console.log("No Jobs to Print");
    }
  }
}

const printerQueue = new PrinterQueue();
printerQueue.addPrintJob("Job 1");
printerQueue.addPrintJob("Job 2");
printerQueue.processPrintJob();
printerQueue.processPrintJob();
printerQueue.processPrintJob();

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    this._insertNode(this.root, newNode);
  }

  _insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this._insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this._insertNode(node.right, newNode);
      }
    }
  }

  inOrderTraversal() {
    this._inOrderTraversal(this.root);
  }

  _inOrderTraversal(node) {
    if (node) {
      this._inOrderTraversal(node.left);
      console.log(node.value);
      this._inOrderTraversal(node.right);
    }
  }
}

const tree = new BinaryTree();
tree.insert(5);
tree.insert(3);
tree.insert(7);
tree.insert(2);
tree.insert(4);
tree.inOrderTraversal(); // Output: 2 3 4 5 7
