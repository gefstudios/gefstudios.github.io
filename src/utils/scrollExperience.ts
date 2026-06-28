const REVEAL_SELECTOR = '.scroll-reveal, .reveal';
const REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let observer: IntersectionObserver | null = null;

function revealElement(element: HTMLElement): void {
  element.classList.add('is-visible');
  element.classList.add('active');
}

function hideElement(element: HTMLElement): void {
  if (element.dataset.revealOnce !== 'false') return;
  element.classList.remove('is-visible');
  element.classList.remove('active');
}

function observeElements(root: ParentNode = document): void {
  if (!observer) return;

  root.querySelectorAll<HTMLElement>(REVEAL_SELECTOR).forEach((element) => {
    if (element.classList.contains('is-visible')) return;
    observer!.observe(element);
  });
}

export function initScrollReveal(): void {
  if (REDUCED_MOTION) {
    document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR).forEach(revealElement);
    return;
  }

  if (observer) {
    observeElements();
    return;
  }

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const element = entry.target as HTMLElement;

        if (entry.isIntersecting) {
          const delay = Number(element.dataset.revealDelay ?? 0);
          if (delay > 0) {
            window.setTimeout(() => revealElement(element), delay);
          } else {
            revealElement(element);
          }
          if (element.dataset.revealOnce !== 'false') {
            observer?.unobserve(element);
          }
        } else {
          hideElement(element);
        }
      });
    },
    {
      root: null,
      rootMargin: '0px 0px -8% 0px',
      threshold: 0.12,
    },
  );

  observeElements();
}

export function playHeroIntro(): void {
  if (REDUCED_MOTION) return;

  document.querySelectorAll<HTMLElement>('[data-hero-intro]').forEach((element, index) => {
    window.setTimeout(() => revealElement(element), 120 + index * 140);
  });
}

export function initScrollProgress(): void {
  const bar = document.getElementById('scroll-progress');
  if (!bar || REDUCED_MOTION) return;

  let ticking = false;

  const update = (): void => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollHeight > 0 ? (window.scrollY / scrollHeight) * 100 : 0;
    bar.style.width = `${progress}%`;
    ticking = false;
  };

  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    },
    { passive: true },
  );

  update();
}

export function initParallaxScroll(): void {
  if (REDUCED_MOTION) return;

  const hero = document.getElementById('hero');
  if (!hero) return;

  const logoWrap = document.getElementById('hero-logo-wrap');
  const heroCopy = document.getElementById('hero-copy');
  const canvas = document.getElementById('bg-canvas');
  let ticking = false;

  const update = (): void => {
    const scrollY = window.scrollY;
    const heroHeight = hero.offsetHeight;
    const progress = Math.min(scrollY / heroHeight, 1);

    if (logoWrap) {
      logoWrap.style.transform = `translateY(${scrollY * 0.22}px) scale(${1 - progress * 0.08})`;
      logoWrap.style.opacity = `${1 - progress * 0.55}`;
    }

    if (heroCopy) {
      heroCopy.style.transform = `translateY(${scrollY * 0.1}px)`;
      heroCopy.style.opacity = `${1 - progress * 0.75}`;
    }

    if (canvas) {
      canvas.style.opacity = `${0.4 - progress * 0.15}`;
    }

    ticking = false;
  };

  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    },
    { passive: true },
  );
}

export function resetScrollExperience(root: ParentNode = document): void {
  root.querySelectorAll<HTMLElement>(REVEAL_SELECTOR).forEach((element) => {
    if (element.dataset.revealOnce === 'false') {
      element.classList.remove('is-visible', 'active');
    }
  });
  observeElements(root);
}

export function triggerSectionReveal(section: HTMLElement): void {
  section.classList.remove('section-arrive');
  void section.offsetWidth;
  section.classList.add('section-arrive');

  const items = section.querySelectorAll<HTMLElement>(REVEAL_SELECTOR);
  items.forEach((element, index) => {
    element.classList.remove('is-visible', 'active');
    window.setTimeout(() => revealElement(element), 160 + index * 100);
  });
}
