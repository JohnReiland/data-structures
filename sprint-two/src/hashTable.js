

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var container = this._storage.get(index);

  if (container === undefined) {
    container = [];
    container.push([k,v]);
    // this._storage.set(index,[]);
    // this._storage.get(index).set
  } else {
    for (var i = 0; i < container.length; i++) {
      if (container[i][0] === k) {
        container[i][1] = v;
      }
    }
    container.push([k,v]);
  }
  this._storage.set(index, container);


  // if (this._storage[index]) {
  //   this._storage.set(index,[k,v]);
  // } else {
  //   this._storage[index]=v;
  // }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var container = this._storage.get(index);
  if (Array.isArray(container)) {
    if (container.length === 0) {
      return undefined;
    } else {
      for (var i = 0; i < container.length; i++) {
        if (container[i][0] === k) {
          return container[i][1];
        }
      }
      return undefined;
    }
  }
  // return this._storage.get(index);
  // if (this._storage[index]) {
  //   this._storage.get(index);
  // }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


