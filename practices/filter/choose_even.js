'use strict';

function choose_even(collection) {
  //implement here
  const result = [];
  collection.forEach(element => {
    const condition = () => {
      return element % 2 === 0;
    }
    if(condition()){
      result.push(element)
    }
  });
  return result;
}

module.exports = choose_even;
