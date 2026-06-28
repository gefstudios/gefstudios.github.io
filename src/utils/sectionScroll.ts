import { triggerSectionReveal } from './scrollExperience';

const SECTION_IDS = new Set(['games', 'about', 'contact']);
const HEADER_OFFSET = 88;
const SCROLL_DURATION = 1000;

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

function smoothScrollTo(targetY: number, duration = SCROLL_DURATION): Promise<void> {
  return new Promise((resolve) => {
    const startY = window.scrollY;
    const distance = targetY - startY;

    if (Math.abs(distance) < 2) {
      resolve();
      return;
    }

    const startTime = performance.now();

    function step(now: number): void {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      window.scrollTo(0, startY + distance * easeOutCubic(progress));

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        resolve();
      }
    }

    requestAnimationFrame(step);
  });
}

export function isSectionAnchor(hash: string): boolean {
  const id = hash.replace(/^#/, '');
  return SECTION_IDS.has(id);
}

export function scrollToSection(sectionId: string): void {
  const section = document.getElementById(sectionId);
  if (!section) return;

  const targetY = section.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;

  void smoothScrollTo(targetY).then(() => {
    triggerSectionReveal(section);
  });
}

export function initSectionNavigation(): void {
  document.addEventListener('click', (event) => {
    const link = (event.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
    if (!link) return;

    const sectionId = link.getAttribute('href')?.replace(/^#/, '') ?? '';
    if (!SECTION_IDS.has(sectionId)) return;
    if (!document.getElementById('games')) return;

    event.preventDefault();

    if (window.location.hash === `#${sectionId}`) {
      scrollToSection(sectionId);
      return;
    }

    window.location.hash = sectionId;
  });
}

export function handleSectionHashNavigation(): void {
  const sectionId = window.location.hash.replace(/^#/, '');
  if (!SECTION_IDS.has(sectionId)) return;
  if (!document.getElementById(sectionId)) return;

  requestAnimationFrame(() => {
    requestAnimationFrame(() => scrollToSection(sectionId));
  });
}
