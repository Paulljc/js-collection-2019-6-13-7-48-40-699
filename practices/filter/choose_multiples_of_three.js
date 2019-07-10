'use strict';

function choose_multiples_of_three(collection) {

  //implement here
  const result = [];
  collection.forEach(element => {
    const condition = () => {
      return element % 3 === 0;
    }
    if(condition()){
      result.push(element)
    }
  });
  return result;
}

module.exports = choose_multiples_of_three;
