const client = require('../lib/client');
// import our seed data:
const users = require('./users');

run();

async function run() {

    try {
        await client.connect();

        const UserInfo = await Promise.all(
            users.map(async user => {
                const result = await client.query(`
            INSERT INTO users (id, email, hash, display_name)
            VALUES ($1, $2, $3, $4)
            RETURNING *;
            `,
                [user.id, user.email, user.hash, user.display_name]);
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
