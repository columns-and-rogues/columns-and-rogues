import Component from '../Component.js';
import SingleCell from './SingleCell.js';
import boardCellArray from './boardCellArray.js';
import Character from './Character.js';

class Board extends Component {
    onRender(element) {
        boardCellArray.forEach(cell => {
            const props = { cell };
            const singleCell = new SingleCell(props);
            const singleCellDOM = singleCell.renderDOM();
            element.appendChild(singleCellDOM);
        });

        const charCell = element.querySelector('#r0-y0');
        const character = new Character();
        const characterDOM = character.renderDOM();
        charCell.appendChild(characterDOM);
    }

    renderHTML() {
        return /*html*/`
            <div id="board">
            </div>
            `;
    }
}

export default Board;