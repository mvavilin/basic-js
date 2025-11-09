const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  let result = '';

  const repTimes = options.repeatTimes || 1;
  const add = options.addition !== undefined ? String(options.addition) : '';
  const addTimes = options.additionRepeatTimes || 1;
  const addSep = options.additionSeparator || '|';
  const sep = options.separator || '+';

  for (let i = 0; i < repTimes; i++) {
    result += str;

    for (let j = 0; j < addTimes; j++) {
      result += add;
      if (j + 1 !== addTimes) result += addSep;
    }

    if (i + 1 !== repTimes) result += sep;
  }

  return result;
}

module.exports = {
  repeater
};
