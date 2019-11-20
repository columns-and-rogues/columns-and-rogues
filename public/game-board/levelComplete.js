import character from './character-obj.js';
import { updateCharacter } from '../services/game-api.js';
let boardSize = 5;

// let backgroundImg = ['../assets/forest-background-image1.gif', '../assets/underwater-background-image1', '../assets/village-background-image1'
// ];

// let backgroundCount = 0; 

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
    alert(`You Won!
    Save and Continue?`);

    // ('#board').css('background-image', 'url(' + backgroundImg[backgroundCount] + ')'); 
    
    // backgroundCount++;
    
    // if (backgroundCount > backgroundImg.length - 1) backgroundCount = 0;
    // ('#board').css('background-image', 'url(' + backgroundImg[backgroundCount] + ')');


    //
    //if yes, setup next board
    console.log(character);
    //updateCharacter(character);

    //Reset Board
    // alert('Levele Complete');

}

export default levelComplete;