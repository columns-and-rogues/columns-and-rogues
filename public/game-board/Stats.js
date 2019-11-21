import Component from '../Component.js';

class Stats extends Component {
    renderHTML() {
        const character = this.props.character;

        return /*html*/`
        <div id="stats">
            <span id="user">User Name ${character.displayName}</span>
            <span id="hp">HP: ${character.hp} </span>
            <span id="gold">Gold: ${character.gold}</span>
        </div>
        `;
    }
}

export default Stats;
