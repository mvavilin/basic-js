const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const strDigits = [...n.toString()];
  let maxNum = 0;

  for (let i = 0; i < strDigits.length; i++) {
    const currNum = +strDigits
      .filter((_, index) => index !== i)
      .join('');
    if (currNum > maxNum) maxNum = currNum;
  }

  return maxNum;
}

module.exports = {
  deleteDigit
};
