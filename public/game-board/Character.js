import Component from '../Component.js';

class Character extends Component {
    renderHTML() {
        return /*html*/`
            <img
                src='./assets/temp-char.png'
                id='character'
                >
        `;
    }
}

export default Character;
