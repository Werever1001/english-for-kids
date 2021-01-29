"use strict"
import {cards} from './cards';

export default class Navigation {
  constructor() {
    this.navButton = true,
    this.navList = () => {
      return cards[0].map(value => {
        return value;
      })
    }
  }
  createNav() {
    const menu = document.querySelector('.menu');
    const navButton = document.querySelector('.hamburger');
    const navList = document.createElement('ul');
    navList.classList = 'nav-list';
    navList.innerHTML = `<li class="topic">Choose category</li>`
    const cardArr = cards[0];
    const cardArrLength = cardArr.length - 1;
    for(let i = 0; i <= cardArrLength; i++) {
      let topic = document.createElement('li');
      topic.classList = 'topic';
      let topicLink = document.createElement('a');
      let linkText = document.createTextNode(cardArr[i]);
      topicLink.classList = 'topik-link';
      topicLink.appendChild(linkText);
      topicLink.href = "#";
      topic.appendChild(topicLink);          
      navList.appendChild(topic);
    }
    menu.append(navList);
    navButton.addEventListener('click', function() {
      navButton.classList.toggle('diam');
      navList.classList.toggle('active');
    });
  }
}


