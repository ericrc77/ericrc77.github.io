import type { ImageMetadata } from 'astro';
import dashboard from '../assets/work/dashboard.png';
import playlist from '../assets/work/playlist.png';
import type { Lang } from './text';

interface ProjectText {
  title: string;
  summary: string;
  imageAlt: string;
  problem: string;
  approach: { title: string; text: string }[];
  evidence: string[];
  limits: string;
}

export interface Project {
  slug: string;
  stack: string[];
  code: string;
  demo?: { url: string; kind: 'demo' | 'download' };
  image?: ImageMetadata;
  /** Shown when there is no screenshot, for command-line tools. Real program output. */
  terminal?: string;
  text: Record<Lang, ProjectText>;
}

export const PROJECTS: Project[] = [
  {
    slug: 'playlist-publisher',
    stack: ['React', 'TypeScript', 'Spotify Web API', 'OAuth 2.0 PKCE', 'Vercel Functions', 'Vitest'],
    code: 'https://github.com/ericrc77/playlist-creator',
    demo: { url: 'https://playlist-creator-ruby.vercel.app/demo', kind: 'demo' },
    image: playlist,
    text: {
      en: {
        title: 'Playlist Publisher: a third-party API integration that does not duplicate',
        summary: 'Turns an approved track list into a Spotify playlist, asking for a decision only when a match is doubtful.',
        imageAlt: 'Review screen asking to choose between an explicit and a clean version of a track',
        problem:
          'Copying a list by hand is slow. Automatic matching can silently pick the wrong version, and retrying after a network failure can create a second playlist.',
        approach: [
          { title: 'Conservative matching', text: 'A track is accepted only when title, artists and version agree. Everything else goes to review.' },
          { title: 'Idempotent publishing', text: 'The plan is saved before each write, so a retry resumes the same playlist instead of creating another.' },
          { title: 'Token kept away from scripts', text: 'A small server function stores the refresh token in an encrypted HttpOnly cookie.' },
          { title: 'Honest demo', text: 'The demo runs the production code against a simulated API with fictional music.' },
        ],
        evidence: [
          '144 automated tests, including interrupted publishing and actions that overlap',
          'Lint, type check, tests and build run on every pull request',
          'No known vulnerable dependencies when it was released (November 2026)',
        ],
        limits: 'Spotify restricts apps in development mode to a few registered users. The interface is in Portuguese.',
      },
      pt: {
        title: 'Publicador de playlists: integração com API externa sem duplicar',
        summary: 'Transforma uma lista aprovada em playlist no Spotify e pede decisão apenas quando há dúvida.',
        imageAlt: 'Tela de conferência pedindo a escolha entre a versão explícita e a versão limpa de uma faixa',
        problem:
          'Copiar uma lista à mão é demorado. A correspondência automática pode escolher a versão errada sem avisar, e repetir após uma falha de rede pode criar uma segunda playlist.',
        approach: [
          { title: 'Correspondência conservadora', text: 'A faixa só é aceita quando título, artistas e versão coincidem. O resto vai para conferência.' },
          { title: 'Publicação idempotente', text: 'O plano é salvo antes de cada gravação, então repetir retoma a mesma playlist em vez de criar outra.' },
          { title: 'Token longe dos scripts', text: 'Uma pequena função no servidor guarda o refresh token em cookie HttpOnly cifrado.' },
          { title: 'Demonstração honesta', text: 'A demonstração executa o código de produção contra uma API simulada, com músicas fictícias.' },
        ],
        evidence: [
          '144 testes automatizados, incluindo publicação interrompida e ações simultâneas',
          'Lint, verificação de tipos, testes e build em cada pull request',
          'Nenhuma dependência com vulnerabilidade conhecida na publicação (novembro de 2026)',
        ],
        limits: 'O Spotify limita apps em modo de desenvolvimento a poucos usuários cadastrados. A interface está em português.',
      },
    },
  },
  {
    slug: 'brazil-open-data-dashboard',
    stack: ['React', 'TypeScript', 'IBGE API', 'Banco Central API', 'SVG', 'GitHub Pages'],
    code: 'https://github.com/ericrc77/brazil-open-data-dashboard',
    demo: { url: 'https://ericrc77.github.io/brazil-open-data-dashboard/', kind: 'demo' },
    image: dashboard,
    text: {
      en: {
        title: 'Brazil Open Data Dashboard: official sources, visible limits',
        summary: 'Seven economic and social indicators read live from IBGE and Banco Central do Brasil, with state views.',
        imageAlt: 'Dashboard with charts of inflation, interest rate, exchange rate and unemployment',
        problem:
          'My earlier prototype looked like a dashboard but showed fixed and randomly generated numbers. A dashboard is only useful if every value can be traced to its source.',
        approach: [
          { title: 'Live official data', text: 'Both publishers allow browser requests, so the site needs no server and costs nothing to host.' },
          { title: 'Failure is a normal state', text: 'Each indicator has its own timeout, retry and cache, and says when it is showing older data.' },
          { title: 'Nothing invented', text: 'Missing periods stay as gaps, and future-dated entries in the interest rate series are discarded.' },
          { title: 'Readable without a mouse', text: 'Charts work with the keyboard and every number is also available as a table.' },
        ],
        evidence: [
          '30 automated tests, using recorded API responses',
          'Browser check against the live APIs with no accessibility violations reported by axe',
          'Source table or series identified for every indicator',
        ],
        limits: 'Availability depends on the public APIs, and recent periods are revised by the publishers.',
      },
      pt: {
        title: 'Painel de dados abertos do Brasil: fontes oficiais e limites à vista',
        summary: 'Sete indicadores econômicos e sociais consultados no IBGE e no Banco Central, com visão por estado.',
        imageAlt: 'Painel com gráficos de inflação, juros, câmbio e desemprego',
        problem:
          'Meu protótipo anterior parecia um painel, mas mostrava números fixos e gerados aleatoriamente. Um painel só é útil quando cada valor pode ser rastreado até a fonte.',
        approach: [
          { title: 'Dados oficiais ao vivo', text: 'Os dois órgãos aceitam consultas do navegador, então o site dispensa servidor e não tem custo de hospedagem.' },
          { title: 'Falha é um estado normal', text: 'Cada indicador tem limite de tempo, nova tentativa e cache próprios, e avisa quando exibe dados antigos.' },
          { title: 'Nada inventado', text: 'Períodos ausentes ficam como lacunas, e datas futuras da série de juros são descartadas.' },
          { title: 'Legível sem mouse', text: 'Os gráficos funcionam pelo teclado e todos os números também aparecem em tabela.' },
        ],
        evidence: [
          '30 testes automatizados, com respostas reais gravadas das APIs',
          'Verificação em navegador com as APIs reais, sem violações de acessibilidade apontadas pelo axe',
          'Tabela ou série de origem identificada em cada indicador',
        ],
        limits: 'A disponibilidade depende das APIs públicas, e períodos recentes são revisados pelos órgãos.',
      },
    },
  },
  {
    slug: 'file-organizer',
    stack: ['Java 17', 'Maven', 'JUnit', 'GitHub Actions'],
    code: 'https://github.com/ericrc77/file-organizer-java',
    demo: { url: 'https://github.com/ericrc77/file-organizer-java/releases/latest', kind: 'download' },
    terminal: `$ java -jar file-organizer.jar . --dry-run
PLANNED  backup.zip -> Archives\\backup.zip
PLANNED  holiday.jpg -> Images\\holiday.jpg
PLANNED  invoice.pdf -> PDFs\\invoice.pdf
PLANNED  notes.txt -> Documents\\notes (1).txt
Planned: 4, skipped: 0, failed: 0
Dry run: nothing was changed.`,
    text: {
      en: {
        title: 'File Organizer: automation that cannot silently destroy files',
        summary: 'A command-line tool that sorts a folder by file type, with preview and explicit conflict rules.',
        imageAlt: 'Terminal output of a dry run',
        problem: 'The first version replaced files that had the same name. An automation that can lose data is worse than doing the work by hand.',
        approach: [
          { title: 'Safe by default', text: 'Conflicting names are kept side by side. Replacing requires two explicit options.' },
          { title: 'Preview that matches reality', text: 'A dry run reports the same final names that the real run will use.' },
          { title: 'Waits for downloads', text: 'In watch mode a file is moved only after it stops changing.' },
        ],
        evidence: [
          '19 automated tests',
          'Continuous integration on Linux and Windows with Java 17 and 21',
          'Published release with a checksum',
        ],
        limits: 'Only the top level of a folder is organized, and there is no undo command.',
      },
      pt: {
        title: 'Organizador de arquivos: automação que não destrói arquivos em silêncio',
        summary: 'Ferramenta de linha de comando que organiza uma pasta por tipo de arquivo, com prévia e regras explícitas de conflito.',
        imageAlt: 'Saída no terminal de uma execução de simulação',
        problem: 'A primeira versão substituía arquivos de mesmo nome. Uma automação que pode perder dados é pior do que fazer o trabalho à mão.',
        approach: [
          { title: 'Segura por padrão', text: 'Nomes em conflito são mantidos lado a lado. Substituir exige duas opções explícitas.' },
          { title: 'Prévia fiel', text: 'A simulação informa os mesmos nomes finais que a execução real usará.' },
          { title: 'Espera os downloads', text: 'No modo de monitoramento, o arquivo só é movido depois que para de mudar.' },
        ],
        evidence: [
          '19 testes automatizados',
          'Integração contínua em Linux e Windows com Java 17 e 21',
          'Versão publicada com checksum',
        ],
        limits: 'Apenas o primeiro nível da pasta é organizado, e não há comando para desfazer.',
      },
    },
  },
];
