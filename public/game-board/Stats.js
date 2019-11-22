import Component from '../Component.js';

class Stats extends Component {
    renderHTML() {
        const character = this.props.character;

        return /*html*/`
        <div id="stats">
            <span id="user">Name ${character.displayName}</span>
            <span id="hp">HP: ${character.hp} </span>
            <span id="gold">Gold: ${character.gold}</span>
            <span id="level">Level: ${character.boardsSurvived}</span>
        </div>
        `;
    }
}

export default Stats;
