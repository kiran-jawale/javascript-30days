// Linked List
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    append(value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
        return;
      }
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  
    removeLast() {
      if (!this.head) {
        return;
      }
      if (!this.head.next) {
        this.head = null;
        return;
      }
      let current = this.head;
      while (current.next.next) {
        current = current.next;
      }
      current.next = null;
    }
  
    display() {
      if (!this.head) {
        console.log('List is empty');
        return;
      }
      let current = this.head;
      while (current) {
        console.log(current.value,' ');
        current = current.next;
      }
      console.log();
    }
  }
  
  const linkedList1 = new LinkedList();
  const linkedList2 = new LinkedList();
  linkedList2.append(10);
  linkedList2.append(20);
  linkedList2.display(); // 10 20
  linkedList2.removeLast();
  linkedList2.append('A');
  linkedList2.append('B');
  linkedList2.display(); // 10 A B
  
  // Stack
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
        console.log('Stack is empty!');
        return null;
      }
      return this.items.pop();
    }
  
    peek() {
      if (!this.isEmpty()) {
        return this.items[this.items.length - 1];
      }
      return null;
    }
  }
  
  const stack = new Stack();
  stack.push(10);
  stack.push(20);
  stack.push(30);
  console.log(stack.peek()); // 30
  stack.pop();
  console.log(stack.peek()); // 20
  
  function reverseString(str) {
    const stack = new Stack();
    for (let char of str) {
      stack.push(char);
    }
    let reversed = '';
    while (!stack.isEmpty()) {
      reversed += stack.pop();
    }
    return reversed;
  }
  
  const string = 'javascript';
  const reversedString = reverseString(string);
  console.log(reversedString);
  
  // Queue
  class Queue {
    constructor() {
      this.items = [];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    enqueue(item) {
      this.items.push(item);
    }
  
    dequeue() {
      if (!this.isEmpty()) {
        return this.items.shift();
      }
      return null;
    }
  
    front() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items[0];
    }
  }
  
  const queue = new Queue();
  queue.enqueue(10);
  queue.enqueue(20);
  console.log(queue.front());
  console.log(queue.dequeue());
  console.log(queue.front());
  
  class PrinterQueue {
    constructor() {
      this.queue = new Queue();
    }
  
    addJob(job) {
      this.queue.enqueue(job);
    }
  
    processNextJob() {
      const job = this.queue.dequeue();
      if (job === null) {
        console.log('No jobs in queue');
      } else {
        console.log('Processing');
        console.log(job);
      }
    }
  }
  
  const printerQueue = new PrinterQueue();
  printerQueue.addJob('JOB1');
  printerQueue.addJob('JOB2');
  printerQueue.addJob('JOB3');
  printerQueue.processNextJob(); // JOB1
  printerQueue.processNextJob(); // JOB2
  printerQueue.processNextJob(); // JOB3
  printerQueue.processNextJob(); // No jobs in queue
  
  // Tree
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
      let current = this.root;
      while (true) {
        if (newNode.value < current.value) {
          if (!current.left) {
            current.left = newNode;
            return;
          }
          current = current.left;
        } else {
          if (!current.right) {
            current.right = newNode;
            return;
          }
          current = current.right;
        }
      }
    }
  
    inorderTraverse() {
      function _inorder(node) {
        if (node) {
          _inorder(node.left);
          console.log(node.value, ' ');
            _inorder(node.right);
        }
      }
      _inorder(this.root);
    }
  }
  
  const binaryTree = new BinaryTree();
  binaryTree.insert(10);
  binaryTree.insert(20);
  binaryTree.insert(30);
  binaryTree.insert(15);
  binaryTree.insert(25);
  binaryTree.inorderTraverse();
  
  // Graph with BFS and shortest path
  class Graph {
    constructor() {
      this.vertices = {};
    }
  
    addVertex(vertex) {
      if (!this.vertices[vertex]) {
        this.vertices[vertex] = [];
      }
    }
  
    addEdge(vertex1, vertex2) {
      this.addVertex(vertex1);
      this.addVertex(vertex2);
      this.vertices[vertex1].push(vertex2);
      this.vertices[vertex2].push(vertex1);
    }
  
    bfs(startVertex) {
      const visited = {};
      const queue = [startVertex];
      visited[startVertex] = true;
  
      while (queue.length > 0) {
        const currentVertex = queue.shift();
        console.log(currentVertex, ' ');
  
        for (const neighbor of this.vertices[currentVertex]) {
          if (!visited[neighbor]) {
            visited[neighbor] = true;
            queue.push(neighbor);
          }
        }
      }
    }
  
    shortestPath(startVertex, endVertex) {
      const visited = {};
      const queue = [[startVertex, [startVertex]]];
      visited[startVertex] = true;
  
      while (queue.length > 0) {
        const [currentVertex, path] = queue.shift();
        if (currentVertex === endVertex) {
          return path;
        }
  
        for (const neighbor of this.vertices[currentVertex]) {
          if (!visited[neighbor]) {
            visited[neighbor] = true;
            queue.push([neighbor, [...path, neighbor]]);
          }
        }
      }
  
      return null;
    }
  }
  
  const graph1 = new Graph();
  const graph2 = new Graph();
  graph2.addVertex('a');
  graph2.addVertex('b');
  graph2.addEdge('a', 'b');
  graph2.addEdge('c', 'd');
  graph2.addEdge('b', 'c');
  graph2.addEdge('e', 'f');
  graph2.addEdge('g', 'h');
  graph2.addEdge('a', 'z');
  graph2.addEdge('b', 'y');
  graph2.addEdge('d', 'z');
  
  graph2.bfs('a');
  const start = 'y';
  const end = 'd';
  const shortestPath1 = graph2.shortestPath(start, end);
  
  if (shortestPath1) {
    console.log(`Shortest path from ${start} to ${end}: ${shortestPath1}`);
  } else {
    console.log(`No path found between ${start} and ${end}`);
  }