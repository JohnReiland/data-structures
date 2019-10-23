var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    // get array of keys in storage
    // using Object.keys()
    // use Math.max to find largest
    // decorate storage with largestKey+1 : value
    var storageKeys = Object.keys(storage);
    if (storageKeys.length === 0) {
      storage[0] = value;
    } else {
      var largest = Math.max(...storageKeys);
      storage[largest+1] = value;
    }
  };

  someInstance.pop = function() {
    var storageKeys = Object.keys(storage);
    if (storageKeys.length === 0) {
      return undefined;
    } else {
      var largest = Math.max(...storageKeys);
      var hold=storage[largest];
      delete storage[largest];
      return hold;
    }
  };

  someInstance.size = function() {
    var storageKeys = Object.keys(storage);
    return storageKeys.length;
  };


  return someInstance;
};


// figure out the largest key
// Object.keys()

