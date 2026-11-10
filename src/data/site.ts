/** Junta o caminho com o BASE configurado (GitHub Pages de projeto ou domínio próprio). */
export function url(path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.replace(/^\//, '');
  return `${base}/${clean}`;
}

export const person = {
  name: 'Arthur Garcia',
  fullName: 'Arthur Garcia de Figueiredo',
  role: 'Arquiteto de software e integrações',
  email: 'arthurgf.dev@gmail.com',
  phone: '+55 11 95464-0275',
  whatsapp: `https://wa.me/5511954640275?text=${encodeURIComponent('Olá, Arthur! Vi seu portfólio e queria conversar.')}`,
  linkedin: 'https://www.linkedin.com/in/arthurgarcia-dev/',
  github: 'https://github.com/garcia235',
  location: 'São Paulo, SP',
};

export type Project = {
  slug: string;
  name: string;
  org: string;
  color: string; // variável CSS
  oneLiner: string;
  role: string;
  poster: string;
  video?: string;
  tags: string[];
  proof: { value: string; label: string }[];
  live?: string;
  liveLabel?: string;
};

export const featured: Project[] = [
  {
    slug: 'visuai',
    name: 'visuAI',
    org: 'AI8 · produto próprio',
    color: 'var(--visuai)',
    oneLiner:
      'Inteligência comercial para incorporadoras que usam o CV CRM: do lead ao repasse numa esteira só, com cada número rastreável até a consulta que o produziu.',
    role: 'Arquitetura e construção de ponta a ponta, do modelo de dados ao deploy.',
    poster: 'media/visuai-capa.webp',
    video: 'media/visuai-esteira.mp4',
    tags: ['Java 21', 'Spring Boot', 'PostgreSQL · RLS', 'React 19', 'OpenAPI', 'Railway'],
    proof: [
      { value: '3', label: 'camadas de isolamento multi-tenant' },
      { value: '42/43', label: 'tabelas com RLS FORCE, medido em produção' },
      { value: '80', label: 'migrações Flyway versionadas' },
    ],
    live: 'https://visuai-site.onrender.com/',
    liveLabel: 'Landing page',
  },
  {
    slug: 'checkhome',
    name: 'Check Home',
    org: 'AI8 · produto próprio',
    color: 'var(--checkhome)',
    oneLiner:
      'Vistoria de entrega de imóveis no tablet, item por item, com foto, assinatura e laudo em PDF na hora. Cada item reprovado vira pendência da engenharia com prazo em dias úteis.',
    role: 'Arquitetura e reescrita da plataforma: de um checklist em PHP para SaaS multi-tenant.',
    poster: 'media/checkhome-capa.webp',
    video: 'media/checkhome.mp4',
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'React', 'Docker · nginx', 'Brevo'],
    proof: [
      { value: '3 + 1', label: 'papéis por empresa, mais o suporte entre empresas, auditado' },
      { value: '59', label: 'migrações de banco' },
      { value: 'PDF', label: 'laudo com papel timbrado, gerado na hora' },
    ],
    live: 'https://checkhome.ai8.com.br/',
  },
  {
    slug: 'quintoandar',
    name: 'QuintoAndar',
    org: 'Taak · plataforma Salesforce',
    color: 'var(--qa)',
    oneLiner:
      'Integração Salesforce × Reclame Aqui (HugMe) e consolidação de milhões de Person Accounts duplicadas, em Service Cloud de alta escala.',
    role: 'Arquitetura e implementação das integrações e do pipeline assíncrono.',
    poster: '',
    tags: ['Apex', 'Batch · Queueable', 'LWC', 'Named Credentials', 'Service Cloud'],
    proof: [
      { value: '~10/min', label: 'orçamento de requisições respeitado' },
      { value: '5 min', label: 'ciclo de polling com watermark e lease' },
      { value: 'milhões', label: 'de contas consolidadas com idempotência' },
    ],
  },
];

export type Work = {
  name: string;
  org: string;
  text: string;
  tags: string[];
  href?: string;
};

export const otherWork: Work[] = [
  {
    name: 'Polara Innovations',
    org: 'Polara · sócio',
    text:
      'Software house e consultoria em que sou sócio, ao lado de mais dois desenvolvedores, com projetos em desenvolvimento. Escrevi os guias do portal de engenharia da casa: autenticação de API, migrações sem downtime, performance de Postgres, infraestrutura com Docker e o fluxo de commits e PRs.',
    tags: ['Consultoria', 'Padrões de engenharia', 'Docusaurus'],
    href: 'https://polarainnovations.com/',
  },
  {
    name: 'UseQuittar',
    org: 'AI8',
    text:
      'Recuperação de crédito multi-tenant. Projetei a integração com a API oficial do WhatsApp (Meta Cloud API): webhook por empresa, roteamento e reconciliação de mensagens, validação de templates e onboarding do canal.',
    tags: ['Clean Architecture', 'DDD', 'Meta Cloud API'],
  },
  {
    name: 'CRM Imobiliário AI8',
    org: 'AI8 · em arquitetura',
    text:
      'O CRM próprio da AI8. Engenharia reversa do CV CRM para mapear o que o mercado usa, modelagem de domínio com máquinas de estado e 153 requisitos rastreados. ADRs e plano de infraestrutura Railway → AWS.',
    tags: ['ADRs', 'Modelagem de domínio', 'AWS'],
  },
  {
    name: 'CV CRM × Informakon',
    org: 'AI8',
    text:
      'Sincronização de corretores e clientes do CV para o ERP, e reconciliação por snapshot de unidades e vendas no sentido inverso, em modo dry-run ou apply. Cada dado tem uma fonte só.',
    tags: ['Python', 'FastAPI', 'Multi-tenant'],
  },
  {
    name: 'Reservas do Tauá',
    org: 'Taak',
    text:
      'Integrações com sistemas externos de disponibilidade, tarifas e confirmação de reservas; geração automática de propostas e automações sobre Opportunity e Quote.',
    tags: ['Apex', 'Sales Cloud', 'REST'],
  },
];

export type Step = {
  when: string;
  title: string;
  where: string;
  text: string;
  now?: boolean;
};

export const timeline: Step[] = [
  {
    when: '2025 — hoje',
    title: 'Sócio de tecnologia',
    where: 'AI8',
    text: 'Respondo pela arquitetura dos produtos e das integrações, ao lado de mais dois sócios de tecnologia. visuAI, Check Home, UseQuittar e o CRM imobiliário.',
    now: true,
  },
  {
    when: '2025 — hoje',
    title: 'Sócio',
    where: 'Polara Innovations',
    text: 'Software house e consultoria em Java, React e Node.js, com Kauã Leal e Felipe Dourado. Projetos em desenvolvimento e os padrões de engenharia da casa.',
    now: true,
  },
  {
    when: 'jan 2025 — hoje',
    title: 'Salesforce Developer',
    where: 'Taak',
    text: 'Plataforma Salesforce do QuintoAndar (Reclame Aqui, Account Merge) e reservas do Tauá. Em preparação para System Architect pelo Architect Track.',
    now: true,
  },
  {
    when: '2025 — 2026',
    title: 'Pós em Arquitetura e Desenvolvimento Java',
    where: 'FIAP',
    text: 'Padrões de projeto, sistemas distribuídos, serverless e programação reativa.',
  },
  {
    when: 'jun 2024 — jan 2025',
    title: 'Salesforce Developer',
    where: 'elera',
    text: 'Flows que melhoraram em cerca de 20% a aprovação de leads, serviços em Apex e LWC, integrações REST e testes acima de 85% de cobertura.',
  },
  {
    when: 'ago 2023 — jun 2024',
    title: 'Estágio',
    where: 'elera',
    text: 'Primeiro contato com Salesforce em produção, Scrum e code review.',
  },
  {
    when: '2023 — 2025',
    title: 'Análise e Desenvolvimento de Sistemas',
    where: 'SPTech',
    text: 'Base de engenharia de software, Java e banco de dados.',
  },
  {
    when: '2021 — 2022',
    title: 'Técnico em Desenvolvimento de Sistemas',
    where: 'ETEC',
    text: 'Onde começou.',
  },
];
