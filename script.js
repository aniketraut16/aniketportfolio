var typed = new Typed(".auto-type", {
  strings: ["Web Developer", "Video Editor", "Content Creator"], // Fixed a typo in "Developer"
  typeSpeed: 125,
  backSpeed: 125,
  loop: true,
});

const allSections = document.querySelectorAll("section");
if (document.querySelector(".content").clientWidth > 500) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        // console.log(`.nav-${entry.target.id}`);
        document
          .querySelector(`.nav-${entry.target.id}`)
          .classList.add("active");
      } else {
        entry.target.classList.remove("show");
        document
          .querySelector(`.nav-${entry.target.id}`)
          .classList.remove("active");
      }
    });
  });
  allSections.forEach((e1) => observer.observe(e1));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        // console.log(`.nav-${entry.target.id}`);
        document
          .querySelector(`.snav-${entry.target.id}`)
          .classList.add("active");
      } else {
        entry.target.classList.remove("show");
        document
          .querySelector(`.snav-${entry.target.id}`)
          .classList.remove("active");
      }
    });
  });
  allSections.forEach((e1) => observer.observe(e1));
}
