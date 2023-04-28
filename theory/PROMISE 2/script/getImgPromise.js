const photos = [
  'https://fs.getcourse.ru/fileservice/file/download/a/251231/sc/117/h/7174c8579d6c5680f884f123d803dfab.jpg',
  'https://fs.getcourse.ru/fileservice/file/download/a/251231/sc/295/h/7a8ae6d2aa7983107721c53fa8ebded8.jpg',
  'https://fs.getcourse.ru/fileservice/file/download/a/251231/sc/43/h/bea4a20d4854173943a654344b1d666d.jpg',
  'https://fs.getcourse.ru/fileservice/file/download/a/251231/sc/239/h/bda95ad30ccc570713e61f8a695f2c53.jpg',
  'https://fs.getcourse.ru/fileservice/file/download/a/251231/sc/96/h/37228f1899c397dda580c1a21afa4063.jpg',
];

// console.log('start');

// const promise = new Promise((resolve, reject) => {
//   console.log('Ждем пиццу');
//   let timerBad = NaN;

//   const timerId = setTimeout(() => {
//     clearTimeout(timerBad);
//     resolve('Пиццу доставили');
//   }, Math.floor(Math.random() * 5000));

//   timerBad = setTimeout(() => {
//     clearTimeout(timerId);
//     reject(new Error('Пиццу не доставили вовремя'));
//   }, 2000);
// });

// // console.log(promise);
// const result = promise
//   .then(data => {
//     console.log(data);
//     return data + ' Ура';
//   }).then(data => {
//     console.log('2', data);
//     return data;
//   })
//   .catch(err => {
//     console.error(err);
//   })
//   .then((data) => {
//     console.log('Еще один then', data);
//     return data;
//   })
//   .finally(() => console.log('finally'))
//   .then(data => console.log('last', data));
// console.log(result);

const loadImg = url => new Promise(resolve => {
  const img = new Image();
  img.width = 300;
  img.src = url;
  img.addEventListener('load', () => {
    // document.body.append(img);
    resolve(img);
  });
});

const showImg = async () => {
  // const img = [];
  // img.push(await loadImg(photos[0]));
  // img.push(await loadImg(photos[1]));
  // img.push(await loadImg(photos[2]));
  // img.push(await loadImg(photos[3]));
  // img.push(await loadImg(photos[4]));
  // document.body.append(...img);
  const img = Promise.all([
    loadImg(photos[0]),
    loadImg(photos[1]),
    loadImg(photos[2]),
    loadImg(photos[3]),
    loadImg(photos[4]),
  ]);
  return img;
};

// showImg();
showImg().then(data => document.body.append(...data));

// loadImg(photos[0])
//   .then(() => loadImg(photos[1]))
//   .then(() => loadImg(photos[2]))
//   .then(() => loadImg(photos[3]))
//   .then(() => loadImg(photos[4]));
