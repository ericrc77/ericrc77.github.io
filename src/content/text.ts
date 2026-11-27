export type Lang = 'en' | 'pt';

const en = {
  locale: 'en',
  ogLocale: 'en_US',
  otherLanguage: 'Português',
  skip: 'Skip to content',
  nav: { work: 'Work', services: 'Services', experience: 'Experience', contact: 'Contact', label: 'Main' },
  meta: {
    title: 'Eric Campos · Systems Integration & Automation Developer',
    description:
      'Software developer working on systems integration, automation and web applications. Available for freelance projects in Brazil and abroad.',
  },
  hero: {
    role: 'Software Developer · Systems Integration & Automation',
    headline: 'I connect systems and automate the work between them.',
    lead: 'I build integrations as a software developer at Way Solutions Ltd. Based in Brazil and available for freelance projects and international collaboration.',
    primary: 'Discuss a project',
    secondary: 'See the work',
    photoAlt: 'Portrait of Eric Campos, arms crossed, in front of a wooden wall',
  },
  pipeline: {
    label: 'What a dependable integration does',
    steps: ['Receive', 'Validate', 'Transform', 'Deliver', 'Recover'],
  },
  work: {
    title: 'Selected work',
    lead: 'Personal projects with public code. Each one runs, has automated checks and states its limits.',
    read: 'Read the case study',
    demo: 'Live demo',
    download: 'Download',
    code: 'Source code',
    brandTitle: 'Soluverx',
    brandText: 'My software services brand: development, systems integration, automation and dashboards.',
    visit: 'Visit soluverx.com.br',
  },
  services: {
    title: 'How I can help',
    items: [
      {
        title: 'Systems integration',
        text: 'Make two or more applications exchange data reliably.',
        points: ['API and webhook connections', 'Retries without duplicated records', 'Logs that explain what failed'],
      },
      {
        title: 'Process automation',
        text: 'Replace a repetitive manual routine with a tool you can trust.',
        points: ['Preview before anything changes', 'Clear rules for conflicts', 'Documented, repeatable runs'],
      },
      {
        title: 'Web applications and dashboards',
        text: 'Interfaces that show the right information on any screen.',
        points: ['Responsive and accessible pages', 'Data from your systems or public APIs', 'Automated tests and deployment'],
      },
    ],
    processTitle: 'How a project runs',
    process: [
      { title: 'Map the flow', text: 'We describe the data, the systems involved and what happens when something fails.' },
      { title: 'Ship a small version', text: 'The most valuable path works first, so you can try it early.' },
      { title: 'Harden and hand over', text: 'Tests, documentation and instructions to run it without me.' },
    ],
  },
  experience: {
    title: 'Experience and education',
    jobs: [
      { role: 'Software Developer', place: 'Way Solutions Ltd', text: 'Development of integrations between systems.' },
      { role: 'Freelance Web Developer', place: 'Local clients', text: 'Institutional websites, landing pages and portfolios.' },
    ],
    education: { role: 'Software Engineering (in progress)', place: 'Universidade Católica do Leste de Minas', text: 'Undergraduate degree, Brazil.' },
    certificates: 'Course certificates (Alura, in Portuguese)',
    skills: 'Technologies',
    skillGroups: { languages: 'Languages', interface: 'Interface', integration: 'Integration', delivery: 'Quality and delivery' },
  },
  contact: {
    title: 'Tell me what needs to be connected',
    lead: 'Describe the systems you use and the task that takes too long. I will reply with questions and a suggested first step.',
    whatsapp: 'Message on WhatsApp',
    whatsappText: 'Hello Eric, I found your portfolio and would like to discuss a project.',
    email: 'Send an email',
    subject: 'Project enquiry',
    phoneLabel: 'Phone',
    emailLabel: 'Email',
    github: 'GitHub profile',
  },
  caseStudy: { problem: 'The problem', approach: 'Decisions', evidence: 'What can be verified', limits: 'Limits', back: 'All work', stack: 'Stack' },
  notFound: { title: 'Page not found', text: 'The address may have changed with the new site.', home: 'Go to the home page' },
  footer: 'Built with Astro. No tracking, no cookies.',
};

export type Text = typeof en;

const pt: Text = {
  locale: 'pt-BR',
  ogLocale: 'pt_BR',
  otherLanguage: 'English',
  skip: 'Pular para o conteúdo',
  nav: { work: 'Projetos', services: 'Serviços', experience: 'Experiência', contact: 'Contato', label: 'Principal' },
  meta: {
    title: 'Eric Campos · Desenvolvedor de Integração de Sistemas e Automação',
    description:
      'Desenvolvedor de software com atuação em integração de sistemas, automação e aplicações web. Disponível para projetos freelance no Brasil e no exterior.',
  },
  hero: {
    role: 'Desenvolvedor de Software · Integração de Sistemas e Automação',
    headline: 'Conecto sistemas e automatizo o trabalho entre eles.',
    lead: 'Desenvolvo integrações como desenvolvedor de software na Way Solutions Ltd. Estou no Brasil e disponível para projetos freelance e colaboração internacional.',
    primary: 'Falar sobre um projeto',
    secondary: 'Ver projetos',
    photoAlt: 'Retrato de Eric Campos, de braços cruzados, diante de uma parede de madeira',
  },
  pipeline: {
    label: 'O que uma integração confiável faz',
    steps: ['Receber', 'Validar', 'Transformar', 'Entregar', 'Recuperar'],
  },
  work: {
    title: 'Projetos selecionados',
    lead: 'Projetos pessoais com código público. Todos funcionam, têm verificações automatizadas e informam seus limites.',
    read: 'Ler o estudo de caso',
    demo: 'Demonstração',
    download: 'Baixar',
    code: 'Código-fonte',
    brandTitle: 'Soluverx',
    brandText: 'Minha marca de serviços de software: desenvolvimento, integração de sistemas, automação e dashboards.',
    visit: 'Visitar soluverx.com.br',
  },
  services: {
    title: 'Como posso ajudar',
    items: [
      {
        title: 'Integração de sistemas',
        text: 'Fazer duas ou mais aplicações trocarem dados com confiabilidade.',
        points: ['Conexões por API e webhook', 'Novas tentativas sem duplicar registros', 'Logs que explicam o que falhou'],
      },
      {
        title: 'Automação de processos',
        text: 'Substituir uma rotina manual repetitiva por uma ferramenta confiável.',
        points: ['Prévia antes de qualquer alteração', 'Regras claras para conflitos', 'Execuções documentadas e repetíveis'],
      },
      {
        title: 'Aplicações web e dashboards',
        text: 'Interfaces que mostram a informação certa em qualquer tela.',
        points: ['Páginas responsivas e acessíveis', 'Dados dos seus sistemas ou de APIs públicas', 'Testes e publicação automatizados'],
      },
    ],
    processTitle: 'Como o projeto acontece',
    process: [
      { title: 'Mapear o fluxo', text: 'Descrevemos os dados, os sistemas envolvidos e o que acontece quando algo falha.' },
      { title: 'Entregar uma primeira versão', text: 'O caminho de maior valor funciona primeiro, para você testar cedo.' },
      { title: 'Fortalecer e entregar', text: 'Testes, documentação e instruções para operar sem mim.' },
    ],
  },
  experience: {
    title: 'Experiência e formação',
    jobs: [
      { role: 'Desenvolvedor de Software', place: 'Way Solutions Ltd', text: 'Desenvolvimento de integrações entre sistemas.' },
      { role: 'Desenvolvedor Web Freelance', place: 'Clientes locais', text: 'Sites institucionais, landing pages e portfólios.' },
    ],
    education: { role: 'Engenharia de Software (em andamento)', place: 'Universidade Católica do Leste de Minas', text: 'Graduação, Brasil.' },
    certificates: 'Certificados de cursos (Alura)',
    skills: 'Tecnologias',
    skillGroups: { languages: 'Linguagens', interface: 'Interface', integration: 'Integração', delivery: 'Qualidade e entrega' },
  },
  contact: {
    title: 'Conte o que precisa ser conectado',
    lead: 'Descreva os sistemas que você usa e a tarefa que toma tempo demais. Respondo com perguntas e uma sugestão de primeiro passo.',
    whatsapp: 'Chamar no WhatsApp',
    whatsappText: 'Olá, Eric! Vi seu portfólio e gostaria de conversar sobre um projeto.',
    email: 'Enviar e-mail',
    subject: 'Orçamento de projeto',
    phoneLabel: 'Telefone',
    emailLabel: 'E-mail',
    github: 'Perfil no GitHub',
  },
  caseStudy: { problem: 'O problema', approach: 'Decisões', evidence: 'O que pode ser verificado', limits: 'Limites', back: 'Todos os projetos', stack: 'Tecnologias' },
  notFound: { title: 'Página não encontrada', text: 'O endereço pode ter mudado com o novo site.', home: 'Ir para o início' },
  footer: 'Feito com Astro. Sem rastreamento e sem cookies.',
};

export const TEXT: Record<Lang, Text> = { en, pt };
