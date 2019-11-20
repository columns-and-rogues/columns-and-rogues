import Component from '../Component.js';

class Stats extends Component {
    renderHTML() {
        //Eventual Stats
        //const stats = this.props.stats;

        //TEMP INFO REPLACE ME!!!
        const user = 'Danny C!';
        const stats = {
            hp: 100,
            gold: 75
        };

        return /*html*/`
        <div id="stats">
            <span id="user">User Name ${user}</span>
            <span id="hp">HP: ${stats.hp} </span>
            <span id="gold">Gold: ${stats.gold}</span>
        </div>
        `;
    }
}

export default Stats;
