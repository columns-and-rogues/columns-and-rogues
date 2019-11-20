import Component from '../Component.js';
import SingleCell from './SingleCell.js';
import { createBoard } from './boardCellArray.js';

class Board extends Component {
    onRender(element) {
        
        let character = this.props.character;
        const boardSize = this.props.boardSize;
        const boardArrayObj = createBoard(boardSize);

        boardArrayObj.forEach(cell => {
            const props = { cell: cell, character: this.props.character, boardSize: boardSize };
            const singleCell = new SingleCell(props);
            const singleCellDOM = singleCell.renderDOM();
            element.appendChild(singleCellDOM);
        });
    }

    renderHTML() {
        const boardSize = this.props.boardSize;
        let gridString = '';
        for (let i = 0; i < boardSize; i++) {
            gridString = gridString.concat(`1fr `);
        }
        gridString = gridString.substring(0, gridString.length - 1);

        return /*html*/`
            <div id="board" 
                style="grid-template-rows: ${gridString};
                grid-template-columns: ${gridString};">
            </div>
            `;
    }
}

export default Board;