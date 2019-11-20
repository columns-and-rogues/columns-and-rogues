import character from './character-obj.js';
import { updateCharcter } from '../services/game-api.js';
let boardSize = 5;

<<<<<<< HEAD
// let backgroundImg = ['../assets/forest-background-image1.gif', '../assets/underwater-background-image1', '../assets/village-background-image1'
// ];

// let backgroundCount = 0; 

function levelComplete() {
=======
function levelComplete(gameApp) {
>>>>>>> 83d1bcfb97c333f7b3c69a6fa8c74276ae33068f
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
<<<<<<< HEAD
    alert(`You Won!
    Save and Continue?`);

    // ('#board').css('background-image', 'url(' + backgroundImg[backgroundCount] + ')'); 
    
    // backgroundCount++;
    
    // if (backgroundCount > backgroundImg.length - 1) backgroundCount = 0;
    // ('#board').css('background-image', 'url(' + backgroundImg[backgroundCount] + ')');


    //
    //if yes, setup next board
    console.log(character);
=======
    //updateCharcter(character);

    //Reset Board
    // alert('Levele Complete');

>>>>>>> 83d1bcfb97c333f7b3c69a6fa8c74276ae33068f
}

export default levelComplete;