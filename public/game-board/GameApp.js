import Component from '../Component.js';
import Header from '../common/header.js';
import Stats from './Stats.js';
import Info from './Info.js';
import Board from './Board.js';
import Modal from './Modal.js';
import Footer from '../common/Footer.js';
import levelComplete from '../util/levelComplete.js';
import probabilityFunction from '../util/probability-function.js';
import saveBoard from '../util/saveBoard.js';
import retrieveBoard from '../util/retrieveBoard.js';
import { acceptableKeys } from '../util/acceptableKeys.js';
import { doorLocation } from '../util/doorLocation.js';
import { getCharacterById, getItems, getMonsters, updateCharacter } from '../services/game-api.js';


let disableMovement = false; 

class GameApp extends Component {
    async onRender(element) {
        let character = await getCharacterById(localStorage.getItem('USERID')
        );
        character.itemTilesRemaining = 15;
        const itemArray = await getItems();
        const monsterArray = await getMonsters();

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
            if (!acceptableKeys.includes(keyname) || disableMovement === true) return;

            if (keyname === 'ArrowLeft' && character.x >= 1) character.x--;
            if (keyname === 'ArrowUp' && character.y >= 1) character.y--;
            if (keyname === 'ArrowRight' && character.x <= limit) character.x++;
            if (keyname === 'ArrowDown' && character.y <= limit) character.y++;
            
            let currentCell = pulledBoard.find(object => (object.x === character.x && object.y === character.y));
            
            if (currentCell.contents === null) {
                currentCell.contents = probabilityFunction(character);
                if (currentCell.contents !== 0) {
                    const myModal = new Modal({ 
                        cell: currentCell,
                        itemArray: itemArray,
                        monsterArray: monsterArray, 
                        character: character,
                        modalDisplay: true, });
                    element.prepend(myModal.renderDOM());
                    stats.update();
                    const modalButton = document.getElementById('submit');

                    disableMovement = true; 
                    modalButton.addEventListener('click', () => myModal.update({ modalDisplay: false }, disableMovement = false)
                    );
                }
            }    
            
            if (character.x === doorLoc.x && 
                character.y === doorLoc.y && 
                keyname === 'Enter'){
                    
                currentCell.contents = 4;
                const endGameModal = new Modal({
                    cell: currentCell, 
                    character: character,
                    doorLocation: doorLoc });
                element.prepend(endGameModal.renderDOM());

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






        
        const info = new Info({ itemsToDisplay: [
            { name: 'Empty Item Slot' },
            { name: 'Empty Item Slot' },
            { name: 'Empty Item Slot' },
            { name: 'Empty Item Slot' },
            { name: 'Empty Item Slot' }
        ] });
        main.appendChild(info.renderDOM());
        // adding save button event listener
        const saveEvent = async() => {
            saveBoard(pulledBoard, character);
            await updateCharacter(character);
        };

        document.getElementById('save-button').addEventListener('click', saveEvent);
        // add delete function to info pane for discarding items
        const deleteItemTwo = () => {

            

            console.log(Date.now());
            console.log(character.itemTwo);
            info.update({ itemsToDisplay,  });
        };
        const deleteItemThree = () => {
            character.itemThree = 0;
            info.update();
        };
        const deleteItemFour = () => {
            character.itemFour = 0;
            info.update();
        };
        const deleteItemFive = () => {
            character.itemFive = 0;
            info.update();
        };

        document.getElementById('delete-item-3').addEventListener('click', deleteItemThree);
        document.getElementById('delete-item-4').addEventListener('click', deleteItemFour);
        document.getElementById('delete-item-5').addEventListener('click', deleteItemFive);

        const board = new Board({ 
            character: character, 
            boardArr: pulledBoard, 
            boardSize: boardSize, 
            doorLocation: doorLoc });
        boardSpot.appendChild(board.renderDOM());

        const footer = new Footer();
        document.body.appendChild(footer.renderDOM());
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


const eventListenerFunction = (args) => do ByteLengthQueuingStrategy;

const thisClass = new ThisClass(eventListenerFunction);
element.prepend(thisClass.renderDOM());

