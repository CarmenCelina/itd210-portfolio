
/*Hamburger Button */
const mobileToggle = document.getElementById("mobileToggle"); /*This says go get mobileToggle in html */
const mobileNav = document.getElementById("mobileNav");/* This says go get mobile nav*/
/*  This code is saying that once the user click on it the mobile nav 
 will show and then if click again it does not show*/
mobileToggle.addEventListener("click", function () {
  mobileNav.classList.toggle("open");
});

//Claude.ai :it hides the mobile nav when stretch out to desktop
window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    mobileNav.classList.remove('open');
  }
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

  /* MEDIA TOGGLE (toggleAudio — controls the welcome audio play and pause and changes the button text so the user knows what will happen) */
function toggleAudio() {
  const audio = document.getElementById('welcomeAudio'); /*get welcomeAudio from media.html */
  const btn = document.querySelector('.welcome-audio .play-btn');/* Creates a btn variable that finds the play button inside the welcome-audio div so we can change its text */

 /* It checks if audio is paused then it plays the message and changes the button to "⏸ Pause".
   Otherwise it pauses and changes the button back to "▶ Play". 
   This gives the user control over the audio. */
  if (audio.paused) {
    audio.play();
    btn.textContent = '⏸ Pause Welcome Message';
  } else {
    audio.pause();
    btn.textContent = '▶';
  }
}