const runDeath = (character) => {

    // screen turns red
    const gameOver = document.querySelector('#game-over');
    if (character.hp === 0) {
        gameOver.classList.remove('hidden');
    }
    // text shows game over

    // reset hp and gold?

    // reset game board?

    // STRETCH: game over sound
}

export default runDeath;