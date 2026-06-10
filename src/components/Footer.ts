export function Footer(): string {
  return `
    <footer class="mt-12 text-sm text-gray-600 font-gaming tracking-widest flex flex-col items-center gap-4">
      <div>
        &copy; 2026 GEF STUDIOS. ALL RIGHTS RESERVED. POWERED BY CODE.
      </div>
      <a href="#privacy" data-modal="general-modal" class="text-xs text-gray-500 hover:text-[#00f3ff] border border-gray-800 px-4 py-2 bg-[#0d0d11] transition-all duration-300 uppercase tracking-widest">
        Política de Privacidade Institucional
      </a>
    </footer>
  `;
}
