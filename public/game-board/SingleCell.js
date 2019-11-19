import Component from '../Component.js';

class SingCell extends Component {
    renderHTML() {
        const cell = this.props.cell;

        return /*html*/ `
            <div class="column-${cell.x} row-${cell.y}" id="${cell.x}-${cell.y}">
                <span>${cell.x},${cell.y}</span>
            </div>
        `;
    }
}

export default SingCell;