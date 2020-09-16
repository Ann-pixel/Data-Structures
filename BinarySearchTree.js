// jshint esversion:6
//binary search tree has no more than 2 children.
//all smaller numbers are on the left, all big ones are on the right
class Node { //initaite a node instance
  constructor(value) {
    this.value = value; //needs a value and a left, right prop.
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree { // only has 'root'. is all we have to work with
  constructor() {
    this.root = null;
  }
  insert(value) {
    var newNode = new Node(value); //initiate new node
    if (this.root === null) { //if no root. this is the root
      this.root = newNode;
      return this;
    }
    var current = this.root; //using this variable to traverse the tree
    while (true) { //will run until returned
      if (value === current.value) return undefined; //to avoid duplicates
      if (value < current.value) { //if less, goes to the left
        if (current.left === null) { //if nothing to the left. this becomes the left.
          current.left = newNode;
          return this;
        } //if something on the left. we follow above steps on it
        current = current.left;
      } else { //if more(only other case) goes to the right
        if (current.right === null) { //if nothing on the right, this becomes right
          current.right = newNode;
          return this;
        }
        current = current.right; //if something on right, we follow all steps on it.
      }
    }
  }

  find(val) {
    if (!this.root) return false; //if no root, no tree
    let current = this.root; //assign a var to traverse the tree
    let found = false; // boolean to keep track of found status
    while (current && !found) { //while there is a current & found is false
      if (val < current.value) { //if less than- check the left
        current = current.left;
      } else if (val > current.value) { //if greater than- check right
        current = current.right;
      } else {
        found = true; //change boolen status if match found so loop stops
      }
    } // if not found and the tree is fully traversed, current will be null, so loop stops.
    if (!found) return false;
    return current;
  }
  //traversing a binary tree(not necessarily sorted.)

  traverseBFS() { //traverse using Breadth First Search- searching all siblings before children
    if (!this.root) return undefined; //if empty
    let node;
    let queue = []; //use an array to implement FIFO( work as a queue)
    let result = []; //returning an array. that contains all traversed nodes
    queue.push(this.root); //start at the top
    while (queue.length !== 0) { //keep adding all siblings before children to this queue and add shift() to the result until empty
      node = queue.shift(); //work with the first value each time(FIFO)-push to add, shift to remove
      result.push(node.value); //add value to result and remove from queue.
      if (node.left) queue.push(node.left); //if there are children, add them to the queue. left first.(or right first, you'll just be reading in the opposite direction.)
      if (node.right) queue.push(node.right);
    } //loop till entire queue(and so the tree) is traversed through!
    return result;
  }
  //traversing depth first.==pre order==
  //vist all on left, then all on right for each node
  traverseDFSPre() {
    if (!this.root) return undefined; //if empty
    let data = []; //array to be returned
    let current = this.root; //starting point
    //recursively calling helper on each node.
    // push value to data and if there is a left, call helper on it.
    //if there is a right, call helper on it.
    //we're done when no right or left are left.
    function helperTraverse(node) {
      data.push(node.value);
      if (node.left) helperTraverse(node.left);
      if (node.right) helperTraverse(node.right);
    }
    helperTraverse(current);
    return data;
  }

  //first all sides are explored and then added.
  //so the root is the last one to get added.
  //the youngest first. oldest last
  traverseDFSPost() {
    if (!this.root) return undefined;
    let data = [];
    let current = this.root;

    function helperTraverse(node) {

      if (node.left) helperTraverse(node.left);
      if (node.right) helperTraverse(node.right);
      data.push(node.value); //this is the only change between pre & post.
    } //all nodes are explored first. only if a node doesnt have any children or all the children have been traversed does it get added to the results.
    helperTraverse(current);
    return data;
  }


  //for InOrder- we first traverse the left. add the left
  //then traverse the node. then the right
  traverseDFSIn() {
    if (!this.root) return undefined;
    let data = [];
    let current = this.root;

    function helperTraverse(node) {

      if (node.left) helperTraverse(node.left);
      data.push(node.value);        //this is the only change.
      if (node.right) helperTraverse(node.right);
    }   //first visit all left. then visit the node. then visit all right.
    helperTraverse(current);
    return data;
  }
}

var tree = new BinarySearchTree();
