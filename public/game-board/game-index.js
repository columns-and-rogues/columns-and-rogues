import GameApp from './game-app.js';

const app = new GameApp();
const el = app.renderDOM();
document.body.prepend(el);