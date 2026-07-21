import {
  initParallaxScroll,
  initScrollProgress,
  initScrollReveal,
  playHeroIntro,
  resetScrollExperience,
} from './scrollExperience';

export function initScrollExperience(): void {
  initScrollReveal();
  initScrollProgress();
  initParallaxScroll();
  playHeroIntro();
}

export function refreshScrollExperience(root: ParentNode = document): void {
  resetScrollExperience(root);
  playHeroIntro();
  initParallaxScroll();
}

export function initRevealEffect(): void {
  initScrollReveal();
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

  const prevBtn = document.getElementById('carousel-prev');
  const nextBtn = document.getElementById('carousel-next');

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      carousel.scrollBy({ left: -400, behavior: 'smooth' });
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      carousel.scrollBy({ left: 400, behavior: 'smooth' });
    });
  }
}
