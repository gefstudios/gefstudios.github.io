import { games } from '../data/games';

export function PrivacyModals(): string {
  const gameModals = games
    .filter((game) => game.privacyPolicy)
    .map((game) => {
      const policy = game.privacyPolicy!;
      const sections = policy.sections
        .map(
          (section) => `
          <div>
            <h4 class="font-gaming text-white font-bold uppercase text-md mb-2">${section.title}</h4>
            <p class="text-gray-400">${section.content}</p>
            ${
              section.list
                ? `<ul class="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                    ${section.list.map((item) => `<li>${item}</li>`).join('')}
                  </ul>`
                : ''
            }
          </div>
        `,
        )
        .join('');

      return `
        <div id="${policy.modalId}" class="fixed inset-0 z-[100] hidden items-center justify-center p-4 modal-blur transition-all duration-300 opacity-0">
          <div class="bg-[#121214] border-2 border-[#00f3ff] w-full max-w-3xl max-h-[80vh] flex flex-col p-6 md:p-10 shadow-[0_0_30px_rgba(0,243,255,0.2)]">
            <div class="flex justify-between items-center border-b border-gray-800 pb-4 mb-6">
              <h3 class="font-gaming text-xl md:text-2xl font-bold text-white tracking-wider uppercase">
                ${policy.title} <span class="text-[#00f3ff] block md:inline text-sm md:text-xl font-normal md:ml-2">${policy.subtitle}</span>
              </h3>
              <button data-close-modal="${policy.modalId}" class="text-gray-400 hover:text-red-500 font-gaming text-2xl transition-colors">&times;</button>
            </div>
            <div class="overflow-y-auto pr-2 text-gray-300 font-light text-sm md:text-base space-y-6 scrollbar-thin">
              <p class="font-semibold text-[#00f3ff]">Última atualização: ${policy.updatedAt}</p>
              <p>${policy.intro}</p>
              ${sections}
            </div>
            <div class="border-t border-gray-800 pt-4 mt-6 flex justify-end">
              <button data-close-modal="${policy.modalId}" class="font-gaming border border-[#00f3ff] text-[#00f3ff] px-6 py-2 uppercase text-sm tracking-widest hover:bg-[#00f3ff] hover:text-black transition-all duration-300">
                Fechar Terminal
              </button>
            </div>
          </div>
        </div>
      `;
    })
    .join('');

  return `
    <div id="general-modal" class="fixed inset-0 z-[100] hidden items-center justify-center p-4 modal-blur transition-all duration-300 opacity-0">
      <div class="bg-[#121214] border-2 border-gray-700 w-full max-w-3xl max-h-[80vh] flex flex-col p-6 md:p-10 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
        <div class="flex justify-between items-center border-b border-gray-800 pb-4 mb-6">
          <h3 class="font-gaming text-xl md:text-2xl font-bold text-white tracking-wider uppercase">
            POLÍTICA INSTITUCIONAL <span class="text-gray-500 block md:inline text-sm md:text-xl font-normal md:ml-2">[ GEF STUDIOS ]</span>
          </h3>
          <button data-close-modal="general-modal" class="text-gray-400 hover:text-red-500 font-gaming text-2xl transition-colors">&times;</button>
        </div>
        <div class="overflow-y-auto pr-2 text-gray-300 font-light text-sm md:text-base space-y-4 scrollbar-thin">
          <p class="font-semibold text-gray-400">Última atualização: Junho de 2026</p>
          <p>Esta política se aplica a todas as plataformas, websites e interações gerais controladas pela Gef Studios.</p>
          <p>Nossos canais de comunicação e portfólios visam primariamente a divulgação de projetos de entretenimento digital. Informações coletadas através de formulários de contato voluntários são protegidas e não compartilhadas com terceiros sem consentimento explícito.</p>
        </div>
        <div class="border-t border-gray-800 pt-4 mt-6 flex justify-end">
          <button data-close-modal="general-modal" class="font-gaming border border-gray-600 text-gray-400 px-6 py-2 uppercase text-sm tracking-widest hover:bg-white hover:text-black transition-all duration-300">
            Fechar Terminal
          </button>
        </div>
      </div>
    </div>
    ${gameModals}

    <div id="contact-modal" class="fixed inset-0 z-[100] hidden items-center justify-center p-4 modal-blur transition-all duration-300 opacity-0 text-left">
      <div class="bg-[#121214] border-2 border-[#00f3ff] w-full max-w-xl max-h-[90vh] flex flex-col p-6 md:p-10 shadow-[0_0_30px_rgba(0,243,255,0.2)] relative text-left">
        <div class="flex justify-between items-center border-b border-gray-800 pb-4 mb-6">
          <h3 class="font-gaming text-xl md:text-2xl font-bold text-white tracking-wider uppercase">
            TERMINAL DE <span class="text-[#00f3ff]">FEEDBACK</span>
          </h3>
          <button data-close-modal="contact-modal" class="text-gray-400 hover:text-red-500 font-gaming text-2xl transition-colors">&times;</button>
        </div>
        <div class="overflow-y-auto pr-2 scrollbar-thin">
          <form id="contact-form" action="https://api.web3forms.com/submit" method="POST" class="space-y-6">
            <input type="hidden" name="access_key" value="34b6fbaa-7040-4b11-83c9-c7d13c473d6d">

            <div>
              <label class="block font-gaming text-xs uppercase tracking-wider text-gray-400 mb-2">Seu Nome</label>
              <input type="text" name="name" required class="w-full bg-[#0a0a0c] border border-gray-800 p-3 text-white focus:outline-none focus:border-[#00f3ff] transition-colors rounded-none">
            </div>
            <div>
              <label class="block font-gaming text-xs uppercase tracking-wider text-gray-400 mb-2">Seu E-mail</label>
              <input type="email" name="email" required class="w-full bg-[#0a0a0c] border border-gray-800 p-3 text-white focus:outline-none focus:border-[#00f3ff] transition-colors rounded-none">
            </div>
            <div>
              <label class="block font-gaming text-xs uppercase tracking-wider text-gray-400 mb-2">Mensagem</label>
              <textarea rows="4" name="message" required class="w-full bg-[#0a0a0c] border border-gray-800 p-3 text-white focus:outline-none focus:border-[#00f3ff] transition-colors rounded-none"></textarea>
            </div>
            <button type="submit" id="submit-btn" class="w-full font-gaming bg-[#9d4edd] text-white py-3 font-bold uppercase tracking-widest hover:bg-opacity-80 transition-all duration-300">
              Transmitir Sinal
            </button>
          </form>

          <div id="success-message" class="hidden bg-[#121214] flex flex-col items-center justify-center p-8 text-center border border-[#00f3ff] shadow-[0_0_20px_rgba(0,243,255,0.15)] animate-fade-in w-full min-h-[300px]">
            <div class="w-16 h-16 border-2 border-[#00f3ff] rounded-full flex items-center justify-center mb-6 shadow-[0_0_10px_var(--neon-cyan)]">
              <svg class="w-8 h-8 text-[#00f3ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h3 class="font-gaming text-2xl md:text-3xl font-bold text-white uppercase tracking-wider mb-4">Sinal Transmitido!</h3>
            <p class="text-gray-400 font-light max-w-md text-sm md:text-base leading-relaxed">
              Sua mensagem foi criptografada e enviada com sucesso para a nossa base de dados.
            </p>
          </div>
        </div>
      </div>
    </div>
  `;
}
