import { createBoard } from '../game-board/boardCellArray.js';
import saveBoard from '../util/saveBoard.js';
import { updateCharacter } from '../services/game-api.js';

// let backgroundImg = ['../assets/forest-background-image1.gif', '../assets/underwater-background-image1', '../assets/village-background-image1'
// ];

// let backgroundCount = 0; 
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

    // ('#board').css('background-image', 'url(' + backgroundImg[backgroundCount] + ')'); 
    
    // backgroundCount++;
    
    // if (backgroundCount > backgroundImg.length - 1) backgroundCount = 0;
    // ('#board').css('background-image', 'url(' + backgroundImg[backgroundCount] + ')');


    //
    //if yes, setup next board
    //updateCharcter(character);

    //Reset Board
    // alert('Levele Complete');

}

export default levelComplete;