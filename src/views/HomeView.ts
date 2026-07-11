import { ContactForm } from '../components/ContactForm';
import { Footer } from '../components/Footer';
import { GameCard } from '../components/GameCard';
import { Header } from '../components/Header';
import { games } from '../data/games';

export function HomeView(): string {
  const gameCards = games.map((game, index) => GameCard(game, index)).join('');

  return `
    ${Header()}

    <section id="hero" class="relative min-h-screen flex flex-col justify-center items-center px-4 pt-20 pb-10">
      <div class="z-10 max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12 md:gap-6">
        <div id="hero-logo-wrap" class="flex justify-center items-center w-full md:w-1/2 scroll-reveal scroll-reveal-scale" data-hero-intro>
          <div id="floating-logo" style="width: 360px; height: 360px; position: relative; pointer-events: none; animation: fl-size-breathe 7s ease-in-out infinite alternate; flex-shrink: 0;">
            <div class="fl-nebula"></div>
            <div class="fl-ring-secondary"></div>
            <div class="fl-ring-main"></div>
            <div class="fl-flare fl-flare-top"></div>
            <div class="fl-flare fl-flare-bottom"></div>
            <svg style="position:absolute;inset:0;width:100%;height:100%;overflow:visible;pointer-events:none;">
              <line x1="50%" y1="0%" x2="50%" y2="100%" stroke="url(#fl-vg)" stroke-width="1" opacity="0.3"/>
              <line x1="0%" y1="50%" x2="100%" y2="50%" stroke="url(#fl-hg)" stroke-width="0.7" opacity="0.2"/>
              <defs>
                <linearGradient id="fl-vg" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="#00e8ff" stop-opacity="0"/>
                  <stop offset="40%" stop-color="#00e8ff" stop-opacity="0.7"/>
                  <stop offset="50%" stop-color="#ffffff" stop-opacity="1"/>
                  <stop offset="60%" stop-color="#00e8ff" stop-opacity="0.7"/>
                  <stop offset="100%" stop-color="#00e8ff" stop-opacity="0"/>
                </linearGradient>
                <linearGradient id="fl-hg" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stop-color="#00e8ff" stop-opacity="0"/>
                  <stop offset="40%" stop-color="#00e8ff" stop-opacity="0.6"/>
                  <stop offset="50%" stop-color="#ffffff" stop-opacity="0.9"/>
                  <stop offset="60%" stop-color="#00e8ff" stop-opacity="0.6"/>
                  <stop offset="100%" stop-color="#00e8ff" stop-opacity="0"/>
                </linearGradient>
              </defs>
            </svg>
            <div class="fl-stars">
              <div class="fl-star" style="width:2px;height:2px;top:8%;left:15%;--d:2.8s;--delay:0s;"></div>
              <div class="fl-star" style="width:1.5px;height:1.5px;top:12%;left:76%;--d:3.5s;--delay:0.6s;"></div>
              <div class="fl-star" style="width:2px;height:2px;top:80%;left:80%;--d:2.3s;--delay:1.1s;"></div>
              <div class="fl-star" style="width:1.5px;height:1.5px;top:82%;left:12%;--d:4.1s;--delay:0.3s;"></div>
              <div class="fl-star" style="width:1px;height:1px;top:50%;left:95%;--d:3.2s;--delay:1.8s;"></div>
              <div class="fl-star" style="width:1px;height:1px;top:20%;left:3%;--d:2.6s;--delay:2.2s;"></div>
              <div class="fl-star" style="width:2px;height:2px;top:90%;left:50%;--d:3.7s;--delay:0.9s;"></div>
            </div>
            <div class="fl-text" style="font-size:96px; line-height:360px; display:flex; justify-content:center; align-items:center; height:100%;">GEF</div>
          </div>
        </div>

        <div id="hero-copy" class="w-full md:w-1/2 space-y-6 text-center md:text-left flex flex-col items-center md:items-start">
          <p class="font-gaming text-[#00f3ff] text-base md:text-lg tracking-widest uppercase scroll-reveal scroll-reveal-up" data-hero-intro>
            Bem-vindo ao Próximo Nível
          </p>
          <h1 class="font-gaming text-4xl md:text-7xl font-black tracking-tighter text-white uppercase leading-none scroll-reveal scroll-reveal-up" data-hero-intro>
            NÓS FORJAMOS <br>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#00f3ff] to-[#9d4edd] neon-text">
              REALIDADES
            </span>
          </h1>
          <p class="text-gray-400 text-base md:text-xl max-w-xl font-light scroll-reveal scroll-reveal-up" data-hero-intro>
            Criando experiências digitais imersivas, mecânicas afiadas e universos que você não vai querer deixar.
          </p>
          <div class="pt-4 scroll-reveal scroll-reveal-up" data-hero-intro>
            <a href="#games" class="font-gaming px-8 py-4 bg-transparent border-2 border-[#00f3ff] text-[#00f3ff] font-bold uppercase tracking-widest rounded-none hover:bg-[#00f3ff] hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(0,243,255,0.3)]">
              Explorar Jogos
            </a>
          </div>
        </div>
      </div>

      <div class="absolute bottom-5 left-1/2 transform -translate-x-1/2 hidden md:block scroll-reveal scroll-reveal-fade scroll-hint" data-hero-intro>
        <svg class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>

    <section id="games" class="py-32 px-6 max-w-7xl mx-auto relative">
      <div class="text-center mb-16">
        <h2 class="font-gaming text-4xl md:text-6xl font-bold text-white uppercase scroll-reveal scroll-reveal-up">
          Nossas <span class="text-[#9d4edd]">Criações</span>
        </h2>
        <div class="w-24 h-1 bg-[#9d4edd] mx-auto mt-4 scroll-reveal scroll-reveal-scale" data-reveal-delay="120"></div>
        <p class="text-gray-500 text-sm font-gaming uppercase mt-4 tracking-widest md:hidden scroll-reveal scroll-reveal-fade" data-reveal-delay="200">
          &larr; Deslize para os lados &rarr;
        </p>
      </div>

      <div class="carousel-container flex overflow-x-auto gap-8 pb-8 pt-4 px-2 -mx-2 snap-x select-none cursor-grab active:cursor-grabbing">
        ${gameCards}
      </div>
    </section>

    <section id="about" class="py-32 bg-[#0d0d11] border-y border-gray-900 px-6">
      <div class="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div class="w-full md:w-1/2 space-y-6 scroll-reveal scroll-reveal-left">
          <h2 class="font-gaming text-4xl md:text-5xl font-bold text-white uppercase">
            Quem é a <br><span class="text-[#00f3ff] neon-text">Gef Studios?</span>
          </h2>
          <p class="text-gray-300 text-lg leading-relaxed scroll-reveal scroll-reveal-up" data-reveal-delay="100">
            Nascemos da paixão por gameplay refinado e narrativas envolventes. Não fazemos apenas jogos; criamos ecossistemas interativos onde a comunidade joga, compete e evolui junta.
          </p>
          <p class="text-gray-400 text-md scroll-reveal scroll-reveal-up" data-reveal-delay="200">
            Utilizando tecnologias modernas de desenvolvimento, transformamos linhas de código em diversão pura e experiências de tirar o fôlego.
          </p>
        </div>
        <div class="w-full md:w-1/2 grid grid-cols-2 gap-4">
          <div class="p-6 bg-[#121214] border border-gray-800 text-center scroll-reveal scroll-reveal-scale" data-reveal-delay="0">
            <span class="block font-gaming text-3xl font-black text-[#00f3ff]">Engine</span>
            <span class="text-xs uppercase tracking-widest text-gray-500">Desenvolvimento Ativo</span>
          </div>
          <div class="p-6 bg-[#121214] border border-gray-800 text-center scroll-reveal scroll-reveal-scale" data-reveal-delay="100">
            <span class="block font-gaming text-3xl font-black text-[#9d4edd]">Indie</span>
            <span class="text-xs uppercase tracking-widest text-gray-500">Espírito & Alma</span>
          </div>
          <div class="p-6 bg-[#121214] border border-gray-800 text-center scroll-reveal scroll-reveal-scale" data-reveal-delay="200">
            <span class="block font-gaming text-3xl font-black text-white">100%</span>
            <span class="text-xs uppercase tracking-widest text-gray-500">Foco na Comunidade</span>
          </div>
          <div class="p-6 bg-[#121214] border border-gray-800 text-center scroll-reveal scroll-reveal-scale" data-reveal-delay="300">
            <span class="block font-gaming text-3xl font-black text-[#00f3ff]">Altas</span>
            <span class="text-xs uppercase tracking-widest text-gray-500">Taxas de Quadros</span>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="py-32 px-6 max-w-4xl mx-auto text-center">
      <h2 class="font-gaming text-4xl md:text-6xl font-bold text-white uppercase mb-6 scroll-reveal scroll-reveal-up">
        Vamos Construir algo <span class="text-[#00f3ff]">Juntos</span>
      </h2>
      <p class="text-gray-400 text-lg mb-12 max-w-xl mx-auto scroll-reveal scroll-reveal-up" data-reveal-delay="120">
        Tem um feedback, proposta de parceria ou quer apenas trocar uma ideia? A porta está aberta.
      </p>

      <div class="scroll-reveal scroll-reveal-scale" data-reveal-delay="220">
        ${ContactForm()}
      </div>
      <div class="scroll-reveal scroll-reveal-fade" data-reveal-delay="320">
        ${Footer()}
      </div>
    </section>
  `;
}
