"use strict"

export default class Button {
  constructor (button) {
    this.button = button;
  }

  create() {
    let button = document.querySelector('.toggle-switch');
    let cardMode = document.querySelectorAll('.interface');
    let areaMode = document.querySelector('train');
    button.onclick = function() {
      areaMode.classList.toggle('game');
      cardMode.forEach(elem => {
        elem.classList.toggle('play');
      })            
    }
  }
}