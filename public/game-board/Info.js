import Component from '../Component.js';

class Info extends Component {

    onRender(infoDom) {
        
        const deleteItemTwo = () => {
            character.itemTwo = 0;
            this.update( character: character ); // remember this
        };
        const deleteItemThree = () => {
            character.itemThree = 0;
            this.update();
        };
        const deleteItemFour = () => {
            character.itemFour = 0;
            this.update();
        };
        const deleteItemFive = () => {
            character.itemFive = 0;
            this.update();
        };

        document.getElementById('delete-item-').addEventListener('click', deleteItemTwo);
        document.getElementById('delete-item-3').addEventListener('click', deleteItemThree);
        document.getElementById('delete-item-4').addEventListener('click', deleteItemFour);
        document.getElementById('delete-item-5').addEventListener('click', deleteItemFive);
        };
    }

    renderHTML() {

            const itemsToDisplay = [];
            const itemsToDisplay = this.props.itemsToDisplay;
            
            if (character.itemOne > 0) {
                itemsToDisplay.push(itemArray.filter((item) => item.id === character.itemOne)[0]);
            } else itemsToDisplay.push({ name: 'Empty Item Slot' });
            if (character.itemTwo > 0) {
                itemsToDisplay.push(itemArray.filter((item) => item.id === character.itemTwo)[0]);
            } else itemsToDisplay.push({ name: 'Empty Item Slot' });
            if (character.itemThree > 0) {
                itemsToDisplay.push(itemArray.filter((item) => item.id === character.itemThree)[0]);
            } else itemsToDisplay.push({ name: 'Empty Item Slot' });
            if (character.itemFour > 0) {
                itemsToDisplay.push(itemArray.filter((item) => item.id === character.itemFour)[0]);
            } else itemsToDisplay.push({ name: 'Empty Item Slot' });
            if (character.itemFive > 0) {
                itemsToDisplay.push(itemArray.filter((item) => item.id === character.itemFive)[0]);
            } else itemsToDisplay.push({ name: 'Empty Item Slot' });

        

        return /*html*/`
        <div id="info">
            <ul class = 'items'>Items
                <li id="item-1">Item 1: ${itemsToDisplay[0].name}</li>
                <li id="item-2">Item 2: ${itemsToDisplay[1].name}</li>
                <button id="delete-item-2">Throw Away!</button>
                <li id="item-3">Item 3: ${itemsToDisplay[2].name}</li>
                <button id="delete-item-3">Throw Away!</button>
                <li id="item-4">Item 4: ${itemsToDisplay[3].name}</li>
                <button id="delete-item-4">Throw Away!</button>
                <li id="item-5">Item 5: ${itemsToDisplay[4].name}</li>
                <button id="delete-item-5">Throw Away!</button>
                <li></li>
                <button id="save-button">Save Game</button>
        </div>
        `;
    }
}

export default Info;