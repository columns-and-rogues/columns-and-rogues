// Changed our old get user by id to get character by id, then added a get user function. Old get user by id may be broken by this change

// Load Environment Variables from the .env file
require('dotenv').config();

// Application Dependencies
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const client = require('./lib/client');
// Initiate database connection
client.connect();

// Application Setup
const app = express();
const PORT = process.env.PORT;
app.use(morgan('dev')); // http logging
app.use(cors()); // enable CORS request
app.use(express.static('public')); // server files from /public folder
app.use(express.json()); // enable reading incoming json data

//Auth
const ensureAuth = require('./lib/auth/ensure-auth');
const createAuthRoutes = require('./lib/auth/create-auth-route');
const authRoutes = createAuthRoutes({
    selectUser(email) {
        return client.query(`
        SELECT id, email, hash, display_name as "displayName"
        FROM users
        WHERE email = $1;
        `,
        [email]).then(result => result.rows[0]);
    },
    insertUser(user, hash) {
        console.log(user);
        return client.query(`
        INSERT into users (email, hash, display_name)
        VALUES ($1, $2, $3)
        RETURNING id, email, display_name as "displayName";
        `,
        [user.email, hash, user.displayName]).then(result => result.rows[0]);
    }
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api', ensureAuth);

// database routes
app.get('/api/user/:id', async(req, res) => {
    const email = req.params.id;

    try {
        const result = await client.query(`
            SELECT id, email, hash, display_name as "displayName"
            FROM users
            WHERE email = $1;
        `,
        [email]);

        const user = result.rows[0];
        if (!user) {
            res.status(404).json({
                error: `User for email ${email} does not exist`
            });
        } else {
            res.json(result.rows[0]);
        }

    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: err.message || err
        });
    }
});

app.post('/api/character', async(req, res) => {
    const character = req.body;

    try {
        const result = await client.query(`
            INSERT INTO characters (user_id, hp, gold, item_one, item_two, item_three, item_four, item_five, image, x, y, board_state_string, unknown_tiles_remaining, gold_tiles_remaining, item_tiles_remaining, monster_tiles_remaining, boards_survived)
            VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17)
            RETURNING *;
        `, 
        [character.userId, character.hp, character.gold, character.itemOne, character.itemTwo, character.itemThree, character.itemFour, character.itemFive, character.image, character.x, character.y, character.boardStateString, character.unknownTilesRemaining, character.goldTilesRemaining, character.itemTilesRemaining, character.monsterTilesRemaining, character.boardsSurvived]);
        res.json(result.rows[0]);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            error: err.message || err
        });
    }
});

app.get('/api/character/:id', async(req, res) => {
    const id = req.params.id;

    try {
        const result = await client.query(`
            SELECT
                u.display_name as "displayName"
                c.*,
            FROM users u
            JOIN characters c
            ON    u.id = c.user_id
            WHERE u.id = $1
        `,
        [id]);

        const character = result.rows[0];
        if (!character) {
            res.status(404).json({
                error: `Character for User id ${id} does not exist`
            });
        } else {
            res.json(result.rows[0]);
        }

    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: err.message || err
        });
    }
});

app.put('/api/character/:id', async(req, res) => {
    const id = req.params.id;
    const character = req.body;

    try {
        const result = await client.query(`
            UPDATE characters
            SET     user_id = $2,
                    hp = $3,
                    gold = $4,
                    item_one = $5, 
                    item_two = $6, 
                    item_three = $7, 
                    item_four = $8, 
                    item_five = $9, 
                    image = $10, 
                    x = $11, 
                    y = $12, 
                    board_state_string = $13, 
                    unknown_tiles_remaining = $14, 
                    gold_tiles_remaining = $15, 
                    item_tiles_remaining = $16, 
                    monster_tiles_remaining = $17, 
                    boards_survived = $18
            WHERE id = $1
            RETURNING *;
        `,
        [id, character.userId, character.hp, character.gold, character.itemOne, character.itemTwo, character.itemThree, character.itemFour, character.itemFive, character.image, character.x, character.y, character.boardStateString, character.unknownTilesRemaining, character.goldTilesRemaining, character.itemTilesRemaining, character.monsterTilesRemaining, character.boardsSurvived]);

        res.json(result.rows[0]);

    } catch (err) {
        if (err.code === '23505') {
            res.status(400).json({
                error: `Updating character failed`
            });
        } else {
            res.status(500).json({
                error: err.message || err
            });
        }
    }
});

app.listen(PORT, () => {
    console.log('server running on PORT', PORT);
});