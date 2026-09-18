(function () {
  "use strict";

  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  var items = Array.prototype.slice.call(
    document.querySelectorAll(".gallery-item[data-src]")
  );
  var lightbox = document.getElementById("lightbox");
  if (!lightbox || !items.length) return;

  var img = lightbox.querySelector(".lightbox-img");
  var btnClose = lightbox.querySelector(".lightbox-close");
  var btnPrev = lightbox.querySelector(".lightbox-prev");
  var btnNext = lightbox.querySelector(".lightbox-next");
  var index = 0;

  function openAt(i) {
    index = (i + items.length) % items.length;
    var el = items[index];
    img.src = el.getAttribute("data-src");
    img.alt = el.getAttribute("data-alt") || "";
    lightbox.hidden = false;
    document.body.classList.add("lightbox-open");
    btnClose.focus();
  }

  function close() {
    lightbox.hidden = true;
    document.body.classList.remove("lightbox-open");
    img.removeAttribute("src");
  }

  function next() { openAt(index + 1); }
  function prev() { openAt(index - 1); }

  items.forEach(function (el, i) {
    el.addEventListener("click", function () { openAt(i); });
  });

  btnClose.addEventListener("click", close);
  btnNext.addEventListener("click", function (e) { e.stopPropagation(); next(); });
  btnPrev.addEventListener("click", function (e) { e.stopPropagation(); prev(); });

  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) close();
  });

  document.addEventListener("keydown", function (e) {
    if (lightbox.hidden) return;
    if (e.key === "Escape") close();
    else if (e.key === "ArrowRight") next();
    else if (e.key === "ArrowLeft") prev();
  });
})();
