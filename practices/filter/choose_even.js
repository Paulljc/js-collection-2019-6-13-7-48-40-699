'use strict';

function choose_even(collection) {
  //implement here
  const result = collection.filter((value) => {
    return value % 2 === 0;
  })
  return result;
}

module.exports = choose_even;
