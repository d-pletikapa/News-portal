const photos = [
  'https://fs.getcourse.ru/fileservice/file/download/a/251231/sc/117/h/7174c8579d6c5680f884f123d803dfab.jpg',
  'https://fs.getcourse.ru/fileservice/file/download/a/251231/sc/295/h/7a8ae6d2aa7983107721c53fa8ebded8.jpg',
  'https://fs.getcourse.ru/fileservice/file/download/a/251231/sc/43/h/bea4a20d4854173943a654344b1d666d.jpg',
  'https://fs.getcourse.ru/fileservice/file/download/a/251231/sc/239/h/bda95ad30ccc570713e61f8a695f2c53.jpg',
  'https://fs.getcourse.ru/fileservice/file/download/a/251231/sc/96/h/37228f1899c397dda580c1a21afa4063.jpg',
];

const img1 = new Image();
img1.width = 300;
img1.src = photos[0];

img1.addEventListener('load', () => {
  document.body.append(img1);
  const img2 = new Image();
  img2.width = 300;
  img2.src = photos[1];

  img2.addEventListener('load', () => {
    document.body.append(img2);
    const img3 = new Image();
    img3.width = 300;
    img3.src = photos[2];

    img3.addEventListener('load', () => {
      document.body.append(img3);
      const img4 = new Image();
      img4.width = 300;
      img4.src = photos[3];

      img4.addEventListener('load', () => {
        document.body.append(img4);
        const img5 = new Image();
        img5.width = 300;
        img5.src = photos[4];
        document.body.append(img5);
      });
    });
  });
});
