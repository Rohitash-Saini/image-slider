// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close menu when a link is clicked (mobile)
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});


// ===== SLIDER =====
const track   = document.getElementById('sliderTrack');
const slides  = track.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dotsContainer = document.getElementById('dotsContainer');

const total = slides.length;
let current = 0;

// Create dots
slides.forEach((_, i) => {
  const dot = document.createElement('button');
  dot.classList.add('dot');
  if (i === 0) dot.classList.add('active');
  dot.addEventListener('click', () => goTo(i));
  dotsContainer.appendChild(dot);
});

const dots = dotsContainer.querySelectorAll('.dot');

// Go to a specific slide
function goTo(index) {
  current = (index + total) % total;
  track.style.transform = `translateX(-${current * 100}%)`;

  dots.forEach(d => d.classList.remove('active'));
  dots[current].classList.add('active');
}

// Arrow buttons
prevBtn.addEventListener('click', () => goTo(current - 1));
nextBtn.addEventListener('click', () => goTo(current + 1));

// Keyboard support
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowLeft')  goTo(current - 1);
  if (e.key === 'ArrowRight') goTo(current + 1);
});

// Auto-play every 3 seconds
setInterval(() => goTo(current + 1), 3000);

