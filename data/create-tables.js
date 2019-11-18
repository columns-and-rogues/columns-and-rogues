const client = require('../lib/client');

// async/await needs to run in a function
run();

async function run() {

    try {
        // initiate connecting to db
        await client.connect();
    
        // run a query to create tables
        await client.query(`
            CREATE TABLE users (
                id SERIAL PRIMARY KEY,
                email VARCHAR(256) NOT NULL,
                hash VARCHAR(512) NOT NULL,
                display_name VARCHAR(256) NOT NULL,
                hp INTEGER NOT NULL
            );

            CREATE TABLE board (
                id VARCHAR(64) PRIMARY KEY,
                quote VARCHAR(1024),
                user_id INTEGER NOT NULL REFERENCES users(id),
                character VARCHAR(256) NOT NULL,
                image VARCHAR(512) NOT NULL
            );

            CREATE TABLE  (
                id VARCHAR(64) PRIMARY KEY,
                quote VARCHAR(1024),
                user_id INTEGER NOT NULL REFERENCES users(id),
                character VARCHAR(256) NOT NULL,
                image VARCHAR(512) NOT NULL
            );

            CREATE TABLE favorites (
                id VARCHAR(64) PRIMARY KEY,
                quote VARCHAR(1024),
                user_id INTEGER NOT NULL REFERENCES users(id),
                character VARCHAR(256) NOT NULL,
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
