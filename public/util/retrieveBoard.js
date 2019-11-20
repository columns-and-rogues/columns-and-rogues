// Takes a character object and creates a new local board object from boardStateString, then returns that board

function retrieveBoard(characterObj) {
    return JSON.parse(characterObj.boardStateString);
}

export default retrieveBoard;