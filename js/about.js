

/* This makes the numbers count up from 0 to their target number
   It grabs every stat-number element and animates it counting up
   This is more engaging than just showing a static number */
const counters = document.querySelectorAll('.stat-number');

counters.forEach(counter => {
  const target = +counter.getAttribute('data-target');
  const speed = 200; /* lower = faster */

  const update = () => {
    const current = +counter.innerText;
    const increment = Math.ceil(target / speed);

    if (current < target) {
      counter.innerText = current + increment;
      setTimeout(update, 10); /* runs every 10ms */
    } else {
      counter.innerText = target; /* snaps to exact number at end */
    }
  };

  update();
});

/*REVEAL SCROLL */

  const revealEls = document.querySelectorAll('.st-reveal');
 
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target); // animates once only
        }
      });
    },
    { threshold: 0.2 }
  );
 
  revealEls.forEach(el => observer.observe(el));