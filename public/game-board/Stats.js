import Component from '../Component.js';

class Stats extends Component {
    renderHTML() {
        const username = this.props.user || 'Username';
        const hp = this.props.hp || '100';
        const gold = this.props.gold || '20';
        const userImage = this.props.userImage;

        return /*html*/`
            <div class="user-stats">
                <img class="user-image" src="${userImage}" alt="Default User">
                <h3 class="username">${username}</h3>
                <p class="hp-section"> HP: ${hp}</p>
                <p class="gold-section"> Gold: ${gold}</p>
            </div>
        `;
    }
}

export default Stats;

