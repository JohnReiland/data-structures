

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

  } else {
    for (var i = 0; i < container.length; i++) {
      if (container[i][0] === k) {
        container[i][1] = v;
      }
    }
    container.push([k,v]);
  }
  this._storage.set(index, container);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var container = this._storage.get(index);
  if (Array.isArray(container)) {
    for (var i = 0; i < container.length; i++) {
      if (container[i][0] === k) {
        return container[i][1];
      }
    }
    return undefined;
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  //this._storage.set(index, undefined);

  var container = this._storage.get(index);
  if (Array.isArray(container)) {
    for (var i = 0; i < container.length; i++) {
      if (container[i][0] === k) {
        var removedValue = container[i][1];
        container.splice(i,1);
      }
    }
  }
  this._storage.set(index, container);
  return removedValue;
};





/*
 * Complexity: What is the time complexity of the above functions?
 */
// .insert is constant ----- (O)1
// .retrieve is constant --- (O)1
// .remove is constant ----- (O)1

