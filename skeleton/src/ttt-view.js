class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
  }

  setupBoard() {
    const ul = document.createElement("ul")
    const figure = document.querySelector(this.el)
    figure.appendChild(ul)
    for (let i = 1; i <= 9; i++) {
      const li = document.createElement("li")
      li.innerText = i
      ul.appendChild(li)
    }
  }
  
  bindEvents() {}

  handleClick(e) {}

  makeMove(square) {}

}

module.exports = View;
