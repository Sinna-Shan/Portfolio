document
  .querySelector(".main-nav-list")
  .addEventListener("click", function (e) {
    e.preventDefault();
    //matching
    if (e.target.classList.contains("nav-link")) {
      const id = e.target.getAttribute("href");
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
  });
