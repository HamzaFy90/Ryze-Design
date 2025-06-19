fetch('./Json/products.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('ContainerCards');
    data.forEach(product => {
      const card = document.createElement('div');
      card.className = 'card--products--1';
      card.innerHTML = `
        <div class="img---container">
          <img src="${product.image}" alt="">
        </div>
        <div class="wrapper--text--card--product">
          <div class="rating--product">
            <img src="./Assets/Icons/Rating.svg" alt="">
            <p>${product.rating}</p>
          </div>
          <div class="wrapper-main-detail">
            <h1>${product.title}</h1>
            <h2>${product.price}</h2>
          </div>
          <div class="wrapper--advantage">
            ${product.advantages.map(adv => `<span class="adv--1">${adv}</span>`).join('')}
          </div>
        </div>
      `;
      container.appendChild(card);
      container.appendChild(card);
    });
  })
  .catch(err => console.error("Failed to load products:", err));
