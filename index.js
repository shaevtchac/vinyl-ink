import { Splide } from '@splidejs/splide';

const splide = new Splide('#cross-sell', { pagination: false });
splide.mount();

const instructionsCarousel = new Splide('#instructions', {
  classes: {
    arrows: 'splide__arrows arrows',
    arrow: 'splide__arrow arrow',
    prev: 'splide__arrow__prev prev',
    next: 'splide__arrow__next next',
    pagination: 'splide__pagination pagination',
    page: 'splide__pagination__page page',
  },
});
instructionsCarousel.mount();

// _______________________________________________________________ animations _______________________________________________________________

const animatedElements = document.querySelectorAll('[data-animation]');

const animationObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const {
      animation,
      duration = '500ms',
      'timing-function': timingFunction = 'ease-in',
      delay = '500ms',
      'iteration-count': iterationCount = '1',
      direction = 'normal',
      'fill-mode': fillMode = 'backwards',
    } = entry.target.dataset;
    if (entry.isIntersecting) {
      entry.target.style.animation = `${animation} ${duration} ${timingFunction} ${delay} ${iterationCount} ${direction} ${fillMode}`;
    }
  });
});

animatedElements.forEach((element) => {
  animationObserver.observe(element);
});
