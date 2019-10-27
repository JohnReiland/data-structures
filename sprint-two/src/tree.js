var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);
  // your code here
  newTree.children = null;  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  if (value === null){
    return false;
  }
  if (this.children === null){
    this.children=[]
  }
  var newChild = Tree(value);
  this.children.push(newChild);
  return true;
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }
  if (this.children === null){
    return false;
  }
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(target)) {
      return true;
    }
  }
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
// .addChild is constant (O)1
// .contains is linear  (O)n