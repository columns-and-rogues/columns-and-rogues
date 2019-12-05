responsible documentation!!

Key for all table fields

CREATE TABLE users (
                id SERIAL PRIMARY KEY, // serial key
                email VARCHAR(256) NOT NULL, // email address
                hash VARCHAR(512) NOT NULL, // password hash
                display_name VARCHAR(256) NOT NULL, // player name input on typeform during sign up
            );

            CREATE TABLE characters (
                id VARCHAR(64) PRIMARY KEY, // serial key
                user_id INTEGER NOT NULL REFERENCES users(id), // foreign key to users table
                hp INTEGER NOT NULL, // hp remaining
                gold INTEGER NOT NULL, // current gold
                item_one INTEGER NOT NULL, // default item - sword
                item_two INTEGER NOT NULL, // empty, slot for picked up item
                item_three INTEGER NOT NULL, // empty, slot for picked up item
                item_four INTEGER NOT NULL, // empty, slot for picked up item
                item_five INTEGER NOT NULL, // empty, slot for picked up item
                image VARCHAR(512) NOT NULL, // image from MTG api for the character
                explored_tiles_string VARCHAR(256) NOT NULL, // string representing the array of the current board state. Loaded and used to populate board items that have already been visited. On load, place character on static starting point board item
                unknown_tiles_remaining INTEGER NOT NULL, // number of ? tiles on the board
                gold_tiles_remaining INTEGER NOT NULL, // number of undiscovered gold tiles. Decrement when one is found
                item_tiles_remaining INTEGER NOT NULL, // number of undiscovered item tiles. Decrement when one is found
                monster_tiles_remaining INTEGER NOT NULL, // number of undiscovered monster tiles. Decrement when one is found
                boards_survived INTEGER NOT NULL // player can see how many times they have survived the board
            );

            CREATE TABLE items (
                id VARCHAR(64) PRIMARY KEY, // serial key
                name VARCHAR(256) NOT NULL, // item name string
                dice INTEGER NOT NULL, // size of the attack dice for this item
                effect VARCHAR(512) NOT NULL, // string used to find effect that isn't attack
                image VARCHAR(512) NOT NULL // static image file used for this item
            );

            CREATE TABLE monsters (
                id VARCHAR(64) PRIMARY KEY, // serial key
                name VARCHAR(256) NOT NULL, // monster name string pulled from MTG api
                hp INTEGER NOT NULL, // hp remaining
                dice INTEGER NOT NULL, // size of monster's attack dice
                effect VARCHAR(512) NOT NULL, // string used to find effects that are not attacks
                image VARCHAR(512) NOT NULL // image string pulled from MTG api
            );