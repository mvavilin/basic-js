const { NotImplementedError } = require('../lib');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  if (!str) return '';

  let res = '';
  let entCnt = 1;

  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) {
      entCnt++;
    } else {
      res += `${entCnt <= 1 ? '' : entCnt}${str[i]}`;
      entCnt = 1;
    }
  }
  res += `${entCnt <= 1 ? '' : entCnt}${str[str.length - 1]}`;

  return res;
}

module.exports = {
  encodeLine
};
