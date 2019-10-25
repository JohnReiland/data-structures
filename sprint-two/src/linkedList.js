var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (this.tail === null) {
      this.tail = new Node(value);
      this.head = this.tail;
    } else {
      this.tail.next = new Node(value);
      this.tail = this.tail.next;
    }
  };

  list.removeHead = function() {
    if (this.head === this.tail) {
      this.tail = null;
    }
    if (this.head !== null) {
      var removedNode = this.head;
      this.head = this.head.next;
      return removedNode.value;
    }
  };

  list.contains = function(target) {
    var currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    };
    return false;
  }

  // ---------------------------

  list.removeTail = function() {
    if (this.head === this.tail) {
      this.tail = null;
      return this.removeHead();
    }
    var currentNode = this.head;
    while (currentNode) {
      if (currentNode.next === this.tail) {
        var removedNode = this.tail;
        this.tail = currentNode;
        currentNode.next = null;
        return removedNode.value;
      }
      currentNode = currentNode.next;
    }
  };

  list.addToHead = function(value) {
    if (this.head === null) {
      this.head = new Node(value);
      this.tail = this.head;
    } else {
      var previousHead = this.head;
      this.head = new Node(value);
      this.head.next = previousHead;
    }
  };

  list.nthNode = function(n) {
    var currentNode = this.head;
    for (var i = 1; currentNode && i < n; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  };

  list.removeNthNode = function(n) {
    var upstreamNode = this.nthNode(n-1);
    if (upstreamNode === null) {
      return this.removeHead();
    } else {
      var nthNode = upstreamNode.next;
      upstreamNode.next = nthNode.next;
      return nthNode.value;
    }
  };

  return list;
};


var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
// .addToTail is constant ------- (O)1
// .removeHead is constant ------ (O)1
// .contains is linear ---------- (O)n
//
// .addToHead is constant ------- (O)1
// .removeTail is linear -------- (O)n
// .nthNode is linear ----------- (O)n
// .removeNthNode is linear ----- (O)n (because requires use of .nthNode, which is linear)
//
