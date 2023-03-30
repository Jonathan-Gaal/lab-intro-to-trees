class TreeNode {
  constructor(data = null) {
    this.data = data;
    this.children = [];
  }
}

class Tree {
  constructor(node) {
    this.root = node;
  }

  findNode(data) {
    // returns referenct to root if exists
    if (!this.root) {
      return null;
    } else {
      return this.root;
    }
    // returns reference to leaf if exists
    //   const results = node.children.map((child) => {
    //     if (node.children.length === 0) {
    //       return node;
    //     }
    //     return results;
    //   });
    // }
  }
}

const treeA = new Tree();

console.log(treeA);

module.exports = { TreeNode, Tree };
