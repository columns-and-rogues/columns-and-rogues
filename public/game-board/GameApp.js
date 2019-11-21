import Component from '../Component.js';
import Header from '../common/header.js';
import Stats from './Stats.js';
import Info from './Info.js';
import Board from './Board.js';
import Modal from './Modal.js';
import runDeath from './death.js';
import Footer from '../common/Footer.js';

import levelComplete from '../util/levelComplete.js';
import probabilityFunction from '../util/probability-function.js';
import retrieveBoard from '../util/retrieveBoard.js';
import { acceptableKeys } from '../util/acceptableKeys.js';
import { doorLocation } from '../util/doorLocation.js';
import { getCharacterById } from '../services/game-api.js';

class GameApp extends Component {
    async onRender(element) {
        let character = await getCharacterById(localStorage.getItem('USERID')
        );

        const main = element.querySelector('.main');
        const boardSpot = element.querySelector('.board-location'); 

        const pulledBoard = retrieveBoard(character);
        const boardSize = Math.sqrt(pulledBoard.length);
        const doorLoc = doorLocation(boardSize);
        //const modalBool = false;
        //const pulledBoard = createBoard(boardSize);
        let limit = boardSize - 2;
        
        //KEY CONTROLS//
        if (this.handler) document.removeEventListener('keydown', this.handler);
        this.handler = (event) => {
            const keyname = event.key;
            if (!acceptableKeys.includes(keyname)) return;

            if (keyname === 'ArrowLeft' && character.x >= 1) character.x--;
            if (keyname === 'ArrowUp' && character.y >= 1) character.y--;
            if (keyname === 'ArrowRight' && character.x <= limit) character.x++;
            if (keyname === 'ArrowDown' && character.y <= limit) character.y++;
            
            let currentCell = pulledBoard.find(object => (object.x === character.x && object.y === character.y));
        
            if (currentCell.contents === null) {
                currentCell.contents = probabilityFunction(character);
                if (currentCell.contents !== 0) {
                    const myModal = new Modal({ cell: currentCell, character: character, doorLocation: doorLoc });
                    element.prepend(myModal.renderDOM());
                    // accept both changes
                    stats.update();
                    if (character.hp < 1){
                        runDeath(character);
                        document.removeEventListener('keydown', this.handler);
                        // something happens
                        return;
                    }
                }
            }
            
            if (character.x === doorLoc.x && 
                character.y === doorLoc.y && 
                keyname === 'Enter'){
                levelComplete();
                //boardSize = boardSize + 1;
                this.update(boardSize);
                return;
            }
            board.update();
        };

        document.addEventListener('keydown', this.handler);

        const header = new Header();
        element.prepend(header.renderDOM());

        const stats = new Stats({ character: character });
        boardSpot.appendChild(stats.renderDOM());

        const info = new Info({ character: character });
        main.appendChild(info.renderDOM());

        const board = new Board({ 
            character: character, 
            boardArr: pulledBoard, 
            boardSize: boardSize, 
            doorLocation: doorLoc });
        boardSpot.appendChild(board.renderDOM());

        const footer = new Footer();
        element.appendChild(footer.renderDOM());
    }

    renderHTML() {
        return /*html*/`
        <div class="stats-here">
            <div class="main">
                <div class="board-location">
                </div>
            </div>
        </div>
        `;
    }
}

export default GameApp;