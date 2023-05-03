import fetchRequest from './fetchRequest.js';
import renderHeadlinesNews from './headlinesNews.js';
import renderSearchRequestNews from './searchRequestNews.js';
import renderSelect from './renderSelect.js';
import preload from './preload.js';

const wrapperHeadlinesNews = document.querySelector('.headline-news__block');
const wrapperSearchRequestNews =
  document.querySelector('.search-r-news-cards__block');
const wrapperSelect = document.querySelector('.form__select');
const searchForm = document.querySelector('.header__search-form');
const searchResultsArticle = document.querySelector('#search-results-article');
// Замена ошибки картинкой
// const main = document.querySelector('#main');
// const imgError = (images) => {
//   images.forEach(img => {
//     img.onerror = '';
//     img.src = '../img/no-photo.jpg';
//   });
//   return images;
// };
// imgError(main.querySelectorAll('img'));

const init = () => {
  preload.show();
  return Promise.all([
    fetchRequest('top-headlines?country=ru&pageSize=4', {
      callback: renderHeadlinesNews,
    }),
    fetchRequest('top-headlines/sources', {
      callback: renderSelect,
    }),
  ]);
};

const init2 = (searchFormInputValue) => {
  searchResultsArticle.classList.contains('hidden') ?
    searchResultsArticle.classList.remove('hidden') : null;
  preload.show();
  return Promise.resolve(
      fetchRequest(`everything?q={${searchFormInputValue}}&pageSize=8`, {
        callback: (err, data) =>
          renderSearchRequestNews(err, data, searchFormInputValue),
      }),
  );
};

const init3 = () => {
  preload.show();
  const countrySelectValue = document.querySelector('.form__select').value;
  const URL = `top-headlines?country=${countrySelectValue}&pageSize=4`;
  return Promise.resolve(
      fetchRequest(URL, {
        callback: renderHeadlinesNews,
      }),
  );
};

init().then(data => {
  preload.remove();
  wrapperHeadlinesNews.append(data[0]);
  wrapperSelect.append(...data[1]);
});


searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchFormInputValue =
    searchForm.querySelector('.form__search-input').value;
  init2(searchFormInputValue).then(data => {
    preload.remove();
    wrapperSearchRequestNews.innerHTML = ``;
    wrapperSearchRequestNews.append(data);
  });
  init3().then(data => {
    preload.remove();
    wrapperHeadlinesNews.innerHTML = ``;
    wrapperHeadlinesNews.append(data);
  });
});
