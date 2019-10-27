

// Instantiate a new graph
var Graph = function() {
   this.graphList={};

};
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.graphList[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  var objectNodes = Object.keys(this.graphList)
  if (objectNodes.includes(node.toString())) {
    return true;
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {

  for (var i=0; i<this.graphList[node].length; i++){
    this.removeEdge(node,this.graphList[node][i]);
  }
  delete this.graphList[node];
  return node;
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.graphList[fromNode].includes(toNode)) {
    return true;
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.graphList[fromNode].push(toNode);
  this.graphList[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var fromNodeIndex = this.graphList[toNode].indexOf(fromNode);
  var toNodeIndex = this.graphList[fromNode].indexOf(toNode);
  this.graphList[toNode].splice(fromNodeIndex,1);
  this.graphList[fromNode].splice(toNodeIndex,1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var node in this.graphList) {
    cb(node.toString());
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
// .add is constant ------- (O)1
// .contains is linear ---- (O)n
// .removeNode is linear -- (O)n
// .hasEdge is linear ----- (O)n
// .addEdge is constant --- (O)1
// .removeEdge ------------ (O)n
// .forEachNode is linear - (O)n



var ourFunnyGraph = new Graph();