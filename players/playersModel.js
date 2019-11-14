const db = require('../data/dbConfig.js');

module.exports = {
  insert,
  remove,
};

function insert(player) {
    return db('players')
    .insert(player, 'id')
    .then(([id]) => {
        return db('players')
            .where({ id })
            .first()
    })
}

function remove(id) {
    return null;
}
