import Component from '../Component.js';

const evaluateItems = (items)
class Info extends Component {
    renderHTML() {
        const character = this.props.character;
        const items = this.props.itemArray;
        const itemsToDisplay = [];

        ['itemOne', 'itemTwo', 'itemThree', 'itemFour', 'itemFive']
            .forEach(itemName => {
                const toPush = character[itemName] > 0
                    ? items.find(({ id }) => id === character[itemName])
                    : { name: 'Empty Item Slot' };

                itemsToDisplay.push(toPush);
            });


        // this list of similar li and buttons could also be created with a forEach
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