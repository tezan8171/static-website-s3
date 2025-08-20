// Initialize AOS (scroll animations)
AOS.init({
  duration: 700,
  easing: 'ease-out',
  once: true
});

// Parallax on mouse for hero blobs (subtle)
const hero = document.querySelector('.hero');
const blobs = document.querySelectorAll('.blob');
hero?.addEventListener('mousemove', (e) => {
  const rect = hero.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width - 0.5;
  const y = (e.clientY - rect.top) / rect.height - 0.5;
  blobs.forEach((b, i) => {
    const strength = (i + 1) * 8;
    b.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  });
});

// VanillaTilt initialized via data-tilt attributes (library loaded in HTML)
// Nothing else required here, but you can tweak by selecting elements manually if needed.
