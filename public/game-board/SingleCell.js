import Component from '../Component.js';
import Character from './Character.js';

class SingCell extends Component {
    onRender(span) {
        if (this.props.character) {
            const character = new Character();
            span.appendChild(character);
        }
    }

    renderHTML() {
        const cell = this.props.cell;
        const cellID = `x${cell.x}-y${cell.y}`;

        return /*html*/ `
            <span class="cell column-${cell.x} row-${cell.y}" id="${cellID}">
            </span>
        `;
    }
}

export default SingCell;