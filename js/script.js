
/*Hamburger Button */
const mobileToggle = document.getElementById("mobileToggle"); /*This says go get mobileToggle in html */
const mobileNav = document.getElementById("mobileNav");/* This says go get mobile nav*/
/*  This code is saying that once the user click on it the mobile nav 
 will show and then if click again it does not show*/
mobileToggle.addEventListener("click", function () {
  mobileNav.classList.toggle("open");
});

/* JS for videos */
 function toggleVideo() {
    const video = document.getElementById('heroVideo');
    const btn = document.querySelector('.pause-btn');
    if (video.paused) {
      video.play();
      btn.textContent = '⏸ Pause';
    } else {
      video.pause();
      btn.textContent = '▶ Play';
    }
  }