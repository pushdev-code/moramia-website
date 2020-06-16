const ACTIVE_CLASS = "active";
const footerLinks = document.querySelectorAll(".footer-wrapper-ulist .footer-a");
const logo = document.querySelector('.footer-img');
for (const footerLink of footerLinks) {
  footerLink.addEventListener("click", (event) => {
    let active = document.querySelector(".footer-wrapper-ulist .active");
    active.classList.remove(ACTIVE_CLASS);
    let current = event.target;
    current.classList.add(ACTIVE_CLASS);
  });
}

logo.addEventListener('click', () => {
  window.location.href = '/';
});