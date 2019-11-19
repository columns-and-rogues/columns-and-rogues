// Resolves the contents of a null / ? cell using the remaining items, gold, and monsters values from this.character and remaining ? cells from local board state. Returns an integer with a value of 0 for empty cell, 1 for gold, 2 for monster, 3 for item and decrements relevant value from this.character

function probabilityFunction(character) {
    const totalRemainingEvents = (character.goldTilesRemaining + character.itemTilesRemaining + character.monsterTilesRemaining);
    const percentChanceOfEvent = (totalRemainingEvents / character.unknownTilesRemaining)
}

export default probabilityFunction;

/*
                explored_tiles VARCHAR(256) NOT NULL,
                gold_tiles_remaining INTEGER NOT NULL,
                item_tiles_remaining INTEGER NOT NULL,
                monster_tiles_remaining INTEGER NOT NULL,

                Things we may want in local state: player x+y position (default 0,0 on page load), number of ? squares (24 on page load, 0,0,0 is always the start point), remaining gold / monsters / items from database
                Cell is an object with {x,y,contents}
                ? Cell is {x, y, null}
                Empty cell is {x,y,0}
                Gold cell is {x,y,1}
                Monster cell is {x,y,2}
                Item cell is {x,y,3}

                Player is at {1,1,0} and wants to move into {1,2,null} i.e. straight down. Player has an x and y in local state. On page load, this is set to x=0 y=0.
                1. Check that it is a valid move (not outside the array)
                2. Change the players x and y position
                3. If the player is on a cell that is {player.x, player.y, null}
                4. Count the ? cells, this = a variable called $remaining
                5. Divide remaining I + remaining G + remaining M by $remaining
                6. This gives us the percent chance that it is an empty square
                7. Run a probability function - if the number is over that percent chance, roll randomly between gold, item, or monster and set the cell {x,y,THIS} to that number
                8. Open the modal and run the appropriate event
*/