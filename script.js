var typed = new Typed(".auto-type", {
  strings: ["Web Developer", "Video Editor", "Content Creator"], // Fixed a typo in "Developer"
  typeSpeed: 125,
  backSpeed: 125,
  loop: true,
});

let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll(".navigation-bar a");

window.onscroll = () => {
  // Use window.scrollY to get the current scroll position
  let top = window.scrollY; // Changed from window.screenY

  sections.forEach((sec) => {
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navlinks.forEach((links) => {
        links.classList.remove("active");
      });

      // Use document.querySelector to find the navigation link with the corresponding href
      let link = document.querySelector(
        ".navigation-bar a[href='#" + id + "']"
      );

      if (link) {
        link.classList.add("active");
      }
    }
  });
};
