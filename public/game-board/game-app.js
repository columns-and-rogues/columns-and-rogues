import Compenent from '../Component.js';
import Header from '../common/header.js';
import Stats from './Stats.js';
import Info from './Info.js';
import Board from './Board.js';
import Character from './Character.js';

//Still need to make
//import Modale from './Modale.js';


class GameApp extends Compenent {
    onRender(element) {
        let x = 0;
        let y = 0;

        const header = new Header();
        element.prepend(header.renderDOM());

        const main = element.querySelector('.main');

        const stats = new Stats({ /*PROPS!!!!*/ });
        main.appendChild(stats.renderDOM());

        const info = new Info({ /*PROPS!!!!*/ });
        main.appendChild(info.renderDOM());

        const board = new Board({ /*PROPS!!!!*/ });
        main.appendChild(board.renderDOM());

        const charCell = element.querySelector('#x0-y0');
        const character = new Character();
        const characterDOM = character.renderDOM();
        charCell.appendChild(characterDOM);

        // const modale = new Modale({ /*PROPS!!!!*/ });
        // main.appendChild(modale.renderDOM());

        document.addEventListener('keydown', (event) => {
            const keyname = event.key;
            
            if (keyname === 'ArrowUp' && y >= 1) {
                charCell.removeChild(characterDOM);
                y--;
                const character = new Character();
                const charCell = element.querySelector(`#x${x}-y${y}`);
                const characterDOM = character.renderDOM();
                charCell.appendChild(characterDOM);

            }
            if (keyname === 'ArrowDown' && y <= 3) {
                charCell.removeChild(characterDOM);
                y++;
                const character = new Character();
                const charCell = element.querySelector(`#x${x}-y${y}`);
                const characterDOM = character.renderDOM();
                charCell.appendChild(characterDOM);
            }
            if (keyname === 'ArrowRight' && x <= 3) {
                charCell.removeChild(characterDOM);
                x++;
                const character = new Character();
                const charCell = element.querySelector(`#x${x}-y${y}`);
                const characterDOM = character.renderDOM();
                charCell.appendChild(characterDOM);
            }
            if (keyname === 'ArrowLeft' && x >= 1) {
                charCell.removeChild(characterDOM);
                x--;
                const character = new Character();
                const charCell = element.querySelector(`#x${x}-y${y}`);
                const characterDOM = character.renderDOM();
                charCell.appendChild(characterDOM);
            }


        })
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