'use strict';

function grouping_count(collection) {

  //implement here
  const group = {};
  collection.forEach(value => {
    if (group[value] == undefined) {
      group[value] = 1;
    } else {
      group[value]++;
    }
  })
  return group;
}

module.exports = grouping_count;
