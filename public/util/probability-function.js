// Resolves the contents of a null / ? cell using the remaining items, gold, and monsters values from this.character and remaining ? cells from local board state. Returns an integer with a value of 0 for empty cell, 1 for gold, 2 for monster, 3 for item and decrements relevant value from this.character

function probabilityFunction(character) {
    const totalRemainingEvents = (character.goldTilesRemaining + character.itemTilesRemaining + character.monsterTilesRemaining);
    character.unknownTilesRemaining --;
    if (totalRemainingEvents === 0) return 0;
    
    const percentChanceOfEvent = (totalRemainingEvents / character.unknownTilesRemaining);

    // if we have 8 gold/item/monsters remaining and 20 unexplored tiles, we have a 0.4 chance of hitting a g/i/m tile
    // if empty cell return 0
    if (Math.random() > percentChanceOfEvent) return 0;
    
    // resolve which type of tile this is
    const choiceArray = [];
    for (let i = 0; i < character.goldTilesRemaining; i++) {
        choiceArray.push('g');
    }
    for (let i = 0; i < character.itemTilesRemaining; i++) {
        choiceArray.push('i');
    }
    for (let i = 0; i < character.monsterTilesRemaining; i++) {
        choiceArray.push('m');
    }

    const randomChoice = choiceArray[Math.floor(Math.random() * choiceArray.length)];

    randomChoice === 'g' ? character.goldTilesRemaining--
        : randomChoice === 'i' ? character.itemTilesRemaining--
            : randomChoice === 'm' ? character.itemTilesRemaining--
                : console.log('error! seth messed up his function');

    return randomChoice === 'g' ? 1
        : randomChoice === 'm' ? 2
            : randomChoice === 'i' ? 3
                : console.log('error! seth messed up his function');

}

export default probabilityFunction;