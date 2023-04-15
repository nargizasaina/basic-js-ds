const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(){
    this.rootCase = null;
  }
   
  root() {
    return this.rootCase;
  }

  add(data) {
    this.rootCase = addWithin(this.rootCase, data);

    function addWithin(node, data) {
      if (!node)return new Node(data);
      
      if (node.data === data) return node;
    

      if (data < node.data) {
        node.left = addWithin(node.left, data);
      } else{
        node.right = addWithin(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return searchWithin(this.rootCase, data);

    function searchWithin(node, data) {
      if (!node) return false;

      if (node.data === data) return true;

      return data < node.data ?
        searchWithin(node.left, data) :
        searchWithin(node.right, data);
    }
  }

  find(data) {
    return findWithin(this.rootCase, data);

    function findWithin(node, data) {
      if (!node) return null;

      if (node.data === data) return node;

      if (data < node.data) {
        return findWithin(node.left, data);
      } else {
        return findWithin(node.right, data);
      }
    }
  }

  remove(data) {
    this.rootCase = removeNode(this.rootCase, data);

    function removeNode (node, value) {
      if (!node) return null;

      if (value < node.data) {
        node.left = removeNode(node.left, value);
        return node;
      } else if (node.data < value) {
        node.right = removeNode(node.right, value);
        return node;
      } else {
        if (!node.left && !node.right) return null;
      }

      if (!node.left) {
        node = node.right;
        return node;
      }

      if (!node.right) {
        node = node.left;
        return node;
      }

      let minRight = node.right;
      while (minRight.left) {
        minRight = minRight.left;
      }
      node.data = minRight.data;

      node.right = removeNode(node.right, minRight.data);

      return node;
    }
  }

  min() {
    if (!this.rootCase) return;

    let node = this.rootCase;
    while(node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.rootCase) return;

    let node = this.rootCase;
    while(node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};

// const bst = new BinarySearchTree();
// bst.add(2);
// bst.add(7);
// bst.add(1);
// bst.add(8);
// bst.add(4);
// bst.add(32);
// bst.add(12);
// bst.add(14);
// console.log(bst);
// console.log(bst.find(8));
// // console.log(bst.find(15));
// // console.log(bst.has(15));
// console.log(bst.root());