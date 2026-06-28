import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import type { Game } from '../data/games';

export function GameStoreView(game: Game): string {
  const storeUrl = game.storeLinks?.googlePlay ?? game.storeLinks?.appStore;

  if (!storeUrl) {
    return '';
  }

  const storeName = game.storeLinks?.googlePlay ? 'Google Play Store' : 'App Store';
  const storeBadge = game.storeLinks?.googlePlay ? 'Google Play' : 'App Store';

  const features = game.features
    ? game.features
        .map(
          (feature) => `
          <li class="flex items-center gap-3 text-gray-300">
            <span class="text-[#00f3ff]">✓</span>
            <span>${feature}</span>
          </li>
        `,
        )
        .join('')
    : '';

  return `
    ${Header()}

    <section class="min-h-screen pt-28 pb-20 px-6 flex items-center justify-center">
      <div class="w-full max-w-lg reveal">
        <a href="#/game/${game.id}" class="inline-flex items-center gap-2 font-gaming text-sm text-gray-500 hover:text-[#00f3ff] uppercase tracking-widest mb-8 transition-colors">
          ← Voltar aos Detalhes
        </a>

        <div class="relative bg-[#121214] border border-[#00f3ff]/30 p-8 md:p-10 text-center shadow-[0_0_40px_rgba(0,243,255,0.12)]">
          <div class="absolute inset-0 bg-gradient-to-b from-[#00f3ff]/5 to-transparent pointer-events-none"></div>

          <div class="relative mx-auto w-32 h-32 mb-6 flex items-center justify-center">
            <div class="absolute inset-0 rounded-2xl bg-[#00f3ff]/10 animate-pulse"></div>
            <img src="${game.icon}" alt="${game.title}" class="relative w-28 h-28 object-contain drop-shadow-[0_0_20px_rgba(0,243,255,0.4)]">
          </div>

          <p class="font-gaming text-[#9d4edd] text-xs uppercase tracking-[0.3em] mb-2">Portal de Download</p>
          <h1 class="font-gaming text-3xl md:text-4xl font-black text-white uppercase mb-3">${game.title}</h1>
          <p class="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
            ${game.shortDescription}
          </p>

          ${
            features
              ? `<ul class="text-left space-y-2 mb-8 border border-gray-800 bg-[#0a0a0c]/60 p-5">${features}</ul>`
              : ''
          }

          <div class="space-y-4">
            <a
              href="${storeUrl}"
              target="_blank"
              rel="noopener noreferrer"
              data-store-redirect
              class="group flex items-center justify-center gap-3 w-full font-gaming bg-[#00f3ff] text-black py-4 px-6 uppercase tracking-widest text-sm font-bold hover:bg-white transition-all duration-300 shadow-[0_0_25px_rgba(0,243,255,0.35)]"
            >
              <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M3.6 2.4c-.3.3-.6.8-.6 1.4v16.4c0 .6.3 1.1.6 1.4l.1.1 9.2-9.2v-.2L3.7 2.3l-.1.1zm10.4 10.4-2.8 2.8 3.9 2.2c1.1.6 2 .1 2.4-.7l.1-.2v-1.4l-3.6-2.7zm0-3.4L18.5 6c.5-.3.9-.9.5-1.6-.4-.7-1.2-.9-2-.5l-9 5.1 2.8 2.8 3.2-3.2zM4.8 1.6 14.2 7l3.2-3.2L6.4 1.1c-.8-.5-1.6-.2-2 .4-.1.1-.1.1-.6.1z"/>
              </svg>
              Baixar na ${storeBadge}
            </a>

            <p class="text-gray-500 text-xs leading-relaxed">
              Ao continuar, você será direcionado para a <span class="text-gray-400">${storeName}</span>.
              O download é gratuito e seguro.
            </p>

            <a href="#/" class="inline-block font-gaming text-xs text-gray-600 hover:text-[#00f3ff] uppercase tracking-widest transition-colors">
              Explorar outros jogos
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="pb-16 px-6 max-w-4xl mx-auto text-center">
      ${Footer()}
    </section>
  `;
}
