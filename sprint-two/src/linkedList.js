var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  // list.hold;
 //list={head:null, tail:null}
  list.addToTail = function(value) {
  //  this.hold= new Node(value);
    if(this.tail!==null){
      this.tail.next=new Node(value);
      this.tail=this.tail.next;
    }

    this.tail=new Node(value);
    if(this.head===null){
      this.head=this.tail;
    }
  };

  list.removeHead = function() {
    if (this.head !== null) {
      var removedNode = this.head;
      this.head = removedNode.next;
      return removedNode.value;
    }
  };

  list.contains = function(target) {
    var currentNode = this.head;
    while (currentNode) {
    console.log(currentNode);
      if (currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    };
    return false;
  }

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
