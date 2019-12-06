function saveBoard(boardArray, characterObj) { // function name is a little misleading, since this doesn't hit the database
    const newBoardStateString = JSON.stringify(boardArray);
    characterObj.boardStateString = newBoardStateString;
}

export default saveBoard;