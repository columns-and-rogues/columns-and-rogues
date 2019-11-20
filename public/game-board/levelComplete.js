import character from './character-obj.js';

// let backgroundImg = ['../assets/forest-background-image1.gif', '../assets/underwater-background-image1', '../assets/village-background-image1'
// ];

// let backgroundCount = 0; 

function levelComplete() {
    //STRETCH - play animation of going through door.
    //STRETCH - play sound of door.
    character.hp = character.hp + 10;
    character.gold = character.gold + 50;
    //display stat changes
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
}

export default levelComplete;