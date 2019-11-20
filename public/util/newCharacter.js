// Generates a new character that can be saved to the database and returns that character. If we want control over character creation down the road, add parameters that influence the stats / random numbers / board size

import { createBoard } from '../game-board/boardCellArray.js';
import saveBoard from '../util/saveBoard.js';

function newCharacter() {
    const newBoard = createBoard(5);
    let newChar = {
        id: '', // need to get these from outside info / set in auth page before posting to DB
        userId: -1, // same here
        hp: 5,
        gold: 0,
        itemOne: 1,
        itemTwo: 0,
        itemThree: 0,
        itemFour: 0,
        itemFive: 0,
        image: 'https://media.giphy.com/media/cbzgUUz1HDF5e/200w_d.gif', // placeholder
        x: 0,
        y: 0,
        boardStateString: '',
        unknownTilesRemaining: newBoard.length, // might need to be -1 depending on how we handle first square, this is for null contents at 0,0
        goldTilesRemaining: 3,
        itemTilesRemaining: 3,
        monsterTilesRemaining: 4,
        boardsSurvived: 0
    };

    return saveBoard(newBoard, newChar);
}

export default newCharacter;