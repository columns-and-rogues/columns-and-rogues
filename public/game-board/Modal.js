import Component from '../Component.js';


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
        let randomMonster = {};
        let randomItem = {};
        let modalImage;
        let dynamicImage;
        let modalText;
        let hideGetItem = 'hidden';
        let disableInput = '';

        switch (cell.contents){
            case 1:
                modalImage = 'gold-star.gif';
                modalText = 'This is the text for finding gold!';
                character.gold++;
                break;
            case 2:
                randomMonster = monstersList[Math.floor(Math.random() * monstersList.length)];
                dynamicImage = randomMonster.image;

                modalImage = 'monster-icon.png';
                modalText = `Argh! Attacked by a wild ${randomMonster.name}! It has ${randomMonster.hp} HP, rolls a 1d${randomMonster.dice} for attack, and is ${randomMonster.effect}. What item will you use to attack it?`;
                character.hp--;
                break;
            case 3:
                randomItem = itemsList[Math.floor(Math.random() * itemsList.length)];
                dynamicImage = randomItem.image;

                modalImage = 'item-logo.gif';
                modalText = `You found a ${randomItem.name}! It has a 1d${randomItem.dice} for attack and applies a ${randomItem.effect} effect on use.`;
                disableInput = 'disabled=true';
                hideGetItem = '';
                character.hp++;
                break;
            case 4:
                modalImage = 'temp-char.png';
                //adjust stats and whatever else
                break;
            case 5:
                modalImage = '';
                //endgame
                break;
        }
        
        return /*html*/`
            <section class='modal'>
                <div class='modal-content'>
                    <img src='./assets/${modalImage}'>
                    <img class=${hideGetItem} src=${dynamicImage}>
                    <div>${modalText}</div>
                    <button id="getItem" class='${hideGetItem}'>Claim the ${randomItem.name}!</button>
                    <button id="submit" ${disableInput}>Change Me!</button>
                </div>
            </section>
        `;
    }
}

export default Modal;