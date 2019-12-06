const client = require('../lib/client');
// import our seed data:
const monsters = require('./monsters');
const items = require('./items');

run();

async function run() {

    try {
        await client.connect();

        await Promise.all( // woooah
            monsters.map(async monster => {
                const {
                    result: {
                        rows: [firstRow]
                    }
                } = await client.query(`
            INSERT INTO monsters (name, hp, dice, effect, image)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *;
            `,
                    [monster.name, monster.hp, monster.dice, monster.effect, monster.image]);
                return firstRow;
            })
        );

        await Promise.all( // loving these promise maps!
            items.map(async item => {
                const result = await client.query(`
            INSERT INTO items (name, dice, effect, image)
            VALUES ($1, $2, $3, $4)
            RETURNING *;
            `,
                    [item.name, item.dice, item.effect, item.image]);
                return result.rows[0];
            })
        );

        console.log('seed data load complete');
    }
    catch (err) {
        console.log(err);
    }
    finally {
        client.end();
    }

}