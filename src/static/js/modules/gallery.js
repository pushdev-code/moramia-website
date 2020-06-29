function imageGallery() {
    const ACTIVE_CLASS = "active"; 
    const highlight = document.querySelector('.gallery-highlight');
    const previews = document.querySelectorAll('.gallery-img');

    previews.forEach(preview => {
        preview.addEventListener('click', function () {
            highlight.src = this.src;
            previews.forEach(preview => preview.classList.remove(ACTIVE_CLASS));
            preview.classList.add(ACTIVE_CLASS);
        });
        preview.addEventListener('mouseover', function () {
            highlight.src = this.src;
            previews.forEach(preview => preview.classList.remove(ACTIVE_CLASS));
            preview.classList.add(ACTIVE_CLASS);
        });
    });
}


imageGallery();