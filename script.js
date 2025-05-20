"use strict";


document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll('.column-img, .bottom-img-eco, .img-1-eco, .img-2, .card, .img-1, .assisi, .Antoninus, .Archangel, .nonnatus, .anao-church, .web-cover-text, .Qwerty, .atv, .img-1-faith, .img-2-faith, .antonius, .archangel, .peace, .cathedral, .Faustina, .therese, .mapTarlacVisuals, .column-eco, .img-1-eco-1, .img-2-eco-1, .img-tour-1, .fes .media-wrapper > .image, .fes-1 .media-wrapper > .image, .fes .media-wrapper > video, .fes-1 .media-wrapper > video, .pto-img, .pto-img-2, .la-maja, .museo-kanlahi-img');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      console.log('Checking:', entry.target.className, 'Visible:', entry.isIntersecting);
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  images.forEach(img => observer.observe(img));
});


/* NAVIGATION LINKS EFFECT */
const nav = document.querySelector(".navbar");
const arrows = document.querySelectorAll(".arrow");
let hoverTimeout;

const navHover = function (e, opacity) {
  clearTimeout(hoverTimeout);

  hoverTimeout = setTimeout(() => {
    if (e.target.classList.contains("navbar__link")) {
      const link = e.target;
      const siblings = link.closest(".navbar").querySelectorAll(".navbar__link");
      const title = link.closest(".navbar").querySelector(".navbar__title");

      siblings.forEach(el => {
        if (el !== link) el.style.opacity = opacity;
      });

      if (title) title.style.opacity = opacity;
    }

    if (e.target.classList.contains("navbar__title")) {
      const title = e.target;
      const links = title.closest(".navbar").querySelectorAll(".navbar__link");

      links.forEach(el => {
        el.style.opacity = opacity;
      });
    }
  }, 100);
};

document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.querySelector(".dropdown");
  let timeout;

  dropdown.addEventListener("mouseenter", function () {
      clearTimeout(timeout); 
      this.classList.add("active");
  });

  dropdown.addEventListener("mouseleave", function () {
      timeout = setTimeout(() => {
          this.classList.remove("active");
      }, 500);
  });
});

/* MOBILE NAVIGATION TOGGLE */
const navOpen = document.querySelector(".navOpen");
const navClose = document.querySelector(".navClose");
const navigation = document.querySelector(".navbar");
const navtitle = document.querySelector(".navtitle");

navOpen.addEventListener("click", () => {
  navClose.style.display = "block";
  navOpen.style.display = "none";
  navigation.classList.add("open");
  navtitle.style.display = "none";
});

navClose.addEventListener("click", () => {
  navClose.style.display = "none";
  navOpen.style.display = "block";
  navigation.classList.remove("open");
  navtitle.style.display = "block";
});

/* SCROLL FUNCTION (BACK TO TOP) */
let mybutton = document.getElementById("myBtn");

window.onscroll = function () { scrollFunction(); };

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/* HOME PAGE SLIDES */
const slides = document.querySelectorAll(".slide");
let current = 0;

const hideSlides = () => {
  for (const slide of slides) {
    slide.style.display = "none";
  }
};

const showSlide = index => {
  slides[index].style.display = "block";
};

const next = () => {
  hideSlides();
  current = (current + 1) % slides.length;
  showSlide(current);
};

const prev = () => {
  hideSlides();
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
};

const start = () => {
  hideSlides();
  showSlide(current);
};

start();

/* DIORAMA VIDEO SHOW AND HIDE */
const playButton = document.querySelector(".home__btn");
const dioramaVideo = document.querySelector(".home__diorama");
const dioramaOverlay = document.querySelector(".home__videoOverlay");
const goBackIcon = document.querySelector(".homeIconClose");

const setDisplayDioramaVideo = function (showDioramaVideo) {
  dioramaVideo.style.display = showDioramaVideo ? "block" : "none";
  playButton.style.display = showDioramaVideo ? "none" : "block";
  dioramaOverlay.style.display = showDioramaVideo ? "block" : "none";
  goBackIcon.style.display = showDioramaVideo ? "block" : "none";

  arrows.forEach(arrow => {
    arrow.style.display = showDioramaVideo ? "none" : "block";
  });

  if (showDioramaVideo) {
    dioramaVideo.src =
      "https://www.youtube.com/embed/eJZwMEo4ogg?autoplay=1&mute=0";
    document.body.classList.add("no-scroll");
  } else {
    dioramaVideo.src =
      "https://www.youtube.com/embed/eJZwMEo4ogg?autoplay=1&mute=1";
    document.body.classList.remove("no-scroll");
  }
};

playButton.addEventListener("click", () => setDisplayDioramaVideo(true));
goBackIcon.addEventListener("click", () => {
  setDisplayDioramaVideo(false);
});

/* SLIDES DIORAMA */
let slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let navImages = document.getElementsByClassName("click-image");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < navImages.length; i++) {
    navImages[i].classList.remove("active");
  }

  slides[slideIndex - 1].style.display = "flex";
  navImages[slideIndex - 1].classList.add("active");
}

function nextSlide() {
  showSlides((slideIndex += 1));
}

function prevSlide() {
  showSlides((slideIndex -= 1));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

