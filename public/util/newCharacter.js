import { createBoard } from '../game-board/boardCellArray.js';
import saveBoard from './saveBoard.js';

function newCharacter() {
    const newBoard = createBoard(5);
    let newChar = {
        userId: -1,
        hp: 5,
        gold: 0,
        itemOne: 1,
        itemTwo: 0,
        itemThree: 0,
        itemFour: 0,
        itemFive: 0,
        image: 'https://media.giphy.com/media/cbzgUUz1HDF5e/200w_d.gif',
        x: 0,
        y: 0,
        boardStateString: '',
        unknownTilesRemaining: newBoard.length - 1,
        goldTilesRemaining: 3,
        itemTilesRemaining: 3,
        monsterTilesRemaining: 4,
        boardsSurvived: 0
    };

    saveBoard(newBoard, newChar);
    return newChar;
}

export default newCharacter;
