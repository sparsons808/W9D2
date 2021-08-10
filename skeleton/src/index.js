const View = require('./ttt-view.js');
const Game = require('./game.js')


document.addEventListener("DOMContentLoaded", () => {
  const view = new View(new Game(), "figure");
});
