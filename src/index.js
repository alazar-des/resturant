import home from './home';
import about from './about';
import menu from './menu';
import reservation from './reservation';
import './styles.css'

(function() {
  const content = document.querySelector('#content');
  content.appendChild(header());
  content.appendChild(home());
  content.appendChild(footer());

  window.onscroll = function () {handleScroll()}
})();

function handleScroll() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.querySelector('.header').classList.add('scroll');
  } else {
    document.querySelector('.header').classList.remove('scroll');
  }
}

function nav() {
  const nav = document.createElement('div');
	nav.classList.add("nav");

	const ul = document.createElement('ul');

	const home = document.createElement('li');
	home.classList.add('home');
	home.textContent = "home";
  home.addEventListener('click', handleHome);
	
	const about = document.createElement('li');
	about.classList.add('about');
	about.textContent = "about";
  about.addEventListener('click', handleAbout);

	const menu = document.createElement('li');
	menu.classList.add('menu');
	menu.textContent = "menu";
  menu.addEventListener('click', handleMenu);

	const reservation = document.createElement('li');
	reservation.classList.add('nav-reservation');
	reservation.textContent = "reservation";
  reservation.addEventListener('click', handleReservation);

	ul.appendChild(home);
	ul.appendChild(about);
	ul.appendChild(menu);
	ul.appendChild(reservation);

	nav.appendChild(ul);

  return nav;
}

function header() {
  const header = document.createElement('div');
  header.classList.add('header');

  const logo = document.createElement('h1');
  logo.classList.add('logo');
  logo.textContent = "Tuum";

  header.appendChild(logo);
  header.appendChild(nav());

  return header;
}

function footer() {
  const footerContainer = document.createElement('div');
  footerContainer.classList.add('footerContainer');

  const contact = document.createElement('div');
  contact.classList.add('contact');

  const address = document.createElement('div');
  address.classList.add('address');
  const h4 = document.createElement('h4');
  h4.textContent = "Address";
  const add = document.createElement('p');
  add.textContent = "Romanat Mekelle, Tigray"
  address.appendChild(h4);
  address.appendChild(add);

  const follow = document.createElement('div');
  const hf = document.createElement('h4');
  hf.textContent = "Follow";
  follow.appendChild(hf)  

  const info = document.createElement('div');
  const hi = document.createElement('h4');
  hi.textContent = "Contact";
  info.appendChild(hi);
  const email = document.createElement('p');
  email.textContent = "info@resturant.com";
  const phone = document.createElement('p');
  phone.textContent = "+251914000000";
  info.appendChild(email);
  info.appendChild(phone);

  contact.appendChild(address);
  contact.appendChild(follow);
  contact.appendChild(info);

  const footer = document.createElement('div');
  footer.classList.add("footer-container");
  const footerLogo = document.createElement('h1');
  footerLogo.textContent = "Tuum";
  footer.appendChild(footerLogo);
  footer.appendChild(nav());

  footerContainer.appendChild(contact);
  footerContainer.appendChild(footer);

  return footerContainer;
}

function handleHome(e) {
  document.querySelector('.header').classList.remove('nohero');
  content.removeChild(content.childNodes[1]);
  content.insertBefore(home(), content.childNodes[1]);
}

function handleAbout(e) {
  document.querySelector('.header').classList.remove('nohero');
  content.removeChild(content.childNodes[1]);
  content.insertBefore(about(), content.childNodes[1]);
}

function handleMenu(e) {
  document.querySelector('.header').classList.remove('nohero');
  document.querySelector('.header').classList.add('nohero');
  content.removeChild(content.childNodes[1]);
  content.insertBefore(menu(), content.childNodes[1]);
}

function handleReservation(e) {
  document.querySelector('.header').classList.remove('nohero');
  document.querySelector('.header').classList.add('nohero');
  content.removeChild(content.childNodes[1]);
  content.insertBefore(reservation(), content.childNodes[1]);
}