let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

const texts = [
  "Freelancer",
  "Front-End Developer",
  "Web Designer",
  "Graphic Designer",
  "Virtual Assistant",
];
let index = 0;
let charIndex = 0;
const speed = 100;
const delayBetweenWords = 2000;

function typeWriter() {
  const currentText = texts[index];
  if (charIndex < currentText.length) {
    document.getElementById("typewriter-text").innerHTML +=
      currentText.charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(() => {
      document.getElementById("typewriter-text").innerHTML = "";
      charIndex = 0;
      index = (index + 1) % texts.length;
      typeWriter();
    }, delayBetweenWords);
  }
}

window.onload = typeWriter;
