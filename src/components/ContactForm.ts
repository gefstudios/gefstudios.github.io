export function ContactForm(): string {
  return `
    <div class="inline-block border border-gray-800 bg-[#121214] p-8 md:p-12 w-full max-w-xl text-left mb-20 relative">
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

      <div id="success-message" class="hidden bg-[#121214] flex flex-col items-center justify-center p-12 md:p-16 text-center border border-[#00f3ff] shadow-[0_0_20px_rgba(0,243,255,0.15)] animate-fade-in w-full min-h-[380px]">
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
  `;
}
