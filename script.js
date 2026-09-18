(function () {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");

  if (header) {
    const onScroll = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 40);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      nav.classList.toggle("is-open", !open);
    });
    nav.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        toggle.setAttribute("aria-expanded", "false");
        nav.classList.remove("is-open");
      });
    });
  }

  const items = Array.from(document.querySelectorAll(".gallery-item"));
  if (!items.length) return;

  const lb = document.createElement("div");
  lb.className = "lightbox";
  lb.setAttribute("role", "dialog");
  lb.setAttribute("aria-modal", "true");
  lb.setAttribute("aria-label", "Fotoğraf görüntüleyici");
  lb.innerHTML = `
    <button type="button" class="lightbox-close" aria-label="Kapat">×</button>
    <button type="button" class="lightbox-nav lightbox-prev" aria-label="Önceki">‹</button>
    <button type="button" class="lightbox-nav lightbox-next" aria-label="Sonraki">›</button>
    <div class="lightbox-inner">
      <img src="" alt="" />
      <p class="lightbox-caption"></p>
    </div>
  `;
  document.body.appendChild(lb);

  const imgEl = lb.querySelector("img");
  const capEl = lb.querySelector(".lightbox-caption");
  let index = 0;

  function open(i) {
    index = i;
    const btn = items[index];
    imgEl.src = btn.dataset.src;
    imgEl.alt = btn.dataset.alt || "";
    capEl.textContent = btn.dataset.caption || "";
    lb.classList.add("is-open");
    document.body.classList.add("lightbox-open");
    lb.querySelector(".lightbox-close").focus();
  }

  function close() {
    lb.classList.remove("is-open");
    document.body.classList.remove("lightbox-open");
    imgEl.src = "";
  }

  function step(dir) {
    index = (index + dir + items.length) % items.length;
    open(index);
  }

  items.forEach((btn, i) => {
    btn.addEventListener("click", () => open(i));
  });

  lb.querySelector(".lightbox-close").addEventListener("click", close);
  lb.querySelector(".lightbox-prev").addEventListener("click", () => step(-1));
  lb.querySelector(".lightbox-next").addEventListener("click", () => step(1));
  lb.addEventListener("click", (e) => {
    if (e.target === lb) close();
  });

  document.addEventListener("keydown", (e) => {
    if (!lb.classList.contains("is-open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") step(-1);
    if (e.key === "ArrowRight") step(1);
  });
})();
