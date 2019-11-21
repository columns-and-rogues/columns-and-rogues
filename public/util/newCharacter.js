// Generates a new character that can be saved to the database and returns that character. If we want control over character creation down the road, add parameters that influence the stats / random numbers / board size

import { createBoard } from '../game-board/boardCellArray.js';
import saveBoard from './saveBoard.js';

function newCharacter() {
    const newBoard = createBoard(5);
    let newChar = {
        userId: -1, // same here
        hp: 1,
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

    saveBoard(newBoard, newChar);
    return newChar;
}

export default newCharacter;