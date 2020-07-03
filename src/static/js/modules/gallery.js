function imageGallery() {
    const ACTIVE_CLASS = "active";
    const carouselSlide = document.querySelectorAll(".item-slide");
    const previews = document.querySelectorAll(".gallery-img");
    const reset = document.querySelector(".gallery-wrapper-miniture img")

    previews.forEach((preview) => {
        preview.addEventListener("click", function () {
            let size = carouselSlide[0].clientWidth;
            let counter = this.id;
            previews.forEach((preview) => preview.classList.remove(ACTIVE_CLASS));
            preview.classList.add(ACTIVE_CLASS);
            carouselSlide.forEach((cl) => {
                cl.style.transform = "translateX(" + -size * counter + "px)";
            });

        });
        preview.addEventListener("mouseover", function () {
            const size = carouselSlide[0].clientWidth;
            let counter = this.id;
            previews.forEach((preview) => preview.classList.remove(ACTIVE_CLASS));
            preview.classList.add(ACTIVE_CLASS);
            carouselSlide.forEach((cl) => {
                cl.style.transform = "translateX(" + -size * counter + "px)";
            });

        });
    });

    //Resets slider
    window.addEventListener('resize', function (event) {
        let size = carouselSlide[0].clientWidth;
        let counter = reset.id;
        previews.forEach((preview) => preview.classList.remove(ACTIVE_CLASS));
        reset.classList.add(ACTIVE_CLASS);
        carouselSlide.forEach((cl) => {
            cl.style.transform = "translateX(" + -size * counter + "px)";
        });
    });
}

imageGallery();