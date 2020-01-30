exports.seed = function(knex, Promise) {
    return knex('players')
        .truncate()
        .then(function() {
            return knex('players').insert([
                { name: 'Jon', number: '4', position: 'defender' },
                { name: 'Cris', number: '7', position: 'forward' },
                { name: 'James', number: '10', position: 'forward' },
            ]);
        });
};