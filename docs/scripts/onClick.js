function showSection(id) {
  document.querySelectorAll("section").forEach((section) => {
    section.classList.remove("active");
  });

  document.getElementById(id).classList.add("active");
}

document.addEventListener("DOMContentLoaded", () => {
  showSection("home");
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".dropdown").forEach((drop) => {
    const btn = drop.querySelector(".dropbtn");
    const menu = drop.querySelector(".dropdown-content");

    btn.addEventListener("click", (e) => {
      e.stopPropagation(); // don't let document click immediately close it
      drop.classList.toggle("active");
    });

    btn.addEventListener("mouseenter", () => {
      drop.classList.add("active");
    });

    drop.addEventListener("mouseleave", () => {
      drop.classList.remove("active");
    });

    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", (e) => {
        drop.classList.remove("active");

        if (link.getAttribute("href") === "#" || !link.getAttribute("href")) {
          e.preventDefault();
        }

        e.stopPropagation(); // prevent the document click from immediately closing
      });
    });
  });

  document.addEventListener("click", () => {
    document
      .querySelectorAll(".dropdown.active")
      .forEach((d) => d.classList.remove("active"));
  });
});
