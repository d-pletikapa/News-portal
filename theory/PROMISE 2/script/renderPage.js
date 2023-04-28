import fetchRequest from './fetchRequest.js';
import renderGoods from './renderGoods.js';
import renderDiscount from './renderDiscount.js';
import renderSelect from './renderSelect.js';
import preload from './preload.js';

const wrapperGoods = document.querySelector('.wrapper_goods');
const wrapperDiscount = document.querySelector('.wrapper_discount');
const wrapperSelect = document.querySelector('.wrapper_select');

const initGoods = async () => {
  const goods = await fetchRequest('goods', {
    callback: renderGoods,
  });
  wrapperGoods.append(goods);
};

const initDiscount = async () => {
  const goods = await fetchRequest('goods/discount', {
    callback: renderDiscount,
  });
  wrapperDiscount.append(goods);
};

const initSelect = async () => {
  const goods = await fetchRequest('category', {
    callback: renderSelect,
  });
  wrapperSelect.append(goods);
};

// initGoods();
// initDiscount();
// initSelect();

const init = () => {
  preload.show();
  return Promise.all([
    fetchRequest('goods', {
      callback: renderGoods,
    }),
    fetchRequest('goods/discount', {
      callback: renderDiscount,
    }),
    fetchRequest('category', {
      callback: renderSelect,
    }),
  ]);
};
init().then(data => {
  preload.remove();
  wrapperGoods.append(data[0]);
  wrapperDiscount.append(data[1]);
  wrapperSelect.append(data[2]);
});
