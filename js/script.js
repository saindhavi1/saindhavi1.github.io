let slider = tns({
    container : ".my-slider",
    slideBy: "1",
    speed: 400,
    nav: true,
    navPosition: "bottom",
    autoplay: true,
    controls: false,
    autoplayButtonOutput: false,
    responsive: {
        1600: {
            items: 5,
            gutter: 10
        },
        1024: {
            items: 4,
            gutter: 10
        },
        768: {
            items: 3,
            gutter: 10
        },
        480: {
            items: 2
        }
    }
})