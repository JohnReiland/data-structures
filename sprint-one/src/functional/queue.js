var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var storageKeys = Object.keys(storage);
    if (storageKeys.length === 0) {
      storage[0] = value;
    } else {
      var largest = Math.max(...storageKeys);
      storage[largest+1] = value;
    }
  };

  someInstance.dequeue = function() {
    var storageKeys = Object.keys(storage);
    if (storageKeys.length === 0) {
      return undefined;
    } else {
      var smallest = Math.min(...storageKeys);
      var hold=storage[smallest];
      delete storage[smallest];
      return hold;
    }
  };

  someInstance.size = function() {
    var storageKeys = Object.keys(storage);
    return storageKeys.length;
  };

  return someInstance;
};
