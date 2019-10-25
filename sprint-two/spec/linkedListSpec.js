describe('linkedList', function() {
  var linkedList;

  beforeEach(function() {
    linkedList = LinkedList();
  });

  it('should have a head and tail', function() {
    expect(linkedList).to.have.property('head');
    expect(linkedList).to.have.property('tail');
  });

  it('should have methods named "addToTail", "removeHead", and "contains"', function() {
    expect(linkedList.addToTail).to.be.a('function');
    expect(linkedList.removeHead).to.be.a('function');
    expect(linkedList.contains).to.be.a('function');
  });

  it('should designate a new tail when new nodes are added', function() {
    linkedList.addToTail(4);
    expect(linkedList.tail.value).to.equal(4);
    linkedList.addToTail(5);
    expect(linkedList.tail.value).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.head.value).to.equal(4);
    linkedList.removeHead();
    expect(linkedList.head.value).to.equal(5);
  });

  it('should return the value of the former head when removeHead is called', function() {
    linkedList.addToTail(4);
    expect(linkedList.removeHead()).to.equal(4);
  });

  it('should contain a value that was added', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.contains(4)).to.equal(true);
    expect(linkedList.contains(5)).to.equal(true);
    expect(linkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.removeHead();
    expect(linkedList.contains(4)).to.equal(false);
  });


  // add more tests here to test the functionality of linkedList

  it('should designate a new head/tail when first node is added by calling addToTail', function() {
    linkedList.addToTail(4);
    expect(linkedList.head.value).to.equal(4);
    expect(linkedList.tail.value).to.equal(4);
  });

  it('should have a head that is also its tail when only one new node is added by calling addToTail', function() {
    linkedList.addToTail(4);
    expect(linkedList.head).to.equal(linkedList.tail);
  });



  it('should designate a new head/tail when first node is added by calling addToHead', function() {
    linkedList.addToHead(4);
    expect(linkedList.head.value).to.equal(4);
    expect(linkedList.tail.value).to.equal(4);
  });

  it('should have a head that is also its tail when only one new node is added by calling addToHead', function() {
    linkedList.addToHead(4);
    expect(linkedList.head.value).to.equal(4);
    expect(linkedList.head).to.equal(linkedList.tail);
  });

  it('should designate a new head when addToHead is called after one or more nodes are added', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.head.value).to.equal(4);
    linkedList.addToHead(3);
    expect(linkedList.head.value).to.equal(3);
  });



  it('should remove the head/tail from the list when removeHead is called after only one node is added', function() {
    linkedList.addToTail(4);
    expect(linkedList.head.value).to.equal(4);
    expect(linkedList.tail.value).to.equal(4);
    linkedList.removeHead();
    expect(linkedList.head).to.equal(null);
    expect(linkedList.tail).to.equal(null);
  });



  it('should remove the head/tail from the list when removeTail is called after only one node is added', function() {
    linkedList.addToTail(4);
    expect(linkedList.head.value).to.equal(4);
    expect(linkedList.tail.value).to.equal(4);
    linkedList.removeTail();
    expect(linkedList.head).to.equal(null);
    expect(linkedList.tail).to.equal(null);
  });

  it('should remove the tail from the list when removeTail is called after more than one node is added', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.removeTail();
    expect(linkedList.tail.value).to.equal(4);
  });

  it('should return the value of the former tail when removeTail is called', function() {
    linkedList.addToTail(4);
    expect(linkedList.removeTail()).to.equal(4);
  });

  it('should return the value of the former tail when removeTail is called after more than one node is added', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.removeTail()).to.equal(5);
  });



  it('should return nth node when nthNode is called', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.addToTail(6);
    expect(linkedList.nthNode(1)).to.equal(linkedList.head);
    expect(linkedList.nthNode(3)).to.equal(linkedList.tail);
  });

  it('should return null when nthNode is called with n greater than number of nodes in list', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.addToTail(6);
    expect(linkedList.nthNode(4)).to.equal(null);
  });

  it('should remove the nth node when removeNthNode is called', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.addToTail(6);
    linkedList.removeNthNode(2);
    expect(linkedList.contains(4)).to.equal(true);
    expect(linkedList.contains(5)).to.equal(false);
    expect(linkedList.contains(6)).to.equal(true);
  });

  it('should return the value of the former nth node when removeNthNode is called', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.addToTail(6);
    expect(linkedList.removeNthNode(2)).to.equal(5);
  });

  it('should return the value of the nth node when nthNode.value is called', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.addToTail(6);
    expect(linkedList.nthNode(2).value).to.equal(5);
  });

  // it('', function() {
  //   linkedList.method();
  //   expect().to.equal();
  // });

});
