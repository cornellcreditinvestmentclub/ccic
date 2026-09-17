(function () {
  var header = document.querySelector("header");
  var navToggle = document.querySelector(".nav-toggle");
  if (!header || !navToggle) return;

  function closeNav() {
    header.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Menu");
    document.body.classList.remove("nav-open");
  }

  function openNav() {
    header.classList.add("is-open");
    navToggle.setAttribute("aria-expanded", "true");
    navToggle.setAttribute("aria-label", "Close menu");
    document.body.classList.add("nav-open");
  }

  navToggle.addEventListener("click", function () {
    if (header.classList.contains("is-open")) closeNav();
    else openNav();
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && header.classList.contains("is-open")) {
      closeNav();
      navToggle.focus();
    }
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 1024) closeNav();
  });
})();
