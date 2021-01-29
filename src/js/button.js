export default class Button {
  constructor () {
    this.button = true;
  }
  create() {
    let button = document.querySelector('.toggle-switch');
    let trainMode = document.querySelector('.train');
    button.onclick = function() {
      trainMode.classList.toggle('game');           
    }
  }
}
