var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  var input = item;
  if (Array.isArray(input)){
    var input = input[0];
  }
  this._storage[input] = undefined;
 };

setPrototype.contains = function(item) {
  return this._storage.hasOwnProperty(item);
};

setPrototype.remove = function(item) {
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
// .add is constant -----(O)1
// .contains is linear --(O)n
// .remove is linear --- (O)n
