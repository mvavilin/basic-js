const { NotImplementedError } = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(dir = true) {
    this.dir = dir;
  }

  encrypt(msg, key) {
    return this.procedure(msg, key, 'encrypt');
  }

  decrypt(msg, key) {
    return this.procedure(msg, key, 'decrypt');
  }

  procedure(msg, key, mode) {
    if (!msg || !key) throw new Error('Incorrect arguments!');

    const res = [];
    const alphaSize = 26;
    const ofs = 'A'.charCodeAt(0);
    let keyIdx = 0;

    for (let ch of msg.toUpperCase()) {
      if (ch >= 'A' && ch <= 'Z') {
        const charPos = ch.charCodeAt(0) - ofs;
        const keyPos = key[keyIdx % key.length]
          .toUpperCase()
          .charCodeAt(0) - ofs;

        let outPos = 0;
        if (mode === 'encrypt') outPos = (charPos + keyPos) % alphaSize;
        if (mode === 'decrypt') outPos = (charPos - keyPos + alphaSize) % alphaSize;

        res.push(String.fromCharCode(outPos + ofs));

        keyIdx++;
      } else {
        res.push(ch);
      }
    }

    return this.dir ? res.join('') : res.reverse().join('');
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
