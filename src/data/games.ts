export type GameStatus = 'live' | 'briefing' | 'confidential' | 'production';

export interface PrivacySection {
  title: string;
  content: string;
  list?: string[];
}

export interface StoreLinks {
  googlePlay?: string;
  appStore?: string;
  directDownload?: string;
}

export interface Game {
  id: string;
  title: string;
  shortDescription: string;
  longDescription?: string;
  icon?: string;
  status: GameStatus;
  statusLabel: string;
  badge?: string;
  storeLinks?: StoreLinks;
  downloadLink?: string;
  privacyPolicy?: {
    title: string;
    subtitle: string;
    updatedAt: string;
    intro: string;
    sections: PrivacySection[];
    hash: string;
    modalId: string;
  };
  features?: string[];
}

export const games: Game[] = [
  {
    id: 'delivery-sort',
    title: 'Delivery Sort',
    shortDescription:
      'Um puzzle arcade frenético e estratégico onde organização rápida e raciocínio lógico são as chaves para o sucesso operacional.',
    longDescription:
      'Delivery Sort é um puzzle arcade onde cada segundo conta. Organize entregas, resolva desafios lógicos e domine mecânicas frenéticas em um universo operacional neon. O jogo já está em produção e disponível para download na Google Play.',
    icon: '/assets/delivery-sort-icon.png',
    status: 'live',
    statusLabel: 'Disponível',
    badge: 'LIVE',
    storeLinks: {
      googlePlay: 'https://play.google.com/store/apps/details?id=com.deliverysort.game',
    },
    features: [
      'Puzzles arcade com ritmo acelerado',
      'Progressão de fases com dificuldade crescente',
      'Highscores via Google Play Games / Apple Game Center',
    ],
    privacyPolicy: {
      title: 'POLÍTICA DE PRIVACIDADE',
      subtitle: '[ DELIVERY SORT ]',
      updatedAt: 'Junho de 2026',
      intro:
        'A Gef Studios descreve através deste documento as práticas de tratamento de dados aplicadas especificamente ao aplicativo mobile Delivery Sort.',
      hash: '#privacyDeliverySort',
      modalId: 'delivery-modal',
      sections: [
        {
          title: '1. Coleta e Uso de Informações',
          content:
            'O jogo Delivery Sort foi projetado para focar puramente na experiência de jogabilidade. Armazenamos de forma estritamente local (no seu dispositivo) ou via serviços nativos da plataforma (Google Play Games / Apple Game Center):',
          list: [
            'Pontuações máximas (Highscores) e progresso das fases de organização de entregas.',
            'Dados analíticos anônimos de telemetria para otimização de performance e ajustes de balanceamento dos puzzles.',
          ],
        },
        {
          title: '2. Monetização e Publicidade',
          content:
            'Para viabilizar a distribuição gratuita, o aplicativo pode conter redes integradas de publicidade que coletam identificadores anônimos de anúncios do sistema (como o IDFA ou AAID) para fins de conformidade e relevância de exibição.',
        },
        {
          title: '3. Direitos e Contato',
          content:
            'O usuário detém total controle sobre a limpeza de dados locais do aplicativo através das configurações padrão do sistema operacional do smartphone.',
        },
      ],
    },
  },
  {
    id: 'botao-cup-2026',
    title: 'Botão Cup 2026',
    shortDescription:
      'A febre da Copa de 2026 encontra a nostalgia do futebol de mesa. Escolha sua seleção favorita, defina suas táticas e deslize rumo à taça em partidas estratégicas e eletrizantes.',
    icon: '/assets/BotaoCupIcon500.png',
    status: 'production',
    statusLabel: 'Teste Fechado',
    privacyPolicy: {
      title: 'POLÍTICA DE PRIVACIDADE',
      subtitle: '[ BOTÃO CUP 2026 ]',
      updatedAt: 'Julho de 2026',
      intro:
        'A Gef Studios descreve através deste documento as práticas de tratamento de dados aplicadas especificamente ao jogo Botão Cup 2026.',
      hash: '#privacyBotaoCup',
      modalId: 'botao-modal',
      sections: [
        {
          title: '1. Coleta e Uso de Informações',
          content:
            'O jogo Botão Cup 2026 foi projetado para focar puramente na experiência de jogabilidade e competição. Armazenamos de forma estritamente local (no seu dispositivo) ou via serviços nativos da plataforma:',
          list: [
            'Progresso dos torneios, resultados das partidas e estatísticas das equipes.',
            'Dados analíticos anônimos de telemetria para otimização de performance e balanceamento da jogabilidade.',
          ],
        },
        {
          title: '2. Monetização e Publicidade',
          content:
            'Para viabilizar a distribuição gratuita, o aplicativo pode conter redes integradas de publicidade que coletam identificadores anônimos de anúncios do sistema (como o IDFA ou AAID) para fins de conformidade e relevância de exibição.',
        },
        {
          title: '3. Direitos e Contato',
          content:
            'O usuário detém total controle sobre a limpeza de dados locais do aplicativo através das configurações padrão do sistema operacional do smartphone.',
        },
      ],
    },
  },
  {
    id: 'limiar',
    title: 'Limiar',
    shortDescription:
      'Um MMORPG medieval hardcore com economia focada em reparo de equipamentos e combates implacáveis onde a morte tem um preço alto.',
    longDescription:
      'Limiar transporta você para um universo MMORPG medieval brutal e implacável. Nele, a economia gira em torno de um complexo sistema de durabilidade, onde o próprio item de reparo se tornou a principal moeda corrente. Cada exploração é um risco calculado: morrer em combate significa correr o risco real de perder seus equipamentos mais valiosos. Forje alianças, gerencie seus recursos e sobreviva em um mundo onde cada erro pode ser o seu fim.',
    icon: '/assets/limiar-icone.png',
    status: 'live',
    statusLabel: 'Alpha',
    badge: 'TEST',
    storeLinks: {
      directDownload: '/downloads/limiar/LimiarLauncher.zip',
    },
    features: [
      'Mundo aberto de MMORPG com profunda temática medieval',
      'Sistema econômico inovador centrado em itens de reparo como moeda',
      'Gerenciamento crucial de desgaste e durabilidade de equipamentos',
      'Combate hardcore (Full Loot / Partial Loot) com risco de perda de itens ao morrer',
    ],
  },
  {
    id: 'next-universe-2',
    title: 'Próximo Universo',
    shortDescription:
      'Novas ideias já estão sendo prototipadas na nossa incubadora de realidades virtuais.',
    status: 'confidential',
    statusLabel: 'Fase de Briefing',
  },
];

export function getGameById(id: string): Game | undefined {
  return games.find((game) => game.id === id);
}

export function getGameDownloadPath(id: string): string {
  return `#/game/${id}/baixar`;
}

export function hasStoreLink(game: Game): boolean {
  return Boolean(game.storeLinks?.googlePlay || game.storeLinks?.appStore || game.storeLinks?.directDownload);
}