import { updateCharacter } from '../services/game-api.js';
import newCharacter from '../util/newCharacter.js';

const runDeath = () => {
    const gameOver = document.querySelector('#game-over');
    gameOver.classList.remove('hidden');

    let character = newCharacter();

    const saveEvent = async() => {
        await updateCharacter(character);
    };

    saveEvent();
};

export default runDeath;
