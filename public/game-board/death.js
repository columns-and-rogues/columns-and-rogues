const runDeath = (character) => {
    const gameOver = document.querySelector('#game-over');
    if (character.hp === 0) {
        gameOver.classList.remove('hidden');
    }
};

export default runDeath;