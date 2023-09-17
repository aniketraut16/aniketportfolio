var typed = new Typed(".auto-type", {
  strings: ["Web Developer", "Video Editor", "Content Creator"], // Fixed a typo in "Developer"
  typeSpeed: 125,
  backSpeed: 125,
  loop: true,
});

let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll(".navigation-bar a");
let content = document.querySelector(".content");
let lastsection = document.getElementById("contacts");
let rect = lastsection.getBoundingClientRect();
content.onscroll = () => {
  console.log(content.offsetTop);
};

// window.onscroll = () => {
//   // Use window.scrollY to get the current scroll position
//   let top = window.scrollY; // Changed from window.screenY

//   sections.forEach((sec) => {
//     let offset = sec.offsetTop;
//     let height = sec.offsetHeight;
//     let id = sec.getAttribute("id");

//     if (top >= offset && top < offset + height) {
//       navlinks.forEach((links) => {
//         links.classList.remove("active");
//       });

//       // Use document.querySelector to find the navigation link with the corresponding href
//       let link = document.querySelector(
//         ".navigation-bar a[href='#" + id + "']"
//       );

//       if (link) {
//         link.classList.add("active");
//       }
//     }
//   });
// };
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
