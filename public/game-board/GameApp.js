import Component from '../Component.js';
import Header from '../common/header.js';
import Stats from './Stats.js';
import Info from './Info.js';
import Board from './Board.js';
import character from './character-obj.js';
import { acceptableKeys } from '../util/acceptableKeys.js';
import levelComplete from './levelComplete.js';

//Still need to make
//import Modale from './Modale.js';
let boardSize = 2;

class GameApp extends Component {

    onRender(element) {
        let boardLimit = boardSize - 1;
        let limit = boardSize - 2;

        if (this.handler) document.removeEventListener('keydown', this.handler);

        this.handler = (event) => {
            const keyname = event.key;
            if (!acceptableKeys.includes(keyname)) return;
            if (keyname === 'ArrowLeft' && character.x >= 1) character.x--;
            if (keyname === 'ArrowUp' && character.y >= 1) character.y--;
            if (keyname === 'ArrowRight' && character.x <= limit) character.x++;
            if (keyname === 'ArrowDown' && character.y <= limit) character.y++;
            
            if (character.x === boardLimit && 
                character.y === boardLimit && 
                keyname === 'Enter'){
                levelComplete();
                boardSize = boardSize + 1;
                this.update(boardSize);
            }
            board.update(boardSize);
        };

        document.addEventListener('keydown', this.handler);

        const header = new Header();
        element.prepend(header.renderDOM());

        const main = element.querySelector('.main');

        const stats = new Stats({ /*PROPS!!!!*/ });
        main.appendChild(stats.renderDOM());

        const info = new Info({ /*PROPS!!!!*/ });
        main.appendChild(info.renderDOM());

        const board = new Board({ character: character, boardSize: boardSize });
        main.appendChild(board.renderDOM());

        
        // const modale = new Modale({ /*PROPS!!!!*/ });
        // main.appendChild(modale.renderDOM());
    }

    renderHTML() {
        return /*html*/`
        <div>
            <div class="main">
            </div>
        </div>
        `;
    }
}

export default GameApp;