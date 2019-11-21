import Component from '../Component.js';
import Header from '../common/header.js';
import Stats from './Stats.js';
import Info from './Info.js';
import Board from './Board.js';
import character from './character-obj.js';
import { acceptableKeys } from '../util/acceptableKeys.js';
import levelComplete from '../util/levelComplete.js';
import { doorLocation } from '../util/doorLocation.js';
import probabilityFunction from '../util/probability-function.js';
import { createBoard } from './boardCellArray.js';
import Modal from './Modal.js';

//Still need to make
//import Modale from './Modale.js';
let boardSize = 2;

class GameApp extends Component {

    onRender(element) {
        const doorLoc = doorLocation(boardSize);
        const boardArrayObj = createBoard(boardSize);
        //let boardLimit = boardSize - 1;
        let limit = boardSize - 2;

        console.log(boardArrayObj);

        if (this.handler) document.removeEventListener('keydown', this.handler);

        this.handler = (event) => {
            const keyname = event.key;
            if (!acceptableKeys.includes(keyname)) return;

            if (keyname === 'ArrowLeft' && character.x >= 1) character.x--;
            if (keyname === 'ArrowUp' && character.y >= 1) character.y--;
            if (keyname === 'ArrowRight' && character.x <= limit) character.x++;
            if (keyname === 'ArrowDown' && character.y <= limit) character.y++;
            
            let currentCell = boardArrayObj.find(object => (object.x === character.x && object.y === character.y));
        

            if (currentCell.contents === null) currentCell.contents = probabilityFunction(character);

            //MODAL HERE 
            
            const myModal = new Modal({ cell: currentCell, character: character, doorLocation: doorLoc });
            element.prepend(myModal.renderDOM());
            console.log(character);
            
            if (character.x === doorLoc.x && 
                character.y === doorLoc.y && 
                keyname === 'Enter'){
                levelComplete();
                boardSize = boardSize + 1;
                this.update(boardSize);
                return;
            }
            board.update();
        };

        document.addEventListener('keydown', this.handler);

        const header = new Header();
        element.prepend(header.renderDOM());

        const main = element.querySelector('.main');
        const boardSpot = element.querySelector('.board-location'); 

        const stats = new Stats({ /*PROPS!!!!*/ });
        boardSpot.appendChild(stats.renderDOM());

        const info = new Info({ /*PROPS!!!!*/ });
        main.appendChild(info.renderDOM());

        const board = new Board({ character: character, boardArrayObj: boardArrayObj, boardSize: boardSize, doorLocation: doorLoc });
        boardSpot.appendChild(board.renderDOM());

        
        // const modale = new Modale({ /*PROPS!!!!*/ });
        // main.appendChild(modale.renderDOM());
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