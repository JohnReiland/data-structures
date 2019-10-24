class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }
  push(value) {
    var storageKeys = Object.keys(this.storage);
    if (storageKeys.length === 0) {
      this.storage[0] = value;
    } else {
      var largest = Math.max(...storageKeys);
      this.storage[largest + 1] = value;
    }
  };

  pop() {
    var storageKeys = Object.keys(this.storage);
    if (storageKeys.length === 0) {
      return undefined;
    } else {
      var largest = Math.max(...storageKeys);
      var hold = this.storage[largest];
      delete this.storage[largest];
      return hold;
    }
  };

  size() {
    var storageKeys = Object.keys(this.storage);
    return storageKeys.length;
  };
}

var newStackStorage = new Stack();