import Component from '../Component.js';
import SingleCell from './SingleCell.js';

class Board extends Component {
    onRender(element) {
        //const board = this.props.board;

        //DELETE ME - TEMP BOARD
        const board = [1, 2, 3, 4, 5];

        board.forEach(cell => {
            const props = { cell };
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