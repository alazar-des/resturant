export default function items(foods, text) {
  const container = document.createElement('div');
  container.classList.add('specials');
  
  const h2 = document.createElement('h2');
  h2.textContent = text;
  
  const cardContainer = document.createElement('div');
  cardContainer.classList.add('card-container');

  for (const name in foods) {
    const card = document.createElement('div');
    card.classList.add('card');
  
    const img = new Image();
    img.src = foods[name].img;
    card.appendChild(img);
  
    const h3 = document.createElement('h3');
    h3.textContent = name;
    card.appendChild(h3);

    if (foods[name].price) {
      const price = document.createElement('p');
      price.classList.add('price');
      price.textContent = '$' + foods[name].price;
      card.appendChild(price);
    }
  
    const p = document.createElement('p');
    p.textContent = foods[name].disc;
    card.appendChild(p);
  
    cardContainer.appendChild(card);
  }
  container.appendChild(h2);
  container.appendChild(cardContainer);
  
  return container;
}