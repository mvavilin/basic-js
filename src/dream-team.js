const { NotImplementedError } = require('../lib');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  const TEAM_NAME = [];

  members.map(member => {
    if (typeof member === 'string') TEAM_NAME.push(member.trim()[0])
  });

  return TEAM_NAME.
    sort((a, b) => a.localeCompare(b))
    .join('')
    .toUpperCase();
}

module.exports = {
  createDreamTeam
};
