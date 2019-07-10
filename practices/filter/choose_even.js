'use strict';

function choose_even(collection) {
  //implement here
  const result = [];
  collection.forEach(element => {
    if(element % 2 === 0){
      result.push(element)
    }
  });
  return result;
}

module.exports = choose_even;
