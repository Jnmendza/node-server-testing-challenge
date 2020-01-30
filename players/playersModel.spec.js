const db = require('../data/dbConfig.js')

const { insert } = require('./playersModel.js');

describe('players model', function() {
    describe('insert()', function() {
        beforeEach(async () => {
            await db('players').truncate();
        });

        it('should insert a player', async function() {
            // insert a player in the db
            await insert({ name: 'Leo', number: '10', position: 'centre-forward'})
            // check if it was inserted into the db
            const players = await db('players');
            expect(players).toHaveLength(1)
        })
    })
})