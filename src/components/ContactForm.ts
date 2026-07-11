export function ContactForm(): string {
  return `
    <div class="mb-20">
      <button data-modal="contact-modal" onclick="window.location.hash = '#feedback';"
          class="font-gaming px-10 py-5 bg-transparent border-2 border-[#00f3ff] text-[#00f3ff] text-xl font-bold uppercase tracking-widest rounded-none hover:bg-[#00f3ff] hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(0,243,255,0.4)]">
          Abrir Terminal de Feedback
      </button>
    </div>
  `;
}
