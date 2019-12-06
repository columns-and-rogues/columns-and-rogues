import Component from '../Component.js';
import Header from '../common/Header.js';
import Stats from './Stats.js';
import Info from './Info.js';
import Board from './Board.js';
import Modal from './Modal.js';
import Footer from '../common/Footer.js';

import levelComplete from '../util/levelComplete.js';
import runDeath from './death.js';
import probabilityFunction from '../util/probability-function.js';
import saveBoard from '../util/saveBoard.js';
import retrieveBoard from '../util/retrieveBoard.js';
import { acceptableKeys, translateKeys } from '../util/acceptableKeys.js';
import { doorLocation } from '../util/doorLocation.js';
import { getCharacterById, getItems, getMonsters, updateCharacter } from '../services/game-api.js';
import { backgroundImageNumber } from '../util/backgroundImageNumber.js';

let disableMovement = false;
let musicNotPlaying = true;

// this component could probably be broken/modulariuzed into a few files for readability
class GameApp extends Component {
    async onRender(element) {
        //#! SET-UP !#//
        const character = await getCharacterById(localStorage.getItem('USERID'));
        const itemArray = await getItems();
        const monsterArray = await getMonsters();
        const pulledBoard = retrieveBoard(character);
        let boardSize = Math.sqrt(pulledBoard.length);
        const doorLoc = doorLocation(boardSize);
        const backgroundNum = backgroundImageNumber(character.boardsSurvived);

        let limit = boardSize - 2;

        const gameMusic = new Audio('../assets/game-music.mp3');
        const bloop = new Audio('../assets/bloop.flac');
        const main = element.querySelector('.main');
        const boardSpot = element.querySelector('.board-location');

        // it's better to define functions outside the onRender when possible, since this will define the function again every time the component is rendered
        const saveEvent = async () => {
            saveBoard(pulledBoard, character);
            await updateCharacter(character);
        };

        //#! CONTROLS - EVENTS !#//
        // this function in particular should be broken out into a few testable util functions to be stitched together here
        this.handler = (event) => {
            const key = translateKeys(event.key);

            bloop.play();

            if (musicNotPlaying) {
                gameMusic.play();
                musicNotPlaying = false;
            }
            if (event.keyCode === 13) {
                document.getElementById('submit').click();
            }
            if (!acceptableKeys.includes(event.key) || disableMovement === true) return;

            if (key === 'left' && character.x >= 1) character.x--;
            if (key === 'up' && character.y >= 1) character.y--;
            if (key === 'right' && character.x <= limit) character.x++;
            if (key === 'down' && character.y <= limit) character.y++;

            let currentCell = pulledBoard.find(object => (object.x === character.x && object.y === character.y));

            //#! GENERATE ENCOUNTERS - EVENTS - DEATH !#//
            if (currentCell.contents === null) {
                currentCell.contents = probabilityFunction(character);
                if (currentCell.contents !== 0) {
                    const myModal = new Modal({
                        cell: currentCell,
                        itemArray: itemArray,
                        monsterArray: monsterArray,
                        character: character,
                        modalDisplay: true,
                    });
                    element.prepend(myModal.renderDOM());
                    stats.update();

                    if (character.hp < 1) {
                        runDeath(character);
                        document.removeEventListener('keydown', this.handler);
                        return;
                    }
                    const modalButton = document.getElementById('submit');
                    disableMovement = true;
                    modalButton.addEventListener('click', () => myModal.update({ modalDisplay: false }, disableMovement = false));
                    stats.update();
                }
            }

            //#! WIN CONDITIONS !#//
            if (character.x === doorLoc.x && character.y === doorLoc.y) {
                document.removeEventListener('keydown', this.handler);

                gameMusic.pause();
                musicNotPlaying = true;

                // for readability, I'd like to see these setTimeous point to named util functions like: setTimeout(makeDoorSound, 250)
                setTimeout(function () {
                    let doorSound = new Audio('../assets/door-open.mp3');
                    doorSound.play();
                }, 250);

                //#! JOELS FAVORITE LINE OF CODE HE'S EVER WRITTEN !#//
                // you should be proud. today you have truly written javsascript
                const that = this;
                // one thing to note, though, is that arrow functions would have made this unnecessary. it's one of the secret superpowers of arrow functions

                setTimeout(function () {
                    let winSound = new Audio('../assets/win-sound.mp3');
                    winSound.play();
                }, 1500);

                // this nested setTimeout would especially benefit from extracting and naming these functions
                setTimeout(function () {
                    levelComplete(boardSize, character);

                    const endGameModal = new Modal({
                        cell: currentCell,
                        character: character,
                        modalDisplay: true
                    });
                    element.prepend(endGameModal.renderDOM());

                    setTimeout(function () {
                        that.update(); // ouch, it got to that point, huh?
                        return;
                    }, 7000);
                }, 4000);
            }
            board.update();
        };

        document.addEventListener('keydown', this.handler);

        //#! COMPONENTS !#//
        const header = new Header();
        element.prepend(header.renderDOM());

        const stats = new Stats({ character: character });
        boardSpot.appendChild(stats.renderDOM());

        const info = new Info({ character: character, itemArray: itemArray });
        main.appendChild(info.renderDOM());

        document.getElementById('save-button').addEventListener('click', saveEvent);

        // seems like these all could have been in one function that took the item property name as a string argument
        const deleteItemTwo = () => {
            character.itemTwo = 0;
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

        document.getElementById('delete-item-2').addEventListener('click', () => deleteItemTwo());
        document.getElementById('delete-item-3').addEventListener('click', deleteItemThree);
        document.getElementById('delete-item-4').addEventListener('click', deleteItemFour);
        document.getElementById('delete-item-5').addEventListener('click', deleteItemFive);

        const board = new Board({
            character,
            backgroundNum,
            boardSize,
            boardArr: pulledBoard,
            doorLocation: doorLoc,
        });
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