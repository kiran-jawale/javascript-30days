function traverseTree(node, option = "inorder") {
    const sequences = {
      preorder: [logNode, traverseLeft, traverseRight],
      inorder: [traverseLeft, logNode, traverseRight],
      postorder: [traverseLeft, traverseRight, logNode],
    };
  
    if (!sequences[option]) {
      console.log("Invalid option");
      return;
    }
  
    const sequence = sequences[option];
  
    function traverse(node) {
      if (node === null) {
        return;
      }
  
      for (const func of sequence) {
        func(node);
      }
    }
  
    traverse(node);
  }
  
  function traverseLeft(node) {
    traverseTree(node.left);
  }
  
  function traverseRight(node) {
    traverseTree(node.right);
  }
  
  function logNode(node) {
    console.log(node.data);
  }
  
  class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  const root = new Node("1");
  const node2 = new Node("2");
  const node3 = new Node("3");
  const node4 = new Node("4");
  const node5 = new Node("5");
  const node6 = new Node("6");
  const node7 = new Node("7");
  root.left = node2;
  root.right = node3;
  root.left.left = node4;
  root.left.right = node5;
  node3.left = node6;
  node3.right = node7;
  
  traverseTree(root, "inorder");