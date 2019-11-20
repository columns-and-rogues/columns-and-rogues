import character from './character-obj.js';

function levelComplete() {
    //STRETCH - play animation of going through door.
    //STRETCH - play sound of door.
    character.hp = character.hp + 10;
    character.gold = character.gold + 50;
    //display stat changes
    //save player progress to database
    alert(`You Won!
    Save and Continue?`);
    //
    //if yes, setup next board
    console.log(character);
}

export default levelComplete;