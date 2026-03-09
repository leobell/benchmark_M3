var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    slidesPerGroup: 2,

    spaceBetween: 5,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    navigation: {
        enabled: false,
    },
    
    breakpoints: {
        768: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        },
        992: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        },
        1200: {
        slidesPerView: 6,
        slidesPerGroup: 6,

        navigation: {
            enabled: true,
        },
        }
    },



    on: {
    init: function () {
      insLastVisible(this);
    },
    // Si attiva quando cambi pagina
    slideChange: function () {
      insLastVisible(this);
    },
    // Si attiva se ridimensioni la finestra (cambio breakpoint)
    breakpoint: function () {
      insLastVisible(this);
    }
  },
});

function insLastVisible (s){
    s.slides.forEach(el => el.classList.remove('last-visible'));

    const lastIndex = s.activeIndex + Math.round(s.params.slidesPerView) - 1;

    if (s.slides[lastIndex]) {
    s.slides[lastIndex].classList.add('last-visible');
    }
}