// Resolves the contents of a null / ? cell using the remaining items, gold, and monsters values from this.character and remaining ? cells from local board state. Returns an integer with a value of 0 for empty cell, 1 for gold, 2 for monster, 3 for item and decrements relevant value from this.character

function probabilityFunction(character) {
    const totalRemainingEvents = (character.goldTilesRemaining + character.itemTilesRemaining + character.monsterTilesRemaining);
}

export default probabilityFunction;

/*
                explored_tiles VARCHAR(256) NOT NULL,
                gold_tiles_remaining INTEGER NOT NULL,
                item_tiles_remaining INTEGER NOT NULL,
                monster_tiles_remaining INTEGER NOT NULL,
*/