export type GameStatus = 'live' | 'briefing' | 'confidential';

export interface PrivacySection {
  title: string;
  content: string;
  list?: string[];
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
      'Delivery Sort é um puzzle arcade onde cada segundo conta. Organize entregas, resolva desafios lógicos e domine mecânicas frenéticas em um universo operacional neon.',
    icon: '/assets/delivery-sort-icon.png',
    status: 'live',
    statusLabel: 'Disponível',
    badge: 'LIVE',
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
    id: 'next-universe-1',
    title: 'Próximo Universo',
    shortDescription:
      'Novas ideias já estão sendo prototipadas na nossa incubadora de realidades virtuais.',
    status: 'confidential',
    statusLabel: 'Fase de Briefing',
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
