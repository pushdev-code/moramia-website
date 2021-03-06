
function imageGallery() {
    const ACTIVE_CLASS = "active";
    const carouselSlide = document.querySelectorAll(".item-slide");
    const previews = document.querySelectorAll(".gallery-img");
    const reset = document.querySelector(".gallery-wrapper-miniture img");
    const defaultActive = document.querySelector(".gallery-img");

    //Adds active to the first img
    defaultActive.classList.add(ACTIVE_CLASS);

    for (const preview of previews) {
        ["keypress", "click"].forEach(evt =>{
            preview.addEventListener(evt, function () {
                const size = carouselSlide[0].clientWidth;
                const counter = this.id.slice(-1);
                previews.forEach((p) => p.classList.remove(ACTIVE_CLASS));
                preview.classList.add(ACTIVE_CLASS);
                carouselSlide.forEach((img) => {
                    img.style.transform = "translateX(" + calculateMovement(size, counter) + "px)";
                });
            });
        });
    };

    //Resets slider
    window.addEventListener('resize', function (event) {
        let size = carouselSlide[0].clientWidth;
        let counter = reset.id;
        previews.forEach((p) => p.classList.remove(ACTIVE_CLASS));
        reset.classList.add(ACTIVE_CLASS);
        carouselSlide.forEach((img) => {
            img.style.transform = "translateX(" + calculateMovement(size, counter) + "px)";
        });
    });
}

function calculateMovement(size, counter) {
    return parseFloat(-size * counter);
}
document.querySelector('.gallery-wrapper') && imageGallery();

module.exports = {
    calculateMovement
}