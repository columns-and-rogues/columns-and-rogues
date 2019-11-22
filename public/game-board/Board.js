import Component from '../Component.js';
import SingleCell from './SingleCell.js';
import newCharacter from '../util/newCharacter.js';

class Board extends Component {
    onRender(element) {
        let boardArr = this.props.boardArr;
        const boardSize = this.props.boardSize;

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

        const gameOver = element.querySelector('#game-over');
        const restartButton = element.querySelector('#restart-button');
        restartButton.addEventListener('click', () => {
            newCharacter();
            gameOver.classList.add('hidden');
            window.location.reload(true);
        });
    }

    renderHTML() {
        const character = this.props.character;
        const boardSize = this.props.boardSize;
        const backgroundNum = this.props.backgroundNum;
        let gridString = '';
        for (let i = 0; i < boardSize; i++) {
            gridString = gridString.concat(`1fr `);
        }
        gridString = gridString.substring(0, gridString.length - 1);

        return /*html*/`
            <div id="board"
                class="backgroundImage-${backgroundNum}"
                style="grid-template-rows: ${gridString};
                grid-template-columns: ${gridString};">
                <div id="game-over" class="hidden">
                    <h2>Game Over</h2>
                    <ul>
                        <li class="dead">Levels Complete: ${character.boardsSurvived}</li>
                        <li class="dead">Gold: ${character.gold}</li>
                    </ul>
                    <button id="restart-button">Start New Game</button>
                </div>
            </div>
            `;
    }
}

export default Board;