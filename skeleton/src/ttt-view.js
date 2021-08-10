class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
    this.setupBoard();
    this.bindEvents();
  }

  setupBoard() {
    const ul = document.createElement("ul")
    const figure = document.querySelector(this.el)
    figure.appendChild(ul)
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let li = document.createElement("li")    
        li.dataset.pos = `[${i}, ${j}]`
        ul.appendChild(li)
      }
    }
  }
  
  bindEvents() {
    const event = this.el
    event.addEventListener('click', this.handleClick)
  }

  handleClick(e) {
    if (e.target.tagName === "LI"){
      this.makeMove(e.target.dataset.pos);
    };
   

  }

  makeMove(square) {
    e.target.classList.add("onoff")
    this.game.playMove(square);
  }

}

module.exports = View;
