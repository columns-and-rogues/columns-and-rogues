const client = require('../lib/client');

// async/await needs to run in a function
run();

async function run() {

    try {
        // initiate connecting to db
        await client.connect();
    
        // run a query to create tables
        // We will store remaining tiles of each type - gold, items, monsters - and a string that represents the array of explored tiles. When loading the page, we will use this string to rebuild the board state
        await client.query(`
            CREATE TABLE users (
                id SERIAL PRIMARY KEY,
                email VARCHAR(256) NOT NULL,
                hash VARCHAR(512) NOT NULL,
                display_name VARCHAR(256) NOT NULL,
            );

            CREATE TABLE characters (
                id VARCHAR(64) PRIMARY KEY,
                user_id INTEGER NOT NULL REFERENCES users(id),
                hp INTEGER NOT NULL,
                gold INTEGER NOT NULL,
                item_one INTEGER NOT NULL,
                item_two INTEGER NOT NULL,
                item_three INTEGER NOT NULL,
                item_four INTEGER NOT NULL,
                item_five INTEGER NOT NULL,
                image VARCHAR(512) NOT NULL,
                explored_tiles VARCHAR(256) NOT NULL,
                gold_tiles_remaining INTEGER NOT NULL,
                item_tiles_remaining INTEGER NOT NULL,
                monster_tiles_remaining INTEGER NOT NULL
            );

            CREATE TABLE items (
                id VARCHAR(64) PRIMARY KEY,
                name VARCHAR(256) NOT NULL,
                dice INTEGER NOT NULL,
                effect VARCHAR(512) NOT NULL,
                image VARCHAR(512) NOT NULL
            );

            CREATE TABLE monsters (
                id VARCHAR(64) PRIMARY KEY,
                name VARCHAR(256) NOT NULL,
                hp INTEGER NOT NULL,
                dice INTEGER NOT NULL,
                effect VARCHAR(512) NOT NULL,
                image VARCHAR(512) NOT NULL
            );
        `);

        console.log('create tables complete');
    }
    catch (err) {
        // problem? let's see the error...
        console.log(err);
    }
    finally {
        // success or failure, need to close the db connection
        client.end();
    }
    
}
