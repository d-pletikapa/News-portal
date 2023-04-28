const renderDiscount = (err, data) => {
  if (err) {
    console.warn(err, data);
    return;
  }

  const template = document.createDocumentFragment();

  const goods = data.map(item => {
    const card = document.createElement('div');
    card.className = 'card card_discount';
    card.innerHTML = `
      <h2>${item.title}</h2>
      <br>
      <p>Цена: ${item.price - (item.price * item.discount / 100)}Р
        <span class="old-price">${item.price}Р</span>
      </p>
    `;
    return card;
  });

  template.append(...goods);

  return template;
};

export default renderDiscount;
