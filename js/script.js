function smothScroll(target) {
  document.querySelector(target).scrollIntoView({
    behavior: "smooth",
  });
}

document.getElementById("top").addEventListener("click", function (e) {
  e.preventDefault();
  smothScroll("#footer");
});

document.querySelectorAll('a[href="#"]').forEach(function (anchor) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
  });
});

document.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    link.blur();
  });
});
