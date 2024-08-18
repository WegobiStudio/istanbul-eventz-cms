var splideTestimonial = new Splide('.splide-testimonial', {
    direction: 'ttb',
    type: 'loop',
    height: 380,
    perPage: 3,
    perMove: 1,
    wheel: false,
    drag: false,
    arrows: true,
    autoplay: true,
    interval: 2000,
    pagination: false,
    breakpoints: {
        400: {
            height: 460,
        },
        992: {
            height: 380,
        }
    }
});

splideTestimonial.mount();


var splideBrandsArea = new Splide('.brands-area', {
    type: 'loop',
    perPage: 8,
    breakpoints: {
        768: {
            perPage: 3,
        },
        1024: {
            perPage: 5,
        }
    },
    perMove: 1,
    autoplay: true,
    interval: 3000,
    arrows: false,
    pagination: false,
});
splideBrandsArea.mount();