import type { Game } from '../data/games';

export function GameCard(game: Game): string {
  if (game.status === 'confidential' || game.status === 'briefing') {
    return ConfidentialGameCard(game);
  }

  const privacyLink = game.privacyPolicy
    ? `<a href="${game.privacyPolicy.hash}" data-modal="${game.privacyPolicy.modalId}" class="text-xs font-gaming font-bold bg-gray-900 border border-gray-800 text-gray-400 hover:text-[#00f3ff] hover:border-[#00f3ff] px-3 py-1 uppercase tracking-wider transition-all duration-300">
        Privacidade
      </a>`
    : '';

  const badge = game.badge
    ? `<span class="absolute top-0 right-0 font-gaming text-xs bg-[#00f3ff] text-black font-black px-2 py-1 tracking-wider z-20 shadow-[0_0_10px_var(--neon-cyan)]">${game.badge}</span>`
    : '';

  return `
    <div class="carousel-item flex-shrink-0 w-[85vw] md:w-[380px] reveal group relative bg-[#121214] border border-gray-800 p-4 rounded-none transition-all duration-300 neon-border card-3d">
      <a href="#/game/${game.id}" class="block">
        <div class="relative h-64 flex items-center justify-center mb-6">
          <img src="${game.icon}" alt="${game.title}" class="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500 ease-out">
          ${badge}
        </div>
        <h3 class="font-gaming text-2xl font-bold text-white mb-2 group-hover:text-[#00f3ff] transition-colors">${game.title}</h3>
        <p class="text-gray-400 mb-4 h-[72px] overflow-hidden text-ellipsis">${game.shortDescription}</p>
      </a>
      <div class="flex items-center justify-between">
        <span class="inline-block text-xs font-gaming font-bold bg-transparent border border-[#00f3ff] text-[#00f3ff] px-3 py-1 uppercase tracking-wider">${game.statusLabel}</span>
        ${privacyLink}
      </div>
    </div>
  `;
}

function ConfidentialGameCard(game: Game): string {
  return `
    <div class="carousel-item flex-shrink-0 w-[85vw] md:w-[380px] reveal group relative bg-[#121214] border border-gray-800 p-4 rounded-none transition-all duration-300 opacity-30 hover:opacity-50 border-dashed">
      <div class="h-64 border-2 border-dashed border-gray-800 flex flex-col items-center justify-center mb-6">
        <span class="font-gaming text-gray-600 text-xl font-bold tracking-widest">[ CONFIDENCIAL ]</span>
      </div>
      <h3 class="font-gaming text-2xl font-bold text-gray-500 mb-2">${game.title}</h3>
      <p class="text-gray-600 mb-4">${game.shortDescription}</p>
      <span class="inline-block text-xs font-gaming font-bold bg-gray-800 text-gray-500 px-3 py-1 uppercase tracking-wider">${game.statusLabel}</span>
    </div>
  `;
}
