// Dicionário central de i18n. PT-BR é o idioma padrão; EN vive em /en/.
// Conteúdo confiável (escrito por nós) — paragráfos com <strong> são
// renderizados via set:html nos componentes.
export type Lang = 'pt-br' | 'en';
export const defaultLang: Lang = 'pt-br';

const STRONG = 'font-semibold text-zinc-800 dark:text-zinc-100';

export const content = {
  'pt-br': {
    htmlLang: 'pt-BR',
    dateLocale: 'pt-BR',
    nav: { home: 'Home', blog: 'Blog', about: 'Sobre' },
    paths: { home: '/', blog: '/blog', about: '/sobre' },
    toggle: { aria: 'Mudar para inglês', label: 'EN' },
    meta: {
      homeDesc:
        'Insights, curiosidades e anotações sobre engenharia de software, arquitetura e o ecossistema Java.',
      blogTitle: 'Blog',
      blogDesc:
        'Insights, curiosidades e anotações sobre engenharia de software.',
      aboutTitle: 'Sobre',
      aboutDesc: 'Um pouco sobre a minha jornada, experiência e objetivos.',
    },
    hero: {
      badge: 'Backend & Arquitetura · Pato Branco, PR',
      greeting: 'Olá, eu sou',
      headline:
        'Engenheiro de Software focado em backend, arquitetura de sistemas e no ecossistema Java.',
      pitchHtml: `Sou Engenheiro de Software na <strong class="${STRONG}">DB1 Global</strong>, onde trabalho na arquitetura de vários produtos. Meu forte é o backend com Java, mas também tenho experiência no frontend com Angular e React. No fim, o que me motiva é sempre o mesmo: pegar um problema complexo e entregar um sistema em que as pessoas confiam e que o próximo dev consegue manter sem sofrer.`,
      ctaBlog: 'Ler o blog',
      ctaAbout: 'Sobre mim',
      role: 'Eng. de Software · DB1 Global',
      locationEdu: 'Pato Branco, PR · ADS na UTFPR',
      chips: ['Spring', 'Angular', 'Quarkus', 'Microsserviços', 'Kafka', 'Postgres', 'Docker', 'Kubernetes'],
    },
    showcase: {
      title: 'Construindo software que aguenta o mundo real.',
      subtitle:
        'Código, arquitetura e as decisões que ninguém vê — documentadas sem filtro.',
    },
    latest: { title: 'Últimos artigos', all: 'Ver todos →' },
    tech: {
      title: 'Tecnologias & Experiência',
      groups: [
        {
          title: 'Backend & Frameworks',
          items: [
            'Java 8 até 25',
            'Spring Boot',
            'Quarkus',
            'Kafka',
            'Postgres',
            'Docker',
            'Kubernetes',
          ],
        },
        { title: 'Frontend', items: ['Angular', 'TypeScript', 'React'] },
        {
          title: 'Arquitetura & Design',
          items: [
            'Clean Architecture',
            'DDD',
            'Microsserviços',
            'SAGA',
            'Hexagonal Architecture',
            'Postgres',
          ],
        },
        { title: 'Infra & Deploy', items: ['Docker', 'Linux (Ubuntu)', 'WSL', 'Kubernetes'] },
        {
          title: 'Observabilidade & Performance',
          items: [
            'Prometheus',
            'Grafana',
            'Micrometer',
            'OpenTelemetry',
            'Tuning de JVM',
          ],
        },
      ],
    },
    projects: {
      title: 'Projetos em destaque',
      items: [
        {
          name: 'MarketEasy',
          description:
            'PWA com leitura de QR Code para validação de cupons fiscais',
          tags: ['PWA', 'QR Code', 'Docker', 'Linux', 'Self-hosted'],
          href: 'https://www.marketeasyapp.com.br/',
        },
      ],
    },
    postCard: { read: 'Ler artigo' },
    blog: {
      title: 'Blog',
      subtitle:
        'Insights, curiosidades e anotações sobre engenharia de software.',
      empty: 'Nenhum post ainda.',
    },
    post: { back: '← Voltar para o blog', updated: 'atualizado em' },
    about: {
      title: 'Sobre mim',
      lead: 'Olá! Sou o Matheus, a pessoa por trás deste blog. Tenho 24 anos, moro em Pato Branco, no Paraná, e trabalho com desenvolvimento de software há alguns anos — tempo suficiente pra ter certeza de que escolhi a área certa.',
      journeyTitle: 'A jornada',
      journey: [
        'Comecei a mexer com programação por pura curiosidade e nunca mais consegui parar. Hoje curso Análise e Desenvolvimento de Sistemas na UTFPR, mas, sendo honesto, boa parte do que sei veio de quebrar a cara em projeto real e depois voltar pro material pra entender o porquê das coisas. É esse vaivém entre teoria e prática que me mantém curioso até hoje.',
        'O que me fisgou desde o começo foi a sensação de transformar um problema confuso em algo organizado e simples de entender. Escrevo aqui por dois motivos: ajudar o desenvolvedor iniciante que eu já fui e registrar, pro meu eu do futuro, aquilo que vou aprendendo pelo caminho. Explicar uma ideia pra outra pessoa segue sendo o melhor jeito que conheço de descobrir se realmente entendi o assunto.',
      ],
      workTitle: 'No que trabalho',
      work: [
        `Atualmente sou Engenheiro de Software na <strong class="${STRONG}">DB1 Global</strong>, e o que mais gosto do dia a dia é não ficar preso a um único sistema: circulo pela arquitetura de vários produtos ao mesmo tempo. Na prática, isso me deu o hábito de enxergar os mesmos problemas se repetindo em lugares diferentes — e a chance de resolver de um jeito que sirva pra mais de um time, não só pra apagar o incêndio da vez.`,
        'Meu terreno principal é o backend, com Java e Spring, mas também trabalho no frontend com Angular quando faz sentido. O que mais me interessa não são os recursos novos e brilhantes, e sim os bastidores: refatorar algo crítico sem quebrar o que já roda, cuidar de autenticação e segurança, investigar por que um serviço está lento. É nesses momentos que a engenharia deixa de ser sobre a ferramenta e passa a ser sobre a decisão certa.',
      ],
      goalsTitle: 'Objetivos & evolução',
      goals: [
        'Meu foco agora é ir fundo em arquitetura e sistemas distribuídos — entender de verdade o que acontece quando as coisas escalam e algo inevitavelmente dá errado. Também afiando o inglês, porque boa parte do conteúdo que me faz crescer está nele.',
        'No fim, o plano é simples: continuar resolvendo problemas cada vez mais difíceis e ir escrevendo o que aprendo pelo caminho. Carreira, pra mim, é isso — não uma corrida, mas uma sequência de problemas bons.',
      ],
      ctaTitle: 'Vamos conversar?',
      ctaText:
        'Se quiser trocar uma ideia sobre arquitetura, carreira ou tecnologia, me chame por lá. Comentários nos posts também são muito bem-vindos.',
    },
  },
  en: {
    htmlLang: 'en',
    dateLocale: 'en-US',
    nav: { home: 'Home', blog: 'Blog', about: 'About' },
    paths: { home: '/en/', blog: '/en/blog', about: '/en/sobre' },
    toggle: { aria: 'Switch to Portuguese', label: 'PT' },
    meta: {
      homeDesc:
        'Insights, oddities and notes on software engineering, architecture and the Java ecosystem.',
      blogTitle: 'Blog',
      blogDesc: 'Insights, oddities and notes on software engineering.',
      aboutTitle: 'About',
      aboutDesc: 'A bit about my journey, experience and goals.',
    },
    hero: {
      badge: 'Backend & Architecture · Pato Branco, Brazil',
      greeting: "Hi, I'm",
      headline:
        'Software engineer focused on backend, systems architecture and the Java ecosystem.',
      pitchHtml: `I'm a Software Engineer at <strong class="${STRONG}">DB1 Global</strong>, where I work on the architecture of several products at once. My strength is the backend with Java and Spring, but I also get my hands into the frontend with Angular when a project calls for it. In the end, what drives me is always the same: take a complex problem and ship a system people trust and that the next dev can maintain without suffering.`,
      ctaBlog: 'Read the blog',
      ctaAbout: 'About me',
      role: 'Software Engineer · DB1 Global',
      locationEdu: 'Pato Branco, Brazil · Systems Dev at UTFPR',
      chips: ['Java', 'Spring', 'Angular', 'Quarkus', 'Microservices'],
    },
    showcase: {
      title: 'Building software that survives the real world.',
      subtitle:
        'Code, architecture and the decisions nobody sees — documented without a filter.',
    },
    latest: { title: 'Latest posts', all: 'See all →' },
    tech: {
      title: 'Tech & Experience',
      groups: [
        {
          title: 'Backend & Frameworks',
          items: [
            'Java (legacy to modern)',
            'Spring Boot',
            'Spring Cloud Gateway',
            'Quarkus',
          ],
        },
        { title: 'Frontend', items: ['Angular', 'TypeScript'] },
        {
          title: 'Architecture & Design',
          items: [
            'Clean Architecture',
            'DDD',
            'Microservices',
            'SAGA',
            'Strategy',
            'Facade',
          ],
        },
        { title: 'Infra & Deploy', items: ['Docker', 'Linux (Ubuntu)', 'WSL'] },
        {
          title: 'Observability & Performance',
          items: [
            'Prometheus',
            'Grafana',
            'Micrometer',
            'OpenTelemetry',
            'JVM tuning',
          ],
        },
      ],
    },
    projects: {
      title: 'Featured projects',
      items: [
        {
          name: 'MarketEasy',
          description:
            'A PWA that reads QR Codes to validate fiscal receipts, running on self-hosted infrastructure with Docker and Linux.',
          tags: ['PWA', 'QR Code', 'Docker', 'Linux', 'Self-hosted'],
          href: 'https://www.marketeasyapp.com.br/',
        },
      ],
    },
    postCard: { read: 'Read article' },
    blog: {
      title: 'Blog',
      subtitle: 'Insights, oddities and notes on software engineering.',
      empty: 'No posts yet.',
    },
    post: { back: '← Back to the blog', updated: 'updated on' },
    about: {
      title: 'About me',
      lead: "Hi! I'm Matheus, the person behind this blog. I'm 24, I live in Pato Branco, southern Brazil, and I've been working with software development for a few years now — long enough to be sure I picked the right field.",
      journeyTitle: 'The journey',
      journey: [
        "I started messing with programming out of pure curiosity and never managed to stop. I'm currently studying Systems Analysis & Development at UTFPR, but, honestly, most of what I know came from falling flat on my face in real projects and then going back to the books to understand why things work the way they do. It's that back-and-forth between theory and practice that keeps me curious to this day.",
        'What hooked me from the start was the feeling of turning a confusing problem into something organized and easy to understand. I write here for two reasons: to help the beginner developer I once was, and to record, for my future self, whatever I learn along the way. Explaining an idea to someone else is still the most honest way I know to find out whether I actually understood it.',
      ],
      workTitle: 'What I work on',
      work: [
        `I'm currently a Software Engineer at <strong class="${STRONG}">DB1 Global</strong>, and what I enjoy most day to day is not being stuck with a single system: I move across the architecture of several products at once. In practice, that gave me the habit of spotting the same problems repeating in different places — and the chance to solve them in a way that serves more than one team, not just to put out the fire of the day.`,
        "My main ground is the backend, with Java and Spring, but I also work on the frontend with Angular when it makes sense. What interests me most isn't the shiny new features, but the backstage work: refactoring something critical without breaking what already runs, taking care of authentication and security, digging into why a service is slow. Those are the moments when engineering stops being about the tool and starts being about the right decision.",
      ],
      goalsTitle: 'Goals & growth',
      goals: [
        'My focus right now is going deep into architecture and distributed systems — really understanding what happens when things scale and something inevitably goes wrong. I am also sharpening my English, since a good chunk of the content that helps me grow is written in it.',
        'In the end, the plan is simple: keep solving harder and harder problems and keep writing down what I learn along the way. Career, to me, is exactly that — not a race, but a sequence of good problems.',
      ],
      ctaTitle: "Let's talk?",
      ctaText:
        "If you'd like to chat about architecture, career or technology, reach out over there. Comments on the posts are very welcome too.",
    },
  },
} as const;

export function getContent(lang: Lang) {
  return content[lang];
}
