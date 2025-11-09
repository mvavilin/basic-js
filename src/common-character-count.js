const { NotImplementedError } = require('../lib');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  let entCnt = 0;
  let buf = '';

  for (let i = 0; i < s1.length; i++) {
    if (buf.includes(s1[i]) || !(s2.includes(s1[i]))) continue;
    buf += s1[i];
    const entCntS1 = s1.split(s1[i]).length - 1;
    const entCntS2 = s2.split(s1[i]).length - 1;
    entCntS1 < entCntS2
      ? entCnt += entCntS1
      : entCnt += entCntS2;
  }

  return entCnt;
}

module.exports = {
  getCommonCharacterCount
};
