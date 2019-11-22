import { createBoard } from '../game-board/boardCellArray.js';
import saveBoard from '../util/saveBoard.js';
import { updateCharacter } from '../services/game-api.js';

function levelComplete(boardSize, character) {
    //STRETCH - play animation of going through door.
    //STRETCH - play sound of door.

    //Position Change
    character.x = 0;
    character.y = 0;
    
    //Redward Player
    character.boardsSurvived++;
    character.hp = character.hp + 2;

    //Reset states
    character.goldTilesRemaining = 3;
    character.itemTilesRemaining = 3;
    character.monsterTilesRemaining = 10;
    character.unknownTilesRemaining = 24;
    let nextBoard = createBoard(boardSize);

    //Save Character
    const saveEvent = async() => {
        saveBoard(nextBoard, character);
        await updateCharacter(character);
    };

    saveEvent();
}

export default levelComplete;