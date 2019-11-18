import Compenent from '../Component.js';
//import Header from '../common/header.js';
import Stats from './Stats.js';
import Info from './Info.js';

//Still need to make
import Board from './Board.js';
//import Modale from './Modale.js';


class GameApp extends Compenent {
    onRender(element) {
        // const header = new Header();
        // element.prepend(header.renderDOM());

        const main = element.querySelector('.main');

        const stats = new Stats({ /*PROPS!!!!*/ });
        main.appendChild(stats.renderDOM());

        const info = new Info({ /*PROPS!!!!*/ });
        main.appendChild(info.renderDOM());

        const board = new Board({ /*PROPS!!!!*/ });
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