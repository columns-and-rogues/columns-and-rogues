import Component from '../Component.js';
/*
Look at case 3 for example of how to make these modal components dynamic.
For monsters / gold, we'll want some kind of interactivity with a button that is normally hidden. When it comes up, hide the close modal button and reveal that button. When they have finished the encounter, hide the interaction buttons (use item 1,2,3,4,5 for items, double or nothing for gold) and pass down / pass up with props / callback functions. I tried to do this but my brain isn't working.
*/

class Modal extends Component {
    
    renderHTML(){
        const modalDisplay = this.props.modalDisplay;
        if (!modalDisplay) {
            return /*html*/`
            <div id="remove-modal" class="modal hidden"></div>
        `;
        }
        if (document.getElementById('remove-modal')) document.getElementById('remove-modal').remove();
        const cell = this.props.cell;
        const character = this.props.character;
        const itemsList = this.props.itemArray;
        const monstersList = this.props.monsterArray;
        let goldFound = 0;
        let randomMonster = {};
        let randomItem = {};
        let modalImage;
        let dynamicImage;
        let modalText;
        let modalButtonText;
        let itemUsedToAttack;
        let thisMonsterHp;
        let myRoll;
        let monsterRoll;
        //let ourItem = 1;
        //let tempArr = [];
        let disableInput = '';
        let hideDynamicImage = 'hidden';

        switch (cell.contents){
            case 1:
                modalImage = 'gold-star.gif';
                goldFound = Math.floor(Math.random() * 2) + 1;
                character.gold = character.gold + goldFound;
                modalText = `You found ${goldFound} piece(s) of gold`;
                modalButtonText = `Pick up gold`;
                break;
            case 2:
                randomMonster = monstersList[Math.floor(Math.random() * monstersList.length)];
                thisMonsterHp = randomMonster.hp;
                dynamicImage = randomMonster.image;
                hideDynamicImage = '';

                modalImage = 'monster-icon.gif';
                modalText = `Argh! Attacked by a wild ${randomMonster.name}! It has ${randomMonster.hp} HP, rolls a 1d${randomMonster.dice} for attack, and is ${randomMonster.effect}. What item will you use to attack it?`;
                modalButtonText = 'Fight Monster';
                
                itemUsedToAttack = prompt(`Which Item will you use to attack the ${randomMonster.name}? Input a number 1-5.`, 1);
                
                do {
                    /*switch (itemUsedToAttack){
                        case 1:
                            console.log(ourItem);
                            ourItem = character.itemOne;
                            tempArr = itemsList.filter((item) => ourItem = item.id);
                            ourItem = tempArr[0].dice;
                            break;
                        case 2:
                            ourItem = character.itemTwo;
                            break;
                        case 3:
                            ourItem = character.itemThree;
                            break;
                        case 4:
                            ourItem = character.itemFour;
                            break;
                        case 5:
                            ourItem = character.itemFive;
                            break;
                    }*/

                    myRoll = Math.floor(Math.random() * 6) + 1;
                    monsterRoll = (Math.floor(Math.random() * randomMonster.dice));

                    if (myRoll >= monsterRoll){
                        thisMonsterHp--;
                        alert(`You rolled a ${myRoll} and ${randomMonster.name} rolled a ${monsterRoll}! ${randomMonster.name} took 1 hp of damage! ${randomMonster.name} has ${thisMonsterHp} hp left.`);
                    } else {
                        character.hp--;
                        alert(`You rolled a ${myRoll} and ${randomMonster.name} rolled a ${monsterRoll}! ${character.displayName} took 1 hp of damage! ${randomMonster.name} has ${thisMonsterHp} hp left and you have ${character.hp} hp left.`);
                    }
                } while (thisMonsterHp > 0 && character.hp > 0);

                alert(`${character.displayName} defeated the ${randomMonster.name}!`);
                break;
                // itemUsedToAttack !== null && itemUsedToAttack !== 0 && typeof(itemUsedToAttack) === 'number' && itemUsedToAttack <= 5
            case 3:
                randomItem = itemsList[Math.floor(Math.random() * itemsList.length)];
                dynamicImage = randomItem.image;
                hideDynamicImage = '';
                modalImage = 'item-logo.png';
                modalText = `You found a ${randomItem.name}! It has a 1d${randomItem.dice} for attack and applies a ${randomItem.effect} effect on use.`;
                modalButtonText = `Pick up the ${randomItem.name}.`;

                if (!character.itemTwo) character.itemTwo = randomItem.id;
                else if (!character.itemThree) character.itemThree = randomItem.id;
                else if (!character.itemFour) character.itemFour = randomItem.id;
                else if (!character.itemFive) character.itemFive = randomItem.id;
                else modalButtonText = 'You have no more room in your inventory!';
                break;
            case 4:
                modalImage = 'temp-char.png';
                modalText = /*html*/`
                    <div id="win-modal-display">
                        <h3>Levels Survived: ${character.boardsSurvived}</h3>
                        <h4>HP: ${character.hp}</h4>
                        <h4>Gold: ${character.gold}</h4>
                    <div>
                    `;
                modalButtonText = 'Next Level';
                break;
        }
        
        return /*html*/`
            <section class='modal'>
                <div class='modal-content'>
                    <img src='./assets/${modalImage}'>
                    <img class=${hideDynamicImage} src=${dynamicImage}>
                    <div>${modalText}</div>
                    <button id="submit" ${disableInput}>${modalButtonText}</button>
                </div>
            </section>
        `;
    }
}

export default Modal;