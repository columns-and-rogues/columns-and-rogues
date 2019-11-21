import Component from '../Component.js';
import SingleCell from './SingleCell.js';

class Board extends Component {
    onRender(element) {
        let boardArr = this.props.boardArr;
        const boardSize = this.props.boardSize;
        const character = this.props.character;

        boardArr.forEach(cell => {
            const props = { 
                cell: cell, 
                character: this.props.character, 
                boardSize: boardSize, 
                doorLocation: this.props.doorLocation };
                
            const singleCell = new SingleCell(props);
            const singleCellDOM = singleCell.renderDOM();
            element.appendChild(singleCellDOM);
        });
    }

    renderHTML() {
        const character = this.props.character;
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
                <div id="game-over" class="hidden">
                    <h2>Game Over</h2>
                    <ul>
                        <li class="dead">Levels Complete: ${character.boardSurvived}</li>
                        <li class="dead">Gold: ${character.gold}</li>
                    </ul>
                </div>
            </div>
            `;
    }
}

export default Board;