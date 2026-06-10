export function Header(): string {
  return `
    <header class="fixed top-0 left-0 w-full z-50 bg-opacity-70 bg-[#0a0a0c] backdrop-blur-md border-b border-gray-800 transition-all duration-300">
      <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#/" data-scroll-top class="font-gaming text-2xl font-black tracking-widest text-white uppercase">
          Gef<span class="text-[#00f3ff]">Studios</span>
        </a>
        <nav class="hidden md:flex space-x-8 text-lg font-semibold tracking-wider uppercase">
          <a href="#games" class="hover:text-[#00f3ff] transition-colors">Jogos</a>
          <a href="#about" class="hover:text-[#00f3ff] transition-colors">O Estúdio</a>
          <a href="#contact" class="hover:text-[#00f3ff] transition-colors">Contato</a>
        </nav>
      </div>
    </header>
  `;
}
