const bar = document.querySelector("i");

bar.addEventListener("click", () => {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("active");
});
