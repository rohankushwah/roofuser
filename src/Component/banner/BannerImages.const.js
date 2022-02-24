const sport = [
  {
    id: '1',
    imgPath: `http://localhost:3000/images/img4.jpg`
  },
  {
    id: '2',
    imgPath: `http://localhost:3000/images/img2.jpg`
  },
  {
    id: '3',
    imgPath: `http://localhost:3000/images/img3.jpg`
  }
];

const casino = [
  {
    id: '1',
    imgPath: 'images/banners/casino-slides/1024x300OTTAB_2.png'
  },
  {
    id: '2',
    imgPath: 'images/banners/casino-slides/14octweb.jpg'
  },
  {
    id: '3',
    imgPath: 'images/banners/casino-slides/header bpt.png'
  }
];

const carouselSettings = {
  dots: true,
  lazyLoad: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 1
};

export { sport, casino, carouselSettings };
