'use strict';
var map_to_four_multiples_add_one = function(collection){
  const result = collection.map((value) => {
    return value * 4 + 1;
  })
  return result;
};

module.exports = map_to_four_multiples_add_one;
