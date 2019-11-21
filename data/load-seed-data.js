const client = require('../lib/client');
// import our seed data:
const monsters = require('./monsters');
const items = require('./items');

run();

async function run() {

    try {
        await client.connect();

        await Promise.all(
            monsters.map(async monster => {
                const result = await client.query(`
            INSERT INTO monsters (name, hp, dice, effect, image)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *;
            `,
                [monster.name, monster.hp, monster.dice, monster.effect, monster.image]);
                return result.rows[0];
            })
        );

        await Promise.all(
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