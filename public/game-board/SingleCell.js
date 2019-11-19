import Component from '../Component.js';

class SingCell extends Component {
    renderHTML() {
        const cell = this.props.cell;

        return /*html*/ `
            <span class="cell column-${cell.x} row-${cell.y}" id="r${cell.x}-y${cell.y}">
            </span>
        `;
    }
}

export default SingCell;