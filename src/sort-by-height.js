const { NotImplementedError } = require('../lib');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const exc = -1;
  const sortArr = arr
    .filter(ht => ht !== exc)
    .sort((a, b) => a - b);
  let idx = 0;

  return arr.map(ht => ht === exc ? exc : sortArr[idx++]);
}

module.exports = {
  sortByHeight
};
