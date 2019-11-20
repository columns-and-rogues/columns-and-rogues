import Component from '../Component.js';
import SingleCell from './SingleCell.js';
import boardCellArray from './boardCellArray.js';
import levelComplete from './levelComplete.js';

class Board extends Component {
    onRender(element) {
        boardCellArray.forEach(cell => {
            const props = { cell: cell, character: this.props.character };
            const singleCell = new SingleCell(props);
            const singleCellDOM = singleCell.renderDOM();
            element.appendChild(singleCellDOM);
        });
    }

    renderHTML() {
        return /*html*/`
            <div id="board">
            </div>
            `;
    }
}

export default Board;