'use strict';

function grouping_count(collection) {

  //implement here
  const group = {};
  collection.filter((value) => {
    return group[value] == undefined ? group[value] = 1 : group[value]++;
  })
  return group;
}

module.exports = grouping_count;
