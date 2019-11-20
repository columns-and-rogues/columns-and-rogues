import Component from '../Component.js';
import SingleCell from './SingleCell.js';
import boardCellArray from './boardCellArray.js';
import levelComplete from './levelComplete.js';

class Board extends Component {
    onRender(element) {
        let character = this.props.character;

        boardCellArray.forEach(cell => {
            const props = { cell: cell, character: this.props.character };
            const singleCell = new SingleCell(props);
            const singleCellDOM = singleCell.renderDOM();
            element.appendChild(singleCellDOM);
        });
        if (character.x === 4 && character.y === 4) levelComplete();
    }

    renderHTML() {
        return /*html*/`
            <div id="board">
            </div>
            `;
    }
}

export default Board;