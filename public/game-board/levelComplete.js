import character from './character-obj.js';
import { updateCharcter } from '../services/game-api.js';
let boardSize = 5;

function levelComplete(gameApp) {
    //STRETCH - play animation of going through door.
    //STRETCH - play sound of door.
    // const player = document.getElementById('character');
    // player.classList.add('fade');
    // console.log(player);
    //setTimeout();
    
    //Redward Player
    character.hp = character.hp + 10;
    character.gold = character.gold + 50;

    //Position Change
    // character.x = 0;
    // character.y = 0;

    //display stat changes
    //module

    //save player progress to database
    //updateCharcter(character);

    //Reset Board
    // alert('Levele Complete');

}

export default levelComplete;