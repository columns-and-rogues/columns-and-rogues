import GameApp from './GameApp.js';

const app = new GameApp();
const el = app.renderDOM();
document.body.prepend(el);