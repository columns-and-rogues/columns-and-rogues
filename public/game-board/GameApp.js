import Component from '../Component.js';
import Header from '../common/header.js';
import Stats from './Stats.js';
import Info from './Info.js';
import Board from './Board.js';
import character from './character-obj.js';

//Still need to make
//import Modale from './Modale.js';


class GameApp extends Component {

    onRender(element) {
        const header = new Header();
        element.prepend(header.renderDOM());

        const main = element.querySelector('.main');

        const stats = new Stats({ /*PROPS!!!!*/ });
        main.appendChild(stats.renderDOM());

        const info = new Info({ /*PROPS!!!!*/ });
        main.appendChild(info.renderDOM());

        const board = new Board({ character });
        main.appendChild(board.renderDOM());

        document.addEventListener('keydown', (event) => {
            const keyname = event.key;
            if (keyname === 'ArrowDown' && character.y <= 3) {
                character.y++;
            } else if (keyname === 'ArrowUp' && character.y >= 1) {
                character.y--;
            } else if (keyname === 'ArrowRight' && character.x <= 3) {
                character.x++;
            } else if (keyname === 'ArrowLeft' && character.x >= 1) {
                character.x--;
            } else {
                return;
            }
            board.update(character);
        });

        
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