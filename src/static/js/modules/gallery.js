function imageGallery() {
    const ACTIVE_CLASS = "active";
    const carouselSlide = document.querySelectorAll(".item-slide");
    const previews = document.querySelectorAll(".gallery-img");
    const reset = document.querySelector(".gallery-wrapper-miniture img");

    for (const preview of previews) {
        ["keypress", "click"].forEach(evt =>{
            preview.addEventListener(evt, function () {
                let size = carouselSlide[0].clientWidth;
                let counter = this.id;
                previews.forEach((p) => p.classList.remove(ACTIVE_CLASS));
                preview.classList.add(ACTIVE_CLASS);
                carouselSlide.forEach((cl) => {
                    cl.style.transform = "translateX(" + calculateMovement(size, counter) + "px)";
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
        carouselSlide.forEach((cl) => {
            cl.style.transform = "translateX(" + calculateMovement(size, counter) + "px)";
        });
    });
}

function calculateMovement(size, counter) {
    return parseFloat(-size * counter);
}

if (document.querySelector('.gallery-wrapper')) {
    imageGallery();
}
module.exports = {
    calculateMovement
}