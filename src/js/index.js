"use strict"
import  { Card, TopicCard } from './card-interface';
import Navigation from './navigation';
import Button from './button';

import '../styles/style.scss';

class Game {

  init() {
    const navigation = new Navigation();
    navigation.createNav();
    let themeCards = new TopicCard();
    themeCards.initTopicCard();
    let cardsOn = document.querySelectorAll('.interface');
    let nav = document.querySelectorAll('.topic');
    const arr = Array.from(nav);
    for (let i = 0; i <= arr.length - 1; i++) {
      arr[i].addEventListener('click', () => {
        if (i === 0) {
          return;
        }else if (i === 1) {
          cardsOn.forEach((item) => {
            item.remove();
          });
          themeCards.initTopicCard();
        }else {
          cardsOn.forEach((item) => {
            item.remove();
          });
          let n = i - 2;
          themeCards = new Card(n);
          themeCards.initCard();
        }
      })
    }
    /*nav.forEach((element) => {
      element.addEventListener('click', () => {
        cardsOn.forEach((item) => {
          item.remove();
        });
        if (element.value === 'Choose category') return;
        else if (element.value === 'Main') {
          themeCards.initTopicCard();
        } else {

        }
      })
    })*/
    /*for (let i = 0; i < length; i++) {
      let currentNav = nav[i];
      
      currentNav.onclick = () => {
        if (nav[0]) {
          return
        } else {
          console.log(currentNav)
          themeCards.forEach(elem => elem.remove());
          let cardTrain = new Card(i);
          cardTrain.initCard();
          if (currentNav.classList === 'top-visited') {
            currentNav.classList.toggle('topic');
          }else {
            currentNav.classList.toggle('top-visited');
          }
        }
      };
      let themeOn = document.querySelectorAll('.interface');
      let currentTheme = themeOn[i + 1];
      currentTheme.addEventListener("click", () => {
        themeOn.forEach(elem => elem.remove());
        currentNav.classList.toggle('top-visited');
        let cardTrain = new Card(i);
        cardTrain.initCard();
      });
    } */
    const buttonToggle = new Button ({button: "button"});
    buttonToggle.create();
  }
}
const game = new Game ();
game.init();
    

