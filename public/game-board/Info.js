import Component from '../Component.js';

class Info extends Component {
    renderHTML() {
        //const info = this.props.info;

        //REPLACE ME
        //Not sure what info will go here, and when and how it will populate. So here's a place holder
        const item = [
            {
                name: 'Sword'
            },
            {
                name: 'Sheild'
            },
            {
                name: 'Bow'
            },
            {
                name: 'Magic Stick'
            },
            {
                name: 'A Talking Cat'
            },
        ];

        return /*html*/`
        <div id="info">
            <ul>Items
                <li id="item-1">Item 1: ${item[0].name}</li>
                <li id="item-2">Item 2: ${item[1].name}</li>
                <li id="item-3">Item 3: ${item[2].name}</li>
                <li id="item-4">Item 4: ${item[3].name}</li>
                <li id="item-5">Item 5: ${item[4].name}</li>
        </div>
        `;
    }
}

export default Info;