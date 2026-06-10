let revealInitialized = false;

function revealElements(): void {
  document.querySelectorAll('.reveal').forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    if (elementTop < windowHeight - 120) {
      element.classList.add('active');
    }
  });
}

export function initRevealEffect(): void {
  if (!revealInitialized) {
    window.addEventListener('scroll', revealElements);
    revealInitialized = true;
  }

  revealElements();
}

export function initCardTiltEffect(): void {
  document.querySelectorAll<HTMLElement>('.card-3d').forEach((card) => {
    card.addEventListener('mousemove', (event) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const xc = rect.width / 2;
      const yc = rect.height / 2;
      const angleX = (yc - y) / 12;
      const angleY = (x - xc) / 12;
      card.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.01)`;
    });

    card.style.perspective = '1000px';
    card.style.transition = 'transform 0.1s ease-out';

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
      card.style.transition = 'transform 0.5s ease';
    });
  });
}

export function initCarouselDrag(): void {
  const carousel = document.querySelector<HTMLElement>('.carousel-container');
  if (!carousel) return;

  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  carousel.addEventListener('mousedown', (event) => {
    isDown = true;
    startX = event.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
    carousel.style.scrollSnapType = 'none';
  });

  carousel.addEventListener('mouseleave', () => {
    isDown = false;
  });

  carousel.addEventListener('mouseup', () => {
    isDown = false;
    carousel.style.scrollSnapType = 'x mandatory';
  });

  carousel.addEventListener('mousemove', (event) => {
    if (!isDown) return;
    event.preventDefault();
    const x = event.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 1.5;
    carousel.scrollLeft = scrollLeft - walk;
  });
}
