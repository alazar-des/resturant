import dorho from './asset/dorho.jpg';
import fata from './asset/fata.jpg';

export default function about() {
  const container = document.createElement('div');
  container.classList.add('about-container');

  const hero = document.createElement('div');
  hero.classList.add('about-hero');

  const heading = document.createElement('h1');
  heading.textContent = 'About Us';

  hero.appendChild(heading);

  const content = document.createElement('div');
  content.classList.add('history');

  const text = document.createElement('div');
  text.classList.add('content');
  const title = document.createElement('h1');
  title.textContent = 'History';
  const disc = document.createElement('p');
  disc.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam diam diam, ac venenatis elit vehicula eget. Sed vehicula aliquam lectus ac consectetur.';
  const button = document.createElement('button');
  button.textContent = 'More';
  text.appendChild(title);
  text.appendChild(disc);
  text.appendChild(button);

  const img = document.createElement('div');
  img.classList.add('about-img');
  const img1 = new Image();
  img1.src = fata;
  const img2 = new Image();
  img2.src = dorho;
  img.appendChild(img1);
  img.appendChild(img2);

  content.appendChild(text);
  content.appendChild(img);

  container.appendChild(hero);
  container.appendChild(content);

  return container;
}