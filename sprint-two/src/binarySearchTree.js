var BinarySearchTree = function(value) {
  var newTree = Object.create(newTreeMethods);
  newTree.value=value;
  newTree.left=null;
  newTree.right=null;

  return newTree;
};
var newTreeMethods = {}

newTreeMethods.insert = function(value){
  if (value === this.value) { return };

  if (value > this.value){
    if (this.right===null){
      this.right=BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  } else {
    if (this.left===null){
      this.left=BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  }
};

newTreeMethods.contains = function(value) {
  if (value === this.value) { return true };

  if (value > this.value){
    if (this.right===null){
      return false;
    } else {
      return this.right.contains(value);
    }
  } else {
    if (this.left===null){
      return false;
    } else {
      return this.left.contains(value);
    }
  }
};

newTreeMethods.depthFirstLog = function(cb) {
  cb(this.value);
  if (this.left !== null){
    this.left.depthFirstLog(cb)
  }
  if (this.right !== null){
    this.right.depthFirstLog(cb)
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
