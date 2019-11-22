import { createBoard } from '../game-board/boardCellArray.js';
import saveBoard from '../util/saveBoard.js';
import { updateCharacter } from '../services/game-api.js';

function levelComplete(boardSize, character) {
    //Position Change
    character.x = 0;
    character.y = 0;
    
    //Redward Player
    character.boardsSurvived++;
    character.hp = character.hp + 2;
    boardSize = 2 + character.boardsSurvived;

    //Reset states
    character.goldTilesRemaining = 3;
    character.itemTilesRemaining = 3;
    character.monsterTilesRemaining = 5 + boardSize;
    character.unknownTilesRemaining = (boardSize * boardSize) - 1;
    let nextBoard = createBoard(boardSize);

    //Save Character
    const saveEvent = async() => {
        saveBoard(nextBoard, character);
        await updateCharacter(character);
    };

    saveEvent();
}

export default levelComplete;