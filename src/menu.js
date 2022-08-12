import thlo from './asset/thlo.jpg';
import gaat from './asset/gaat.jpg';
import hlbet from './asset/hlbet.jpg';
import dorho from './asset/dorho.jpg';
import aynet from './asset/aynet.jpg'
import fata from './asset/fata.jpg'
import items from './card';

export default function menu() {
	const menu = document.createElement('div');
  menu.classList.add('menu-page');

	const foods = {
		thlo: {
		  disc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.',
		  img: thlo,
      price: 10,
		},
    dorho: {
		  disc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.',
		  img: dorho,
      price: 8,
		},
		hlbet: {
		  disc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.',
		  img: hlbet,
      price: 4,
		},
		gaat: {
		  disc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.',
		  img: gaat,
      price: 5,
		},
    aynet: {
		  disc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.',
		  img: aynet,
      price: 4,
		},
    fata: {
		  disc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.',
		  img: fata,
      price: 3,
		},
	}

  menu.appendChild(items(foods, 'our menu'));

  return menu;
}