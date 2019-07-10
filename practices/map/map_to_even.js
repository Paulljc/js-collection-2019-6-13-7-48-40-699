'use strict';
function map_to_even(collection){
  const result = collection.map((value) => {
    return value * 2;
  })
  return result;
}
module.exports = map_to_even;
