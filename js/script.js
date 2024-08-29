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
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } else{
            entry.target.classList.remove('show');
        }
    });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    const menuLinks = document.querySelectorAll('.menu-buttons a');

    menuLinks.forEach((link, index) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            sections.forEach(section => section.classList.remove('active'));
            sections[(index)].classList.add('active');
        });
    });
    
    sections[0].classList.add('active');
});
