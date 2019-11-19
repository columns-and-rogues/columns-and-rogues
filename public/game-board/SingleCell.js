import Component from '../Component.js';

class SingCell extends Component {
    renderHTML() {
        const cell = this.props.cell;

        return /*html*/ `
            <div class="cell" id=${cell}>
                <span>X</span>
            </div>
        `;
    }
}

export default SingCell;