class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new TreeNode(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this._insertNode(this.root, newNode);
    }
  }

  _insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this._insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this._insertNode(node.right, newNode);
      }
    }
  }

  inorderTraversal() {
    this._inorderTraversal(this.root);
  }

  _inorderTraversal(node) {
    if (node !== null) {
      this._inorderTraversal(node.left);
      console.log(node.value);
      this._inorderTraversal(node.right);
    }
  }
}
