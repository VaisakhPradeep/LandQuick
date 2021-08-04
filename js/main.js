document.addEventListener('DOMContentLoaded', function () {
    new Splide('#card-slider', {
        // focus: 'center',
        padding: {
            left : '2rem',
            right: '6rem',
        },
        perPage: 2,
        trimSpace: false,
        breakpoints: {
            1200: {
                perPage: 1,
            }
        }
    }).mount();
});