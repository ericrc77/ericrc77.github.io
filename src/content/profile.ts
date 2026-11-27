/** Facts about the author. Every entry must be verifiable; do not add claims without a source. */
export const PROFILE = {
  name: 'Eric Campos',
  fullName: 'Eric Rodrigues Campos',
  email: 'ericcamposop@gmail.com',
  phoneDisplay: '+55 33 99855-1827',
  phone: '+5533998551827',
  github: 'https://github.com/ericrc77',
  employer: 'Way Solutions Ltd',
  university: 'Universidade Católica do Leste de Minas',
} as const;

const certificate = (id: string, title: string) => ({
  title,
  url: `https://cursos.alura.com.br/certificate/${id}?lang=pt_BR`,
});

/** Course titles as printed on the certificates (taught in Portuguese). */
export const CERTIFICATES = [
  certificate('74d853e1-3d0d-49eb-b251-c6e1444ffd73', 'Java: criando a sua primeira aplicação'),
  certificate('9ad44fb3-fade-4e50-a588-77aaff83c9c9', 'Git e GitHub: repositório, commit e versões'),
  certificate('70f14eea-6481-4c64-88a3-68f0eff577f3', 'JavaScript e HTML: desenvolva um jogo e pratique lógica de programação'),
  certificate('c2e60f4c-b751-4e88-8e4c-8301a84972a2', 'JavaScript e HTML: pratique lógica com desenhos, animações e um jogo'),
  certificate('fa0fa3d5-3bca-4901-a88f-708fcbcb0b0d', 'HTML e CSS: classes, posicionamento e Flexbox'),
  certificate('d1b46b23-5233-49e3-bc5c-d1c169cdce90', 'HTML e CSS: ambientes de desenvolvimento, estrutura de arquivos e tags'),
];

export const SKILLS = {
  languages: ['TypeScript', 'JavaScript', 'Java', 'Python', 'PHP'],
  interface: ['React', 'React Native', 'Astro', 'HTML', 'CSS'],
  integration: ['REST APIs', 'OAuth 2.0 / PKCE', 'Serverless functions', 'Public data APIs'],
  delivery: ['Vitest', 'JUnit', 'GitHub Actions', 'Git', 'Maven', 'Vite'],
} as const;
