const BREAKPOINTS = {
  320: {
    slidesPerView: 1.5,
    spaceBetween: 25,
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 35,
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 80,
  },
};

const enum PositionTypes {
  beginning = 'beginning',
  edge = 'edge',
  end = 'end',
}

export { BREAKPOINTS, PositionTypes };
