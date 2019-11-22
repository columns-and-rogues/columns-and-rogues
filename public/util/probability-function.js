function probabilityFunction(character) {
    const totalRemainingEvents = 
        (character.goldTilesRemaining + 
        character.itemTilesRemaining + 
        character.monsterTilesRemaining);
        
    character.unknownTilesRemaining --;
    
    if (totalRemainingEvents === 0) return 0;
    
    const percentChanceOfEvent = (totalRemainingEvents / character.unknownTilesRemaining);

    if (Math.random() > percentChanceOfEvent) return 0;
    
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