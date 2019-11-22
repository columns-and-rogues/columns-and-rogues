function saveBoard(boardArray, characterObj) {
    const newBoardStateString = JSON.stringify(boardArray);
    characterObj.boardStateString = newBoardStateString;
}

export default saveBoard;