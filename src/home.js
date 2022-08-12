import thlo from './asset/thlo.jpg';
import hlbet from './asset/hlbet.jpg';
import dorho from './asset/dorho.jpg';
import items from './card';


export default function home() {
  const homeContainer = document.createElement('div');
  homeContainer.classList.add('home-container');

  const foods = {
    thlo: {
      disc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.',
      img: thlo,
    },
    hlbet: {
      disc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.',
      img: hlbet,
    },
    dorho: {
      disc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.',
      img: dorho,
    }
  }

  homeContainer.appendChild(hero());
  homeContainer.appendChild(items(foods, 'our specials'));
  
  return homeContainer;
}

function hero() {
  const hero = document.createElement('div');
  hero.classList.add('hero');

  const container = document.createElement('div');

  const heroHeading = document.createElement('h1');
  heroHeading.textContent = "welcome to Tuum";
  container.appendChild(heroHeading);

  const heroSub = document.createElement('h3');
  heroSub.textContent = "We serve with love";
  container.appendChild(heroSub);

  const actionButton = document.createElement('button');
  actionButton.textContent = 'view menu';
  container.appendChild(actionButton);

  hero.appendChild(container);

  return hero;
}