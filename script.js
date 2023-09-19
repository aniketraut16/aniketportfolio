var typed = new Typed(".auto-type", {
  strings: ["Web Developer", "Video Editor", "Content Creator"], // Fixed a typo in "Developer"
  typeSpeed: 125,
  backSpeed: 125,
  loop: true,
});

function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "contactaniketraut@gmail.com",
    Password: "1BF2286851C0A7F08FB815B5B3946D8CE195",
    To: "rautnaniket@gmail.com",
    From: "contactaniketraut@gmail.com",
    Subject: "This is the subject",
    Body: "And this is the body",
  }).then((message) => alert(message));
}

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
