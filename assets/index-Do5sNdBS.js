var O=Object.defineProperty;var B=(e,t,a)=>t in e?O(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var p=(e,t,a)=>B(e,typeof t!="symbol"?t+"":t,a);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=a(o);fetch(o.href,r)}})();const w=[{id:"delivery-sort",title:"Delivery Sort",shortDescription:"Um puzzle arcade frenético e estratégico onde organização rápida e raciocínio lógico são as chaves para o sucesso operacional.",longDescription:"Delivery Sort é um puzzle arcade onde cada segundo conta. Organize entregas, resolva desafios lógicos e domine mecânicas frenéticas em um universo operacional neon. O jogo já está em produção e disponível para download na Google Play.",icon:"/assets/delivery-sort-icon.png",status:"live",statusLabel:"Disponível",badge:"LIVE",storeLinks:{googlePlay:"https://play.google.com/store/apps/details?id=com.deliverysort.game"},features:["Puzzles arcade com ritmo acelerado","Progressão de fases com dificuldade crescente","Highscores via Google Play Games / Apple Game Center"],privacyPolicy:{title:"POLÍTICA DE PRIVACIDADE",subtitle:"[ DELIVERY SORT ]",updatedAt:"Junho de 2026",intro:"A Gef Studios descreve através deste documento as práticas de tratamento de dados aplicadas especificamente ao aplicativo mobile Delivery Sort.",hash:"#privacyDeliverySort",modalId:"delivery-modal",sections:[{title:"1. Coleta e Uso de Informações",content:"O jogo Delivery Sort foi projetado para focar puramente na experiência de jogabilidade. Armazenamos de forma estritamente local (no seu dispositivo) ou via serviços nativos da plataforma (Google Play Games / Apple Game Center):",list:["Pontuações máximas (Highscores) e progresso das fases de organização de entregas.","Dados analíticos anônimos de telemetria para otimização de performance e ajustes de balanceamento dos puzzles."]},{title:"2. Monetização e Publicidade",content:"Para viabilizar a distribuição gratuita, o aplicativo pode conter redes integradas de publicidade que coletam identificadores anônimos de anúncios do sistema (como o IDFA ou AAID) para fins de conformidade e relevância de exibição."},{title:"3. Direitos e Contato",content:"O usuário detém total controle sobre a limpeza de dados locais do aplicativo através das configurações padrão do sistema operacional do smartphone."}]}},{id:"botao-cup-2026",title:"Botão Cup 2026",shortDescription:"A febre da Copa de 2026 encontra a nostalgia do futebol de mesa. Escolha sua seleção favorita, defina suas táticas e deslize rumo à taça em partidas estratégicas e eletrizantes.",icon:"/assets/BotaoCupIcon500.png",status:"production",statusLabel:"Teste Fechado",privacyPolicy:{title:"POLÍTICA DE PRIVACIDADE",subtitle:"[ BOTÃO CUP 2026 ]",updatedAt:"Julho de 2026",intro:"A Gef Studios descreve através deste documento as práticas de tratamento de dados aplicadas especificamente ao jogo Botão Cup 2026.",hash:"#privacyBotaoCup",modalId:"botao-modal",sections:[{title:"1. Coleta e Uso de Informações",content:"O jogo Botão Cup 2026 foi projetado para focar puramente na experiência de jogabilidade e competição. Armazenamos de forma estritamente local (no seu dispositivo) ou via serviços nativos da plataforma:",list:["Progresso dos torneios, resultados das partidas e estatísticas das equipes.","Dados analíticos anônimos de telemetria para otimização de performance e balanceamento da jogabilidade."]},{title:"2. Monetização e Publicidade",content:"Para viabilizar a distribuição gratuita, o aplicativo pode conter redes integradas de publicidade que coletam identificadores anônimos de anúncios do sistema (como o IDFA ou AAID) para fins de conformidade e relevância de exibição."},{title:"3. Direitos e Contato",content:"O usuário detém total controle sobre a limpeza de dados locais do aplicativo através das configurações padrão do sistema operacional do smartphone."}]}},{id:"limiar",title:"Limiar",shortDescription:"Um MMORPG medieval hardcore com economia focada em reparo de equipamentos e combates implacáveis onde a morte tem um preço alto.",longDescription:"Limiar transporta você para um universo MMORPG medieval brutal e implacável. Nele, a economia gira em torno de um complexo sistema de durabilidade, onde o próprio item de reparo se tornou a principal moeda corrente. Cada exploração é um risco calculado: morrer em combate significa correr o risco real de perder seus equipamentos mais valiosos. Forje alianças, gerencie seus recursos e sobreviva em um mundo onde cada erro pode ser o seu fim.",icon:"/assets/limiar-icone.png",status:"live",statusLabel:"Alpha",badge:"TEST",storeLinks:{directDownload:"/downloads/limiar/LimiarLauncher.zip"},features:["Mundo aberto de MMORPG com profunda temática medieval","Sistema econômico inovador centrado em itens de reparo como moeda","Gerenciamento crucial de desgaste e durabilidade de equipamentos","Combate hardcore (Full Loot / Partial Loot) com risco de perda de itens ao morrer"]},{id:"next-universe-2",title:"Próximo Universo",shortDescription:"Novas ideias já estão sendo prototipadas na nossa incubadora de realidades virtuais.",status:"confidential",statusLabel:"Fase de Briefing"}];function $(e){return w.find(t=>t.id===e)}function z(e){return`#/game/${e}/baixar`}function M(e){var t,a,s;return!!((t=e.storeLinks)!=null&&t.googlePlay||(a=e.storeLinks)!=null&&a.appStore||(s=e.storeLinks)!=null&&s.directDownload)}function F(){return`
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
    ${w.filter(t=>t.privacyPolicy).map(t=>{const a=t.privacyPolicy,s=a.sections.map(o=>`
          <div>
            <h4 class="font-gaming text-white font-bold uppercase text-md mb-2">${o.title}</h4>
            <p class="text-gray-400">${o.content}</p>
            ${o.list?`<ul class="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                    ${o.list.map(r=>`<li>${r}</li>`).join("")}
                  </ul>`:""}
          </div>
        `).join("");return`
        <div id="${a.modalId}" class="fixed inset-0 z-[100] hidden items-center justify-center p-4 modal-blur transition-all duration-300 opacity-0">
          <div class="bg-[#121214] border-2 border-[#00f3ff] w-full max-w-3xl max-h-[80vh] flex flex-col p-6 md:p-10 shadow-[0_0_30px_rgba(0,243,255,0.2)]">
            <div class="flex justify-between items-center border-b border-gray-800 pb-4 mb-6">
              <h3 class="font-gaming text-xl md:text-2xl font-bold text-white tracking-wider uppercase">
                ${a.title} <span class="text-[#00f3ff] block md:inline text-sm md:text-xl font-normal md:ml-2">${a.subtitle}</span>
              </h3>
              <button data-close-modal="${a.modalId}" class="text-gray-400 hover:text-red-500 font-gaming text-2xl transition-colors">&times;</button>
            </div>
            <div class="overflow-y-auto pr-2 text-gray-300 font-light text-sm md:text-base space-y-6 scrollbar-thin">
              <p class="font-semibold text-[#00f3ff]">Última atualização: ${a.updatedAt}</p>
              <p>${a.intro}</p>
              ${s}
            </div>
            <div class="border-t border-gray-800 pt-4 mt-6 flex justify-end">
              <button data-close-modal="${a.modalId}" class="font-gaming border border-[#00f3ff] text-[#00f3ff] px-6 py-2 uppercase text-sm tracking-widest hover:bg-[#00f3ff] hover:text-black transition-all duration-300">
                Fechar Terminal
              </button>
            </div>
          </div>
        </div>
      `}).join("")}

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
  `}function N(){const e=document.getElementById("contact-form"),t=document.getElementById("submit-btn"),a=document.getElementById("success-message");if(!e||!t||!a)return;const s=()=>{t.disabled=!1,t.innerText="TRANSMITIR SINAL",t.classList.remove("opacity-50","cursor-not-allowed")};e.addEventListener("submit",o=>{o.preventDefault(),t.disabled=!0,t.innerText="TRANSMITINDO...",t.classList.add("opacity-50","cursor-not-allowed");const r=new FormData(e),i=Object.fromEntries(r.entries());fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(i)}).then(async n=>{const l=await n.json();if(n.status===200){e.classList.add("hidden"),a.classList.remove("hidden"),a.classList.add("flex"),e.reset();return}console.log(l),alert(`Falha na transmissão: ${l.message}`),s()}).catch(n=>{console.log(n),alert("Erro de conexão ao transmitir o sinal."),s()})})}const m=".scroll-reveal, .reveal",g=window.matchMedia("(prefers-reduced-motion: reduce)").matches;let c=null;function u(e){e.classList.add("is-visible"),e.classList.add("active")}function G(e){e.dataset.revealOnce==="false"&&(e.classList.remove("is-visible"),e.classList.remove("active"))}function b(e=document){c&&e.querySelectorAll(m).forEach(t=>{t.classList.contains("is-visible")||c.observe(t)})}function D(){if(g){document.querySelectorAll(m).forEach(u);return}if(c){b();return}c=new IntersectionObserver(e=>{e.forEach(t=>{const a=t.target;if(t.isIntersecting){const s=Number(a.dataset.revealDelay??0);s>0?window.setTimeout(()=>u(a),s):u(a),a.dataset.revealOnce!=="false"&&(c==null||c.unobserve(a))}else G(a)})},{root:null,rootMargin:"0px 0px -8% 0px",threshold:.12}),b()}function I(){g||document.querySelectorAll("[data-hero-intro]").forEach((e,t)=>{window.setTimeout(()=>u(e),120+t*140)})}function q(){const e=document.getElementById("scroll-progress");if(!e||g)return;let t=!1;const a=()=>{const s=document.documentElement.scrollHeight-window.innerHeight,o=s>0?window.scrollY/s*100:0;e.style.width=`${o}%`,t=!1};window.addEventListener("scroll",()=>{t||(requestAnimationFrame(a),t=!0)},{passive:!0}),a()}function C(){if(g)return;const e=document.getElementById("hero");if(!e)return;const t=document.getElementById("hero-logo-wrap"),a=document.getElementById("hero-copy"),s=document.getElementById("bg-canvas");let o=!1;const r=()=>{const i=window.scrollY,n=e.offsetHeight,l=Math.min(i/n,1);t&&(t.style.transform=`translateY(${i*.22}px) scale(${1-l*.08})`,t.style.opacity=`${1-l*.55}`),a&&(a.style.transform=`translateY(${i*.1}px)`,a.style.opacity=`${1-l*.75}`),s&&(s.style.opacity=`${.4-l*.15}`),o=!1};window.addEventListener("scroll",()=>{o||(requestAnimationFrame(r),o=!0)},{passive:!0})}function R(e=document){e.querySelectorAll(m).forEach(t=>{t.dataset.revealOnce==="false"&&t.classList.remove("is-visible","active")}),b(e)}function H(e){e.classList.remove("section-arrive"),e.offsetWidth,e.classList.add("section-arrive"),e.querySelectorAll(m).forEach((a,s)=>{a.classList.remove("is-visible","active"),window.setTimeout(()=>u(a),160+s*100)})}const P=new Set(["games","about","contact"]),Y=88,V=1e3;function U(e){return 1-Math.pow(1-e,3)}function X(e,t=V){return new Promise(a=>{const s=window.scrollY,o=e-s;if(Math.abs(o)<2){a();return}const r=performance.now();function i(n){const l=n-r,d=Math.min(l/t,1);window.scrollTo(0,s+o*U(d)),d<1?requestAnimationFrame(i):a()}requestAnimationFrame(i)})}function j(e){const t=document.getElementById(e);if(!t)return;const a=t.getBoundingClientRect().top+window.scrollY-Y;X(a).then(()=>{H(t)})}function J(){document.addEventListener("click",e=>{var s;const t=e.target.closest('a[href^="#"]');if(!t)return;const a=((s=t.getAttribute("href"))==null?void 0:s.replace(/^#/,""))??"";if(P.has(a)&&document.getElementById("games")){if(e.preventDefault(),window.location.hash===`#${a}`){j(a);return}window.location.hash=a}})}function W(){const e=window.location.hash.replace(/^#/,"");P.has(e)&&document.getElementById(e)&&requestAnimationFrame(()=>{requestAnimationFrame(()=>j(e))})}function K(){document.querySelectorAll("[data-store-redirect]").forEach(e=>{e.addEventListener("click",()=>{e.classList.add("opacity-80","scale-[0.98]"),e.innerHTML=`
        <span class="inline-flex items-center gap-2">
          <svg class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
          </svg>
          Abrindo loja...
        </span>
      `})})}function Q(){D(),q(),C(),I()}function Z(e=document){R(e),I(),C()}function ee(){D()}function te(){document.querySelectorAll(".card-3d").forEach(e=>{e.addEventListener("mousemove",t=>{const a=e.getBoundingClientRect(),s=t.clientX-a.left,o=t.clientY-a.top,r=a.width/2,n=(a.height/2-o)/12,l=(s-r)/12;e.style.transform=`rotateX(${n}deg) rotateY(${l}deg) scale(1.01)`}),e.style.perspective="1000px",e.style.transition="transform 0.1s ease-out",e.addEventListener("mouseleave",()=>{e.style.transform="rotateX(0deg) rotateY(0deg) scale(1)",e.style.transition="transform 0.5s ease"})})}function ae(){const e=document.querySelector(".carousel-container");if(!e)return;let t=!1,a=0,s=0;e.addEventListener("mousedown",i=>{t=!0,a=i.pageX-e.offsetLeft,s=e.scrollLeft,e.style.scrollSnapType="none"}),e.addEventListener("mouseleave",()=>{t=!1}),e.addEventListener("mouseup",()=>{t=!1,e.style.scrollSnapType="x mandatory"}),e.addEventListener("mousemove",i=>{if(!t)return;i.preventDefault();const l=(i.pageX-e.offsetLeft-a)*1.5;e.scrollLeft=s-l});const o=document.getElementById("carousel-prev"),r=document.getElementById("carousel-next");o&&o.addEventListener("click",()=>{e.scrollBy({left:-400,behavior:"smooth"})}),r&&r.addEventListener("click",()=>{e.scrollBy({left:400,behavior:"smooth"})})}const oe=["#privacy","#privacyDeliverySort","#privacyBotaoCup","#feedback"];function f(e,t){const a=document.getElementById(e);if(a){if(t){a.classList.remove("hidden"),a.classList.add("flex"),setTimeout(()=>{a.classList.remove("opacity-0"),a.classList.add("opacity-100")},10),document.body.style.overflow="hidden";return}a.classList.remove("opacity-100"),a.classList.add("opacity-0"),setTimeout(()=>{a.classList.remove("flex"),a.classList.add("hidden")},300),document.body.style.overflow="",oe.includes(window.location.hash)&&history.replaceState(null,"",window.location.pathname+window.location.search)}}function se(){document.addEventListener("click",e=>{const t=e.target,a=t.closest("[data-modal]"),s=t.closest("[data-close-modal]");if(a){e.preventDefault();const o=a.dataset.modal;o&&f(o,!0);return}if(s){const o=s.dataset.closeModal;o&&f(o,!1)}})}function T(){const e=window.location.hash;if(e==="#privacy"){f("general-modal",!0);return}if(e==="#privacyDeliverySort"&&f("delivery-modal",!0),e==="#privacyBotaoCup"){f("botao-modal",!0);return}e==="#feedback"&&f("contact-modal",!0)}function k(){return`
    <footer class="mt-12 text-sm text-gray-600 font-gaming tracking-widest flex flex-col items-center gap-4">
      <div>
        &copy; 2026 GEF STUDIOS. ALL RIGHTS RESERVED. POWERED BY CODE.
      </div>
      <a href="#privacy" data-modal="general-modal" class="text-xs text-gray-500 hover:text-[#00f3ff] border border-gray-800 px-4 py-2 bg-[#0d0d11] transition-all duration-300 uppercase tracking-widest">
        Política de Privacidade Institucional
      </a>
    </footer>
  `}function L(){return`
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
  `}function re(e){var n,l;const t=e.features?`
      <div class="space-y-4">
        <h3 class="font-gaming text-xl text-[#00f3ff] uppercase tracking-wider">Destaques</h3>
        <ul class="space-y-2 text-gray-400">
          ${e.features.map(d=>`<li class="flex items-start gap-3"><span class="text-[#9d4edd] mt-1">▸</span><span>${d}</span></li>`).join("")}
        </ul>
      </div>
    `:"";let a="";if(M(e)){const d=!!((n=e.storeLinks)!=null&&n.directDownload);a=`<a href="${((l=e.storeLinks)==null?void 0:l.directDownload)||z(e.id)}" ${d?"download":""} class="font-gaming bg-[#00f3ff] text-black px-6 py-3 uppercase text-sm tracking-widest hover:bg-white transition-all duration-300 shadow-[0_0_15px_rgba(0,243,255,0.25)]">
        Baixar Grátis
      </a>`}const s=a?`<div class="flex flex-wrap gap-4 pt-2">${a}</div>`:"",o=e.privacyPolicy?`<a href="${e.privacyPolicy.hash}" data-modal="${e.privacyPolicy.modalId}" class="font-gaming border border-gray-800 text-gray-400 hover:text-[#00f3ff] hover:border-[#00f3ff] px-6 py-3 uppercase text-sm tracking-widest transition-all duration-300">
        Política de Privacidade
      </a>`:"",r=e.icon?`<img src="${e.icon}" alt="${e.title}" class="w-full max-w-sm mx-auto object-contain p-4">`:`<div class="h-64 border-2 border-dashed border-gray-800 flex items-center justify-center">
        <span class="font-gaming text-gray-600 text-xl font-bold tracking-widest">[ CONFIDENCIAL ]</span>
      </div>`;let i="";return e.badge&&(e.badge==="TEST"?i=`<span class="absolute top-4 right-4 font-gaming text-xs bg-[#9d4edd] text-white font-black px-2 py-1 tracking-wider shadow-[0_0_10px_var(--neon-purple)]">${e.badge}</span>`:i=`<span class="absolute top-4 right-4 font-gaming text-xs bg-[#00f3ff] text-black font-black px-2 py-1 tracking-wider shadow-[0_0_10px_var(--neon-cyan)]">${e.badge}</span>`),`
    ${L()}

    <section class="min-h-screen pt-28 pb-20 px-6 max-w-5xl mx-auto">
      <a href="#/" class="inline-flex items-center gap-2 font-gaming text-sm text-gray-500 hover:text-[#00f3ff] uppercase tracking-widest mb-10 transition-colors">
        ← Voltar ao Portfólio
      </a>

      <div class="grid md:grid-cols-2 gap-12 items-start reveal">
        <div class="bg-[#121214] border border-gray-800 p-6 relative">
          ${i}
          ${r}
        </div>

        <div class="space-y-6">
          <div>
            <p class="font-gaming text-[#9d4edd] text-sm uppercase tracking-widest mb-2">${e.statusLabel}</p>
            <h1 class="font-gaming text-4xl md:text-5xl font-black text-white uppercase">${e.title}</h1>
          </div>

          <p class="text-gray-300 text-lg leading-relaxed">
            ${e.longDescription??e.shortDescription}
          </p>

          ${t}

          ${s}

          <div class="flex flex-wrap gap-4 pt-4">
            ${o}
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 px-6 max-w-4xl mx-auto text-center">
      ${k()}
    </section>
  `}function ie(e){var n,l,d,x,v,E;const t=((n=e.storeLinks)==null?void 0:n.googlePlay)??((l=e.storeLinks)==null?void 0:l.appStore)??((d=e.storeLinks)==null?void 0:d.directDownload);if(!t)return"";let a="Nossos Servidores",s="Arquivo Direto",o=!1,r=`
    <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
      <polyline points="7 10 12 15 17 10"></polyline>
      <line x1="12" y1="15" x2="12" y2="3"></line>
    </svg>
  `;(x=e.storeLinks)!=null&&x.googlePlay?(a="Google Play Store",s="Google Play",r=`
      <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M3.6 2.4c-.3.3-.6.8-.6 1.4v16.4c0 .6.3 1.1.6 1.4l.1.1 9.2-9.2v-.2L3.7 2.3l-.1.1zm10.4 10.4-2.8 2.8 3.9 2.2c1.1.6 2 .1 2.4-.7l.1-.2v-1.4l-3.6-2.7zm0-3.4L18.5 6c.5-.3.9-.9.5-1.6-.4-.7-1.2-.9-2-.5l-9 5.1 2.8 2.8 3.2-3.2zM4.8 1.6 14.2 7l3.2-3.2L6.4 1.1c-.8-.5-1.6-.2-2 .4-.1.1-.1.1-.6.1z"/>
      </svg>
    `):(v=e.storeLinks)!=null&&v.appStore?(a="App Store",s="App Store"):(E=e.storeLinks)!=null&&E.directDownload&&(o=!0);const i=e.features?e.features.map(_=>`
          <li class="flex items-center gap-3 text-gray-300">
            <span class="text-[#00f3ff]">✓</span>
            <span>${_}</span>
          </li>
        `).join(""):"";return`
    ${L()}

    <section class="min-h-screen pt-28 pb-20 px-6 flex items-center justify-center">
      <div class="w-full max-w-lg reveal">
        <a href="#/game/${e.id}" class="inline-flex items-center gap-2 font-gaming text-sm text-gray-500 hover:text-[#00f3ff] uppercase tracking-widest mb-8 transition-colors">
          ← Voltar aos Detalhes
        </a>

        <div class="relative bg-[#121214] border border-[#00f3ff]/30 p-8 md:p-10 text-center shadow-[0_0_40px_rgba(0,243,255,0.12)]">
          <div class="absolute inset-0 bg-gradient-to-b from-[#00f3ff]/5 to-transparent pointer-events-none"></div>

          <div class="relative mx-auto w-32 h-32 mb-6 flex items-center justify-center">
            <div class="absolute inset-0 rounded-2xl bg-[#00f3ff]/10 animate-pulse"></div>
            <img src="${e.icon}" alt="${e.title}" class="relative w-28 h-28 object-contain drop-shadow-[0_0_20px_rgba(0,243,255,0.4)]">
          </div>

          <p class="font-gaming text-[#9d4edd] text-xs uppercase tracking-[0.3em] mb-2">Portal de Download</p>
          <h1 class="font-gaming text-3xl md:text-4xl font-black text-white uppercase mb-3">${e.title}</h1>
          <p class="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
            ${e.shortDescription}
          </p>

          ${i?`<ul class="text-left space-y-2 mb-8 border border-gray-800 bg-[#0a0a0c]/60 p-5">${i}</ul>`:""}

          <div class="space-y-4">
            <a
              href="${t}"
              ${o?"download":'target="_blank" rel="noopener noreferrer"'}
              data-store-redirect
              class="group flex items-center justify-center gap-3 w-full font-gaming bg-[#00f3ff] text-black py-4 px-6 uppercase tracking-widest text-sm font-bold hover:bg-white transition-all duration-300 shadow-[0_0_25px_rgba(0,243,255,0.35)]"
            >
              ${r}
              Baixar na ${s}
            </a>

            <p class="text-gray-500 text-xs leading-relaxed">
              Ao continuar, você será direcionado para a <span class="text-gray-400">${a}</span>.
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
      ${k()}
    </section>
  `}function ne(){return`
    <div class="mb-20">
      <button data-modal="contact-modal" onclick="window.location.hash = '#feedback';"
          class="font-gaming px-10 py-5 bg-transparent border-2 border-[#00f3ff] text-[#00f3ff] text-xl font-bold uppercase tracking-widest rounded-none hover:bg-[#00f3ff] hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(0,243,255,0.4)]">
          Abrir Terminal de Feedback
      </button>
    </div>
  `}function le(e,t=0){if(e.status==="confidential"||e.status==="briefing")return de(e,t);if(e.status==="production")return ce(e,t);const a=e.privacyPolicy?`<a href="${e.privacyPolicy.hash}" data-modal="${e.privacyPolicy.modalId}" class="text-xs font-gaming font-bold bg-gray-900 border border-gray-800 text-gray-400 hover:text-[#00f3ff] hover:border-[#00f3ff] px-3 py-1 uppercase tracking-wider transition-all duration-300">
        Privacidade
      </a>`:"";let s="";return e.badge&&(e.badge==="TEST"?s=`<span class="absolute top-0 right-0 font-gaming text-xs bg-[#9d4edd] text-white font-black px-2 py-1 tracking-wider z-20 shadow-[0_0_10px_var(--neon-purple)]">${e.badge}</span>`:s=`<span class="absolute top-0 right-0 font-gaming text-xs bg-[#00f3ff] text-black font-black px-2 py-1 tracking-wider z-20 shadow-[0_0_10px_var(--neon-cyan)]">${e.badge}</span>`),`
    <div class="carousel-item flex-shrink-0 w-[85vw] md:w-[380px] scroll-reveal scroll-reveal-up group relative bg-[#121214] border border-gray-800 p-4 rounded-none transition-all duration-300 neon-border card-3d" data-reveal-delay="${t*130}">
      <a href="#/game/${e.id}" class="block">
        <div class="relative h-64 flex items-center justify-center mb-6">
          <img src="${e.icon}" alt="${e.title}" class="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500 ease-out">
          ${s}
        </div>
        <h3 class="font-gaming text-2xl font-bold text-white mb-2 group-hover:text-[#00f3ff] transition-colors">${e.title}</h3>
        <p class="text-gray-400 mb-4 h-[72px] overflow-hidden text-ellipsis">${e.shortDescription}</p>
      </a>
      <div class="flex items-center justify-between">
        <span class="inline-block text-xs font-gaming font-bold bg-transparent border border-[#00f3ff] text-[#00f3ff] px-3 py-1 uppercase tracking-wider">${e.statusLabel}</span>
        ${a}
      </div>
    </div>
  `}function de(e,t){return`
    <div class="carousel-item flex-shrink-0 w-[85vw] md:w-[380px] scroll-reveal scroll-reveal-up group relative bg-[#121214] border border-gray-800 p-4 rounded-none transition-all duration-300 opacity-30 hover:opacity-50 border-dashed" data-reveal-delay="${t*130}">
      <div class="h-64 border-2 border-dashed border-gray-800 flex flex-col items-center justify-center mb-6">
        <span class="font-gaming text-gray-600 text-xl font-bold tracking-widest">[ CONFIDENCIAL ]</span>
      </div>
      <h3 class="font-gaming text-2xl font-bold text-gray-500 mb-2">${e.title}</h3>
      <p class="text-gray-600 mb-4">${e.shortDescription}</p>
      <span class="inline-block text-xs font-gaming font-bold bg-gray-800 text-gray-500 px-3 py-1 uppercase tracking-wider">${e.statusLabel}</span>
    </div>
  `}function ce(e,t){const a=e.privacyPolicy?`<a href="${e.privacyPolicy.hash}" data-modal="${e.privacyPolicy.modalId}" class="text-xs font-gaming font-bold bg-gray-900 border border-gray-800 text-gray-400 hover:text-[#9d4edd] hover:border-[#9d4edd] px-3 py-1 uppercase tracking-wider transition-all duration-300">
        Privacidade
      </a>`:"",o=(e.downloadLink?`<a href="${e.downloadLink}" download class="text-xs font-gaming font-bold bg-[#9d4edd] border border-[#9d4edd] text-white hover:bg-transparent hover:text-[#9d4edd] px-3 py-1 uppercase tracking-wider transition-all duration-300">
        Download
      </a>`:"")||a,r=e.icon?`<img src="${e.icon}" alt="${e.title}" class="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500 ease-out">`:'<div class="w-full h-full border-2 border-dashed border-gray-800 flex flex-col items-center justify-center group-hover:border-[#9d4edd] transition-colors"><span class="font-gaming text-gray-600 text-xl font-bold tracking-widest group-hover:text-[#9d4edd] transition-colors">[ CONFIDENCIAL ]</span></div>';return`
    <div class="carousel-item flex-shrink-0 w-[85vw] md:w-[380px] scroll-reveal scroll-reveal-up group relative bg-[#121214] border border-gray-800 p-4 rounded-none transition-all duration-300 neon-border card-3d" data-reveal-delay="${t*130}">
      <div class="relative h-64 flex items-center justify-center mb-6">
        ${r}
        <span class="absolute top-0 right-0 font-gaming text-xs bg-[#9d4edd] text-white font-black px-2 py-1 tracking-wider z-20 shadow-[0_0_10px_var(--neon-purple)]">TEST</span>
      </div>
      <h3 class="font-gaming text-2xl font-bold text-white mb-2 group-hover:text-[#9d4edd] transition-colors">${e.title}</h3>
      <p class="text-gray-400 mb-4 h-[72px] overflow-hidden text-ellipsis">${e.shortDescription}</p>
      <div class="flex items-center justify-between">
        <span class="inline-block text-xs font-gaming font-bold bg-transparent border border-[#9d4edd] text-[#9d4edd] px-3 py-1 uppercase tracking-wider">${e.statusLabel}</span>
        ${o}
      </div>
    </div>
  `}function pe(){const e=w.map((t,a)=>le(t,a)).join("");return`
    ${L()}

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

      <div class="relative group">
        <button id="carousel-prev" class="hidden md:flex absolute left-[-1.5rem] top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-[#121214] border border-[#9d4edd] text-[#9d4edd] hover:bg-[#9d4edd] hover:text-white items-center justify-center rounded-full shadow-[0_0_15px_rgba(157,78,221,0.3)] transition-all duration-300 opacity-0 group-hover:opacity-100 cursor-pointer">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
        </button>

        <div class="carousel-container flex overflow-x-auto overflow-y-hidden gap-8 pb-8 pt-4 px-2 -mx-2 snap-x select-none cursor-grab active:cursor-grabbing scroll-smooth">
          ${e}
        </div>

        <button id="carousel-next" class="hidden md:flex absolute right-[-1.5rem] top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-[#121214] border border-[#9d4edd] text-[#9d4edd] hover:bg-[#9d4edd] hover:text-white items-center justify-center rounded-full shadow-[0_0_15px_rgba(157,78,221,0.3)] transition-all duration-300 opacity-0 group-hover:opacity-100 cursor-pointer">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
        </button>
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
        ${ne()}
      </div>
      <div class="scroll-reveal scroll-reveal-fade" data-reveal-delay="320">
        ${k()}
      </div>
    </section>
  `}const fe={"/":()=>pe()},ue=new Set(["games","about","contact","privacy","privacyDeliverySort"]);function me(){const e=window.location.hash.replace(/^#/,"");if(!e||e==="/")return{path:"/",params:{},isAnchorOnly:!1};const t=e.split("/").filter(Boolean);return t[0]==="game"&&t[1]&&t[2]==="baixar"?{path:"/game/:id/baixar",params:{id:t[1]},isAnchorOnly:!1}:t[0]==="game"&&t[1]?{path:"/game/:id",params:{id:t[1]},isAnchorOnly:!1}:ue.has(t[0])&&t.length===1?{path:"/",params:{},isAnchorOnly:!0}:{path:"/",params:{},isAnchorOnly:!1}}function y(e=!1){window.scrollTo({top:0,behavior:e?"instant":"smooth"})}function S(){var r,i;const e=document.getElementById("app");if(!e)return;const{path:t,params:a,isAnchorOnly:s}=me(),o=e.querySelector("#games")!==null;if(t==="/game/:id/baixar"){const n=$(a.id),l=n&&(((r=n.storeLinks)==null?void 0:r.googlePlay)||((i=n.storeLinks)==null?void 0:i.appStore));e.innerHTML=l?ie(n):A(),requestAnimationFrame(()=>y(!0))}else if(t==="/game/:id"){const n=$(a.id);e.innerHTML=n?re(n):A(),requestAnimationFrame(()=>y(!0))}else(!s||!o)&&(e.innerHTML=fe["/"]());e.insertAdjacentHTML("beforeend",F()),ge(),T(),W()}function A(){return`
    <section class="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 class="font-gaming text-5xl text-white uppercase mb-4">Universo Não Encontrado</h1>
      <p class="text-gray-400 mb-8">O jogo que você procura ainda não foi forjado nesta dimensão.</p>
      <a href="#/" class="font-gaming px-8 py-4 border-2 border-[#00f3ff] text-[#00f3ff] uppercase tracking-widest hover:bg-[#00f3ff] hover:text-black transition-all duration-300">
        Voltar à Home
      </a>
    </section>
  `}function ge(){ee(),te(),ae(),N(),K(),Z()}function xe(){J(),document.addEventListener("click",e=>{e.target.closest("a[data-scroll-top]")&&y()}),window.addEventListener("hashchange",S),window.addEventListener("hashchange",T),S()}class ve{constructor(t){p(this,"x");p(this,"y");p(this,"speedX");p(this,"speedY");p(this,"size");this.canvas=t,this.x=Math.random()*t.width,this.y=Math.random()*t.height,this.speedX=(Math.random()-.5)*.6,this.speedY=(Math.random()-.5)*.6,this.size=Math.random()*2+1}update(){this.x+=this.speedX,this.y+=this.speedY,this.x>this.canvas.width&&(this.x=0),this.x<0&&(this.x=this.canvas.width),this.y>this.canvas.height&&(this.y=0),this.y<0&&(this.y=this.canvas.height)}draw(t){t.fillStyle="#00f3ff",t.beginPath(),t.arc(this.x,this.y,this.size,0,Math.PI*2),t.fill()}}let h=null;function he(){const e=document.getElementById("bg-canvas");if(!e)return;const t=e.getContext("2d");if(!t)return;h!==null&&cancelAnimationFrame(h);const a=[],s=60,o=()=>{e.width=window.innerWidth,e.height=window.innerHeight};o(),window.addEventListener("resize",o);for(let i=0;i<s;i++)a.push(new ve(e));const r=()=>{t.clearRect(0,0,e.width,e.height),a.forEach(i=>{i.update(),i.draw(t)}),h=requestAnimationFrame(r)};r()}he();se();Q();xe();
