import Component from '../Component.js';

class Info extends Component {
    renderHTML() {
        const character = this.props.character;
        const items = this.props.itemArray;
        const itemsToDisplay = [];
        
        if (character.itemOne > 0) {
            itemsToDisplay.push(items.filter((item) => item.id === character.itemOne)[0]);
        } else itemsToDisplay.push({ name: 'Empty Item Slot' });
        if (character.itemTwo > 0) {
            itemsToDisplay.push(items.filter((item) => item.id === character.itemTwo)[0]);
        } else itemsToDisplay.push({ name: 'Empty Item Slot' });
        if (character.itemThree > 0) {
            itemsToDisplay.push(items.filter((item) => item.id === character.itemThree)[0]);
        } else itemsToDisplay.push({ name: 'Empty Item Slot' });
        if (character.itemFour > 0) {
            itemsToDisplay.push(items.filter((item) => item.id === character.itemFour)[0]);
        } else itemsToDisplay.push({ name: 'Empty Item Slot' });
        if (character.itemFive > 0) {
            itemsToDisplay.push(items.filter((item) => item.id === character.itemFive)[0]);
        } else itemsToDisplay.push({ name: 'Empty Item Slot' });

        return /*html*/`
        <div id="info">
            <ul class = 'items'>Items
                <li id="item-1">Item 1: ${itemsToDisplay[0].name}</li>
                <li id="item-2">Item 2: ${itemsToDisplay[1].name}</li>
                <button class="items-buttons" id="delete-item-2">Throw Away!</button>
                <li id="item-3">Item 3: ${itemsToDisplay[2].name}</li>
                <button class="items-buttons" id="delete-item-3">Throw Away!</button>
                <li id="item-4">Item 4: ${itemsToDisplay[3].name}</li>
                <button class="items-buttons" id="delete-item-4">Throw Away!</button>
                <li id="item-5">Item 5: ${itemsToDisplay[4].name}</li>
                <button class="items-buttons" id="delete-item-5">Throw Away!</button>
                <li></li>
                <button id="save-button">Save Game</button>
        </div>
        `;
    }
}

export default Info;