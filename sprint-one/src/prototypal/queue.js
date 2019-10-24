var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};

  return someInstance;
};

 queueMethods = {}

  queueMethods.enqueue= function(value) {
    var storageKeys = Object.keys(this.storage);
    if (storageKeys.length === 0) {
      this.storage[0] = value;
    } else {
      var largest = Math.max(...storageKeys);
      this.storage[largest + 1] = value;
    }
  };

  queueMethods.dequeue= function() {
    var storageKeys = Object.keys(this.storage);
    if (storageKeys.length === 0) {
      return undefined;
    } else {
      var smallest = Math.min(...storageKeys);
      var hold = this.storage[smallest];
      delete this.storage[smallest];
      return hold;
    }
  };

  queueMethods.size= function() {
    var storageKeys = Object.keys(this.storage);
    return storageKeys.length;
  };



