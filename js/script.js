
/*Hamburger Button */
const mobileToggle = document.getElementById("mobileToggle"); /*This says go get mobileToggle in html */
const mobileNav = document.getElementById("mobileNav");/* This says go get mobile nav*/

if (mobileToggle && mobileNav) {
  /*  Toggle the menu open/closed when the hamburger is tapped */
  mobileToggle.addEventListener("click", function () {
    mobileNav.classList.toggle("open");
  });

  /* Close the menu after a link is tapped so the user is not stuck on the same page */
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => mobileNav.classList.remove('open'));
  });

  //Claude.ai :it hides the mobile nav when stretch out to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
      mobileNav.classList.remove('open');
    }
  });
}

/* JS for videos */
function toggleVideo() {
  const video = document.getElementById('heroVideo');
  const btn = document.querySelector('.pause-btn');
  if (video.paused) {
    video.play();
    btn.innerHTML = '<i class="ph ph-pause" aria-hidden="true"></i> Pause';
  } else {
    video.pause();
    btn.innerHTML = '<i class="ph ph-play" aria-hidden="true"></i> Play';
  }
}

/* MEDIA TOGGLE (toggleAudio — controls the welcome audio play and pause and changes the button text so the user knows what will happen) */
function toggleAudio() {
  const audio = document.getElementById('welcomeAudio');
  const btn = document.querySelector('.welcome-audio .play-btn');

  if (audio.paused) {
    audio.play();
    btn.innerHTML = '<i class="ph ph-pause" aria-hidden="true"></i> Pause Welcome Message';
  } else {
    audio.pause();
    btn.innerHTML = '<i class="ph ph-speaker-high" aria-hidden="true"></i> Play Welcome Message';
  }
}
/* This is the javascript that allows the button to scroll up with the help of Claude.AI */
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  backToTop.style.display = window.scrollY > 300 ? "block" : "none";
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});