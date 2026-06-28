import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { getGameDownloadPath, hasStoreLink, type Game } from '../data/games';

export function GameDetailsView(game: Game): string {
  const features = game.features
    ? `
      <div class="space-y-4">
        <h3 class="font-gaming text-xl text-[#00f3ff] uppercase tracking-wider">Destaques</h3>
        <ul class="space-y-2 text-gray-400">
          ${game.features.map((feature) => `<li class="flex items-start gap-3"><span class="text-[#9d4edd] mt-1">▸</span><span>${feature}</span></li>`).join('')}
        </ul>
      </div>
    `
    : '';

  const storeButtons = hasStoreLink(game)
    ? [
        game.storeLinks?.googlePlay || game.storeLinks?.appStore
          ? `<a href="${getGameDownloadPath(game.id)}" class="font-gaming bg-[#00f3ff] text-black px-6 py-3 uppercase text-sm tracking-widest hover:bg-white transition-all duration-300 shadow-[0_0_15px_rgba(0,243,255,0.25)]">
              Baixar Grátis
            </a>`
          : '',
      ]
        .filter(Boolean)
        .join('')
    : '';

  const storeSection = storeButtons
    ? `<div class="flex flex-wrap gap-4 pt-2">${storeButtons}</div>`
    : '';

  const privacyButton = game.privacyPolicy
    ? `<a href="${game.privacyPolicy.hash}" data-modal="${game.privacyPolicy.modalId}" class="font-gaming border border-gray-800 text-gray-400 hover:text-[#00f3ff] hover:border-[#00f3ff] px-6 py-3 uppercase text-sm tracking-widest transition-all duration-300">
        Política de Privacidade
      </a>`
    : '';

  const iconSection = game.icon
    ? `<img src="${game.icon}" alt="${game.title}" class="w-full max-w-sm mx-auto object-contain p-4">`
    : `<div class="h-64 border-2 border-dashed border-gray-800 flex items-center justify-center">
        <span class="font-gaming text-gray-600 text-xl font-bold tracking-widest">[ CONFIDENCIAL ]</span>
      </div>`;

  return `
    ${Header()}

    <section class="min-h-screen pt-28 pb-20 px-6 max-w-5xl mx-auto">
      <a href="#/" class="inline-flex items-center gap-2 font-gaming text-sm text-gray-500 hover:text-[#00f3ff] uppercase tracking-widest mb-10 transition-colors">
        ← Voltar ao Portfólio
      </a>

      <div class="grid md:grid-cols-2 gap-12 items-start reveal">
        <div class="bg-[#121214] border border-gray-800 p-6 relative">
          ${game.badge ? `<span class="absolute top-4 right-4 font-gaming text-xs bg-[#00f3ff] text-black font-black px-2 py-1 tracking-wider shadow-[0_0_10px_var(--neon-cyan)]">${game.badge}</span>` : ''}
          ${iconSection}
        </div>

        <div class="space-y-6">
          <div>
            <p class="font-gaming text-[#9d4edd] text-sm uppercase tracking-widest mb-2">${game.statusLabel}</p>
            <h1 class="font-gaming text-4xl md:text-5xl font-black text-white uppercase">${game.title}</h1>
          </div>

          <p class="text-gray-300 text-lg leading-relaxed">
            ${game.longDescription ?? game.shortDescription}
          </p>

          ${features}

          ${storeSection}

          <div class="flex flex-wrap gap-4 pt-4">
            ${privacyButton}
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 px-6 max-w-4xl mx-auto text-center">
      ${Footer()}
    </section>
  `;
}
