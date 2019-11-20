// Takes a local board object and a local character object, converts board into a string that can be saved on the character table on board_state_string, and updates the character with this string

function saveBoard(boardArray, characterObj) {
    const newBoardStateString = JSON.stringify(boardArray);
    characterObj.boardStateString = newBoardStateString;
}

export default saveBoard;