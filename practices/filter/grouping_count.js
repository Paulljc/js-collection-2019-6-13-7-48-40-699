'use strict';

function grouping_count(collection) {

  //implement here
  const item = {};
  collection.forEach(value => {
    if (item[value] == undefined) {
      item[value] = 1;
    } else {
      item[value]++;
    }
  })
  return item;
}

module.exports = grouping_count;
