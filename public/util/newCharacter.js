// Generates a new character that can be saved to the database and returns that character. If we want control over character creation down the road, add parameters that influence the stats / random numbers / board size

import { createBoard } from '../game-board/boardCellArray.js';
import saveBoard from '../util/saveBoard.js';

function newCharacter() {
    const newBoard = createBoard(5);
    let newChar = {
        id: '', // need to get these from outside info / set in auth page before posting to DB
        user_id: -1, // same here
        hp: 5,
        gold: 0,
        item_one: 1,
        item_two: 0,
        item_three: 0,
        item_four: 0,
        item_five: 0,
        image: 'https://media.giphy.com/media/cbzgUUz1HDF5e/200w_d.gif',
        x: 0,
        y: 0,
        board_state_string: '',
        unknown_tiles_remaining: newBoard.length, // might need to be -1 depending on how we handle first square, this is for null contents at 0,0
        gold_tiles_remaining: 3,
        item_tiles_remaining: 3,
        monster_tiles_remaining: 4,
        boards_survived: 0
    };

    return saveBoard(newBoard, newChar);
}

export default newCharacter;