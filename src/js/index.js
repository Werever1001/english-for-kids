"use strict"
import  { Card, TopicCard } from './card-interface';
import Navigation from './navigation';
import Button from './button';

import '../styles/style.scss';

class Game {
  init() {
    new Navigation().createNav();
    new Button().create();
    new TopicCard().initTopicCard();
    let nav = Array.from(document.querySelectorAll('.topic')).slice(1);

    nav.forEach( (item, index) => {
      item.addEventListener('click', () => {
        nav.forEach((item) => {
          item.classList = 'topic';
        });
        item.classList = 'top-visited';
        let cardsOn = document.querySelectorAll('.interface');
        cardsOn.forEach((item) => {
          item.remove();
        });
        (index === 0) ? new TopicCard().initTopicCard() : new Card(index-1).initCard();  
      })
    })
  }
}
const game = new Game ();
game.init();
