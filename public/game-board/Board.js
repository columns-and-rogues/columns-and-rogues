import Component from '../Component.js';
import SingleCell from './SingleCell.js';
import boardCellArray from './boardCellArray.js';

class Board extends Component {
    onRender(element) {
        boardCellArray.forEach(cell => {
            const props = { cell };
            const singleCell = new SingleCell(props);
            const singleCellDOM = singleCell.renderDOM();
            element.appendChild(singleCellDOM);
        });
        //This currently selects the first cell, if we want random placement will need to figure out why selecting id isn't working.
        const charCell = element.querySelector('#r0-y0');
        const charImage = document.createElement('img');
        charImage.src = './assets/temp-char.png';
        charImage.id = 'character';
        charCell.appendChild(charImage);
    }

    renderHTML() {
        return /*html*/`
            <div id="board">
            </div>
            `;
    }
}

export default Board;