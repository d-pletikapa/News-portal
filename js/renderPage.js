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


const init = () => {
  preload.show();
  return Promise.all([
    fetchRequest('top-headlines?country=ru', {
      callback: renderHeadlinesNews,
    }),
    fetchRequest('top-headlines/sources', {
      callback: renderSelect,
    }),
  ]);
};
init().then(data => {
  preload.remove();
  wrapperHeadlinesNews.append(data[0]);
  wrapperSelect.append(data[1]);
});

const init2 = (searchFormInputValue) => {
  preload.show();
  return Promise.resolve(
    fetchRequest(`everything?q={${searchFormInputValue}}`, {
      callback: renderSearchRequestNews(searchFormInputValue),
    }),
  );
};

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchFormInputValue =
    searchForm.querySelector('.form__search-input').value;
  init2(searchFormInputValue).then(data => {
    preload.remove();
    wrapperSearchRequestNews.append(data[1]);
  });
});
