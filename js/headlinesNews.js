const renderHeadlinesNews = (err, data) => {
  if (err) {
    console.warn(err, data);
    return;
  }

  const template = document.createDocumentFragment();
  const headlinesNews = data.articles.map(item => {
    const card = document.createElement('div');
    card.className = 'news-cards__card';
    const date = new Date(item.publishedAt);

    card.innerHTML = `
      <img class="card__img" src="${item.urlToImage}" 
      alt="${item.title}" style="width: 270px; height: 200px;" 
      onerror= "if (this.src != '../img/no-photo.jpg') this.src =
     '../img/no-photo.jpg';">
      <a class="card__intro-block" href="${item.url}" target="_blank">
        <h2 class="card__title">${item.title}</h2>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 6H18V16M18 6L6 18L18 6Z" stroke="#F2994A"
           stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>
      </a>
      <p class="card__intro-text">${item.description}</p>
      <div class="card__post-data">
        <p class="post-data__date">${date.toLocaleDateString()}</p>
        <p class="post-data__time">${date.toLocaleTimeString()}</p>
        <p class="post-data__author">${item.author}</p>
      </div>
    `;
    return card;
  });

  template.append(...headlinesNews);

  return template;
};

export default renderHeadlinesNews;
