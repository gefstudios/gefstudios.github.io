import { PrivacyModals } from '../components/PrivacyModals';
import { getGameById } from '../data/games';
import { initContactForm } from '../utils/contactForm';
import { initCardTiltEffect, initCarouselDrag, initRevealEffect } from '../utils/effects';
import { checkPrivacyHash } from '../utils/modals';
import { GameDetailsView } from '../views/GameDetailsView';
import { HomeView } from '../views/HomeView';

type RouteHandler = () => string;

const routes: Record<string, RouteHandler> = {
  '/': () => HomeView(),
};

const HOME_ANCHORS = new Set(['games', 'about', 'contact', 'privacy', 'privacyDeliverySort']);

function parseRoute(): { path: string; params: Record<string, string>; isAnchorOnly: boolean } {
  const hash = window.location.hash.replace(/^#/, '');

  if (!hash || hash === '/') {
    return { path: '/', params: {}, isAnchorOnly: false };
  }

  const segments = hash.split('/').filter(Boolean);

  if (segments[0] === 'game' && segments[1]) {
    return { path: '/game/:id', params: { id: segments[1] }, isAnchorOnly: false };
  }

  if (HOME_ANCHORS.has(segments[0]) && segments.length === 1) {
    return { path: '/', params: {}, isAnchorOnly: true };
  }

  return { path: '/', params: {}, isAnchorOnly: false };
}

function scrollToTop(): void {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderRoute(): void {
  const app = document.getElementById('app');
  if (!app) return;

  const { path, params, isAnchorOnly } = parseRoute();
  const isHomeMounted = app.querySelector('#games') !== null;

  if (path === '/game/:id') {
    const game = getGameById(params.id);
    app.innerHTML = game ? GameDetailsView(game) : NotFoundView();
  } else if (!isAnchorOnly || !isHomeMounted) {
    app.innerHTML = routes['/']();
  }

  app.insertAdjacentHTML('beforeend', PrivacyModals());
  initPageEffects();
  checkPrivacyHash();
}

function NotFoundView(): string {
  return `
    <section class="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 class="font-gaming text-5xl text-white uppercase mb-4">Universo Não Encontrado</h1>
      <p class="text-gray-400 mb-8">O jogo que você procura ainda não foi forjado nesta dimensão.</p>
      <a href="#/" class="font-gaming px-8 py-4 border-2 border-[#00f3ff] text-[#00f3ff] uppercase tracking-widest hover:bg-[#00f3ff] hover:text-black transition-all duration-300">
        Voltar à Home
      </a>
    </section>
  `;
}

function initPageEffects(): void {
  initRevealEffect();
  initCardTiltEffect();
  initCarouselDrag();
  initContactForm();
}

export function initRouter(): void {
  document.addEventListener('click', (event) => {
    const link = (event.target as HTMLElement).closest<HTMLAnchorElement>('a[data-scroll-top]');
    if (link) scrollToTop();
  });

  window.addEventListener('hashchange', renderRoute);
  window.addEventListener('hashchange', checkPrivacyHash);
  renderRoute();
}
