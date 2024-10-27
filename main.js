const lista = document.querySelectorAll(".faq-accordion");

lista.forEach((accordion) => {
  accordion.addEventListener("click", () => {
    const body = accordion.querySelector(".faq-accordion-body");
    body.classList.toggle("active");
  });
});
