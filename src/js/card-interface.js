'use strict'
import { cards } from './cards';

export class Card {
  constructor(n) {
    this.cardText = () => {
      return cards.slice(1)[n].map(value => {
        return value.word;
      })
    },
    this.cardImg = () => {
      return cards.slice(1)[n].map(value => {
        return value.image;
      })
    },
    this.wordTranslation = () => {
      return cards.slice(1)[n].map(value => {
        return value.translation;
      })
    },
    this.wordAudio = () => {
      return cards.slice(1)[n].map(value => {
        return value.audioSrc;
      })
    },
    this.rotateButton = true
  }  
  initCard() {
    const container = document.querySelector('.container');
    const topicArray = cards[0];
    const topicArrayLength = topicArray.length;
    for (let i = 0; i < topicArrayLength - 1; i++) {
      let cardTheme = document.createElement('div');
      cardTheme.classList = 'interface';
      let imgCard = document.createElement('img');
      imgCard.classList = 'image';
      imgCard.src = `../src/assets/${this.cardImg()[i]}`;
      let nameCard = document.createElement('p');
      nameCard.classList = 'theme';
      nameCard.textContent = this.cardText()[i];
      let rotateButton = document.createElement('span');
      rotateButton.innerHTML = `<span><img src="../src/assets/img/rotate.svg" width="15px" height="15px"></span>`;
      cardTheme.append(imgCard, nameCard); 
      container.append(cardTheme);
    }
  }
}

export class TopicCard extends Card {
  constructor() {
    super(),
    this.cardText = () => {
      return cards[0].slice(1).map(value => {
        return value;
      })
    },
    this.cardImg = () => {
      return cards.slice(1).map(value => {
        return value[1].image;
      })
    },
    this.wordTranslation = false,
    this.wordAudio = false,
    this.rotateButton = false
  }
  initTopicCard() {
    this.initCard();
  }
}
