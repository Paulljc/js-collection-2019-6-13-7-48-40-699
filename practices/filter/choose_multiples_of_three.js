'use strict';

function choose_multiples_of_three(collection) {

  //implement here
  const result = collection.filter((value) => {
    return value % 3 === 0;
  })
  return result;
}

module.exports = choose_multiples_of_three;
