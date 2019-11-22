function retrieveBoard(characterObj) {
    return JSON.parse(characterObj.boardStateString);
}

export default retrieveBoard;