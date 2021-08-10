class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
    this.setupBoard();
  }

  setupBoard() {
    const ul = document.createElement("ul")
    const figure = document.querySelector(this.el)
    figure.appendChild(ul)
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const li = document.createElement("li")
        li.innerText = i     
        li.dataset.pos = `"[${i},${j}]"`
        ul.appendChild(li)
      }
    }
  }
  
  bindEvents() {
    this.el.addEventListener('click', this.handleClick)
  }

  handleClick(e) {
    if (e.target.tagName === "LI"){
        bindEvents();
    }
   

  }

  makeMove(square) {

  }

}

module.exports = View;
