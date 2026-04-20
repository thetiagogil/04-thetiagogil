import type { Lang } from "@/types/common";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

const STORAGE_KEY = "thetiagogil-lang";

const dictionary: Record<string, Record<Lang, string>> = {
  // Navigation
  "nav.home": { en: "Home", pt: "Início", es: "Inicio" },
  "nav.timeline": { en: "Timeline", pt: "Percurso", es: "Trayectoria" },

  // Home
  "home.title": {
    en: "Frontend Developer & Architect",
    pt: "Frontend Developer & Arquiteto",
    es: "Frontend Developer & Arquitecto",
  },
  "home.bio": {
    en: "I'm a Frontend Developer focused on building modern web applications with React, Next.js, and TypeScript. I enjoy creating interfaces that are not only clean and performant, but also well-structured and easy to scale. My background in architecture shaped the way I think about design, usability, and systems, and I bring that mindset into the products I build. While frontend is my main focus, I'm also comfortable contributing across the stack when needed.",
    pt: "Sou um Frontend Developer focado em construir aplicações web modernas com React, Next.js e TypeScript. Gosto de criar interfaces que não são apenas limpas e performantes, mas também bem estruturadas e fáceis de escalar. A minha formação em arquitetura influenciou a forma como penso design, usabilidade e sistemas, e levo essa abordagem para os produtos que desenvolvo. Apesar do meu foco ser frontend, sinto-me confortável a contribuir em outras partes do stack quando necessário.",
    es: "Soy un Frontend Developer enfocado en construir aplicaciones web modernas con React, Next.js y TypeScript. Me gusta crear interfaces que no solo sean limpias y eficientes, sino también bien estructuradas y fáciles de escalar. Mi formación en arquitectura ha influido en cómo pienso el diseño, la usabilidad y los sistemas, y aplico ese enfoque en los productos que desarrollo. Aunque mi foco principal es el frontend, me siento cómodo contribuyendo en otras partes del stack cuando es necesario.",
  },
  "home.role": {
    en: "Frontend Developer & Architect",
    pt: "Frontend Developer & Arquiteto",
    es: "Frontend Developer & Arquitecto",
  },
  "home.based": { en: "Based in", pt: "Baseado em", es: "Ubicado en" },
  "home.location": {
    en: "Lisbon, Portugal",
    pt: "Lisboa, Portugal",
    es: "Lisboa, Portugal",
  },
  "home.viewTimeline": {
    en: "View full timeline",
    pt: "Explorar o meu percurso",
    es: "Explorar mi trayectoria",
  },
  "home.downloadCv": {
    en: "Download CV",
    pt: "Descarregar o meu currículo",
    es: "Descargar mi currículum",
  },
  "home.selected": {
    en: "Selected work",
    pt: "Trabalho selecionado",
    es: "Trabajo seleccionado",
  },
  "home.subtitle": {
    en: "A curated cross-section of practice. Full record available on the timeline.",
    pt: "Uma seleção curada do meu percurso. Registo completo disponível no percurso.",
    es: "Una selección curada de mi trayectoria. Registro completo disponible en la línea temporal.",
  },

  // Sections
  "section.experience": {
    en: "Experience",
    pt: "Experiência",
    es: "Experiencia",
  },
  "section.projects": { en: "Projects", pt: "Projetos", es: "Proyectos" },
  "section.education": { en: "Education", pt: "Educação", es: "Educación" },
  "section.certifications": {
    en: "Certifications",
    pt: "Certificações",
    es: "Certificaciones",
  },

  // Timeline
  "timeline.title": {
    en: "Trajectory",
    pt: "O meu percurso",
    es: "Mi trayectoria",
  },
  "timeline.subtitle": {
    en: "The complete record — every chapter, in chronological order.",
    pt: "O registo completo — cada capítulo, por ordem cronológica.",
    es: "El registro completo — cada capítulo, en orden cronológico.",
  },
  "timeline.all": { en: "All", pt: "Todos", es: "Todos" },
  "timeline.present": { en: "Present", pt: "Presente", es: "Presente" },

  // Settings
  "settings.title": { en: "Settings", pt: "Definições", es: "Configuración" },
  "settings.language": { en: "Language", pt: "Idioma", es: "Idioma" },
  "settings.theme": { en: "Appearance", pt: "Tema", es: "Tema" },
  "settings.light": { en: "Light", pt: "Claro", es: "Claro" },
  "settings.dark": { en: "Dark", pt: "Escuro", es: "Oscuro" },
  "settings.system": { en: "System", pt: "Sistema", es: "Sistema" },
  "settings.open": {
    en: "Open settings",
    pt: "Abrir definições",
    es: "Abrir configuración",
  },

  // Status
  "status.completed": { en: "Completed", pt: "Concluído", es: "Completado" },
  "status.outdated": {
    en: "Outdated",
    pt: "Desatualizado",
    es: "Desactualizado",
  },
  "status.inactive": { en: "Inactive", pt: "Inativo", es: "Inactivo" },
  "status.ongoing": { en: "Ongoing", pt: "Em curso", es: "En curso" },

  // Project detail
  "project.back": {
    en: "← Back to timeline",
    pt: "← Voltar ao percurso",
    es: "← Volver a trayectoria",
  },
  "project.role": { en: "Role", pt: "Função", es: "Rol" },
  "project.years": { en: "Years", pt: "Período", es: "Período" },
  "project.stack": { en: "Stack", pt: "Tecnologias", es: "Tecnologías" },
  "project.visit": {
    en: "Visit project",
    pt: "Visitar projeto",
    es: "Visitar proyecto",
  },
  "project.repo": {
    en: "View repository",
    pt: "Ver repositório",
    es: "Ver repositorio",
  },
  "project.viewCase": { en: "Read case", pt: "Ler caso", es: "Leer caso" },

  // Data translations — Experience
  experience_cr_espassos_name: {
    en: "Architect",
    pt: "Arquiteto",
    es: "Arquitecto",
  },
  experience_cr_espassos_description: {
    en: "At CR Espassos, I worked as an Architect in a multidisciplinary team, contributing to projects across architecture, engineering, and interior design. This experience required adapting to different types of requirements and collaborating closely with professionals from multiple areas to deliver cohesive solutions. I also took on a leadership role by mentoring junior team members, assigning tasks, and supporting their day-to-day work and development. This experience helped shape my approach to problem-solving, structure, and design, which I later brought into my work as a developer.",
    pt: "Na CR Espassos, trabalhei como arquiteto numa equipa multidisciplinar, contribuindo para projetos nas áreas de arquitetura, engenharia e design de interiores. Esta experiência exigiu adaptação a diferentes tipos de requisitos e colaboração próxima com profissionais de várias áreas para entregar soluções coerentes. Assumi também um papel de liderança ao orientar membros mais juniores, atribuindo tarefas e apoiando o seu trabalho e desenvolvimento no dia a dia. Esta experiência influenciou a forma como abordo problemas, estrutura e design, algo que mais tarde trouxe para o desenvolvimento de software.",
    es: "En CR Espassos, trabajé como arquitecto en un equipo multidisciplinar, contribuyendo a proyectos en las áreas de arquitectura, ingeniería y diseño de interiores. Esta experiencia requirió adaptarme a distintos tipos de requisitos y colaborar estrechamente con profesionales de diferentes áreas para ofrecer soluciones coherentes. También asumí un rol de liderazgo, guiando a miembros junior, asignando tareas y apoyando su trabajo y desarrollo diario. Esta experiencia influyó en mi forma de abordar problemas, la estructura y el diseño, algo que posteriormente apliqué en el desarrollo de software.",
  },
  experience_subvisual_description: {
    en: "At Subvisual, I worked as a Full-Stack Developer in an apprenticeship program, contributing to both web2 and web3 projects in a collaborative environment. During this experience, I developed a full-stack internal platform focused on team and skill management, as well as a web3 application integrating frontend development with smart contracts. This role allowed me to work closely with experienced developers and gain hands-on experience in a production-like environment, contributing across the stack with a stronger focus on frontend.",
    pt: "Na Subvisual, trabalhei como Full-Stack Developer num programa de aprendizagem, contribuindo para projetos web2 e web3 num ambiente colaborativo. Durante esta experiência, desenvolvi uma plataforma interna full-stack focada na gestão de equipas e competências, bem como uma aplicação web3 que integrava desenvolvimento frontend com smart contracts. Esta experiência permitiu-me trabalhar de perto com developers experientes e ganhar experiência prática num ambiente próximo de produção, contribuindo em várias áreas do stack, com maior foco em frontend.",
    es: "En Subvisual, trabajé como Full-Stack Developer en un programa de aprendizaje, contribuyendo a proyectos web2 y web3 en un entorno colaborativo. Durante esta experiencia, desarrollé una plataforma interna full-stack centrada en la gestión de equipos y habilidades, así como una aplicación web3 que integraba desarrollo frontend con smart contracts. Este rol me permitió trabajar de cerca con desarrolladores experimentados y adquirir experiencia práctica en un entorno similar a producción, contribuyendo en diferentes áreas del stack, con mayor enfoque en frontend.",
  },
  experience_talent_protocol_description: {
    en: "At Talent Protocol, I worked as a Frontend Developer across multiple products in a web3 ecosystem, contributing mainly to frontend development. I was responsible for building the Build.top frontend from scratch, translating Figma designs into a fully functional application. I also contributed to other core products, including Talent Passport, implementing features, improving UI/UX, and addressing user feedback. Throughout this experience, I worked on maintaining and extending a shared design system, ensuring consistency across different applications. This role exposed me to a fast-paced environment where iteration, product feedback, and continuous improvement were central to the development process.",
    pt: "Na Talent Protocol, trabalhei como Frontend Developer em vários produtos dentro de um ecossistema web3, com foco principal no desenvolvimento frontend. Fui responsável por desenvolver o frontend da Build.top de raiz, traduzindo designs em Figma numa aplicação totalmente funcional. Também contribuí para outros produtos principais, como o Talent Passport, implementando novas funcionalidades, melhorando a UI/UX e respondendo ao feedback dos utilizadores. Durante esta experiência, trabalhei na manutenção e evolução de um design system partilhado, garantindo consistência entre diferentes aplicações. Este papel deu-me experiência num ambiente dinâmico, onde a iteração, o feedback do produto e a melhoria contínua eram fundamentais.",
    es: "En Talent Protocol, trabajé como Frontend Developer en varios productos dentro de un ecosistema web3, con un enfoque principal en el desarrollo frontend. Fui responsable de desarrollar el frontend de Build.top desde cero, traduciendo diseños de Figma en una aplicación completamente funcional. También contribuí a otros productos clave, como Talent Passport, implementando nuevas funcionalidades, mejorando la UI/UX y respondiendo al feedback de los usuarios. Durante esta experiencia, trabajé en el mantenimiento y evolución de un design system compartido, asegurando la consistencia entre diferentes aplicaciones. Este rol me permitió trabajar en un entorno dinámico, donde la iteración, el feedback de producto y la mejora continua eran fundamentales.",
  },
  experience_aquasis_description: {
    en: "At Aquasis, I work as a Frontend Developer on the company's main platform, contributing to the development of new product functionality in a cross-functional team. My work focuses on building scalable frontend features using React, while helping modernize the platform by migrating from a legacy jQuery-based system to a more maintainable React architecture. Given my background in architecture, I also take an active role in UI/UX decisions, translating product requirements into clear, structured, and usable interface designs. I focus on creating solutions that balance usability, performance, and long-term maintainability.",
    pt: "Na Aquasis, trabalho como Frontend Developer na principal plataforma da empresa, contribuindo para o desenvolvimento de novas funcionalidades em colaboração com uma equipa multidisciplinar. O meu trabalho foca-se no desenvolvimento de funcionalidades frontend escaláveis com React, ao mesmo tempo que participo na modernização da plataforma através da migração de um sistema legado baseado em jQuery para uma arquitetura mais moderna e sustentável em React. Com a minha formação em arquitetura, tenho também um papel ativo nas decisões de UI/UX, traduzindo requisitos de produto em interfaces claras, estruturadas e fáceis de utilizar. Procuro sempre equilibrar usabilidade, performance e manutenibilidade a longo prazo.",
    es: "En Aquasis, trabajo como Frontend Developer en la plataforma principal de la empresa, contribuyendo al desarrollo de nuevas funcionalidades en colaboración con un equipo multidisciplinar. Mi trabajo se centra en el desarrollo de funcionalidades frontend escalables con React, al mismo tiempo que participo en la modernización de la plataforma mediante la migración de un sistema legado basado en jQuery a una arquitectura más moderna y mantenible en React. Gracias a mi formación en arquitectura, también tengo un papel activo en las decisiones de UI/UX, traduciendo los requisitos del producto en interfaces claras, estructuradas y fáciles de usar. Busco siempre equilibrar usabilidad, rendimiento y mantenibilidad a largo plazo.",
  },

  // Data translations — Projects
  project_giraffes_vs_sea_subject: {
    en: "2D Tower Defense Game",
    pt: "Jogo de Defesa de Torres 2D",
    es: "Juego de Defensa de Torres 2D",
  },
  project_giraffes_vs_sea_description: {
    en: "Tower defense videogame where the players use math to win. Independently conceived and executed the game.",
    pt: "Jogo de defesa de torres onde os jogadores usam matemática para vencer. Concebido e desenvolvido de forma independente.",
    es: "Videojuego de defensa de torres en el que los jugadores usan matemáticas para ganar. Concebido y desarrollado de forma independiente.",
  },
  project_finace_subject: {
    en: "Financial Tracking and Analysis",
    pt: "Aplicação de Finanças Pessoais",
    es: "Aplicación de Finanzas Personales",
  },
  project_finace_description: {
    en: "Web application designed for financial tracking and analysis. It provides users with tools to manage and visualize their income and expenses over different years and months, as well as offering various features to help users understand their financial data through detailed summaries and visual representations.",
    pt: "Aplicação web para gestão e análise financeira. Permite aos utilizadores acompanhar receitas e despesas ao longo do tempo, oferecendo ferramentas para análise detalhada e representação visual dos dados financeiros.",
    es: "Aplicación web para la gestión y análisis financiero. Permite a los usuarios hacer un seguimiento de ingresos y gastos a lo largo del tiempo, proporcionando herramientas de análisis detallado y visualización de datos financieros.",
  },
  project_wordlechain_subject: {
    en: "Wordle Game (Blockchain Edition)",
    pt: "Jogo Wordle (Edição Blockchain)",
    es: "Juego Wordle (Edición Blockchain)",
  },
  project_wordlechain_description: {
    en: "Wordlechain is a blockchain-based version of the classic Wordle game, built for Web3. Players use a custom ERC20 token to make guesses, combining blockchain technology with an interactive web interface.",
    pt: "Wordlechain é uma versão em blockchain do clássico jogo Wordle, desenvolvida para Web3. Os jogadores utilizam um token ERC20 personalizado para fazer tentativas, combinando tecnologia de blockchain com uma interface web interativa.",
    es: "Wordlechain es una versión en blockchain del clásico juego Wordle, diseñada para Web3. Los jugadores utilizan un token ERC20 personalizado para realizar intentos, combinando tecnología blockchain con una interfaz web interactiva.",
  },
  project_talentsy_subject: {
    en: "Team Talents Visualization Tool",
    pt: "Aplicação de Visualização de Talentos de Equipa",
    es: "Aplicación de Visualización de Talentos de Equipo",
  },
  project_talentsy_description: {
    en: "Talentsy is a team talents visualization tool that helps users discover, track, and compare their top talents. It provides personalized insights into talents, enabling teams to understand how individual skills contribute to collaboration and success. Users can explore their top 10 talents, set goals for growth, and compare team-wide talents to foster a more balanced and effective work environment.",
    pt: "O Talentsy é uma plataforma que permite visualizar e comparar os talentos das equipas de trabalho. Ajuda os utilizadores a identificar e acompanhar os seus principais talentos, oferecendo insights personalizados para construir um ambiente de trabalho mais equilibrado e produtivo.",
    es: "Talentsy es una plataforma que permite visualizar y comparar los talentos dentro de un equipo. Ayuda a los usuarios a identificar y desarrollar sus habilidades clave, proporcionando información personalizada para fomentar un entorno de trabajo más equilibrado y productivo.",
  },
  project_poketracker_subject: {
    en: "Pokémon Tracking App",
    pt: "Aplicação de Acompanhamento de Pokémon",
    es: "Aplicación de Acompañamiento de Pokémon",
  },
  project_poketracker_description: {
    en: "Poketracker is a full-stack platform I'm building to track progression across games using structured data systems. The project focuses heavily on designing scalable database architecture and defining tracking logic to support complex data relationships. It's also an exercise in building a system that balances performance, usability, and long-term maintainability.",
    pt: "O Poketracker é uma plataforma full-stack que estou a desenvolver para acompanhar a progressão em jogos através de sistemas de dados estruturados. O projeto foca-se no desenho de uma arquitetura de base de dados escalável e na definição de lógica de tracking capaz de suportar relações de dados mais complexas. É também um exercício em equilibrar performance, usabilidade e manutenibilidade a longo prazo.",
    es: "Poketracker es una plataforma full-stack que estoy desarrollando para seguir la progresión en juegos mediante sistemas de datos estructurados. El proyecto se centra en diseñar una arquitectura de base de datos escalable y en definir una lógica de seguimiento capaz de soportar relaciones de datos complejas. También busca equilibrar rendimiento, usabilidad y mantenibilidad a largo plazo.",
  },
  project_uparque_subject: {
    en: "Uparque Web Platform",
    pt: "Plataforma Web para cafetaria Uparque",
    es: "Plataforma Web para cafetería Uparque",
  },
  project_uparque_description: {
    en: "Uparque is a web platform I'm developing for a coffee shop, focused on delivering a clean and modern user experience. The project is driven by real business requirements, with a focus on translating those needs into a functional and responsive application ready for real-world use.",
    pt: "O Uparque é uma plataforma web que estou a desenvolver para um café, com foco numa experiência de utilização moderna e intuitiva. O projeto é guiado por requisitos reais de negócio, com o objetivo de traduzir essas necessidades numa aplicação funcional e responsiva, preparada para utilização no mundo real.",
    es: "Uparque es una plataforma web que estoy desarrollando para una cafetería, enfocada en ofrecer una experiencia de usuario moderna y limpia. El proyecto está guiado por requisitos reales de negocio, con el objetivo de traducir esas necesidades en una aplicación funcional y responsiva, preparada para su uso en un entorno real.",
  },

  // Data translations — Education
  education_guadalupe_name: {
    en: "High School",
    pt: "Ensino Secundário",
    es: "Educación Secundaria",
  },
  education_guadalupe_description: {
    en: "Completed the Science and Technology course, with participation in international Erasmus programs focused on collaboration and cultural exchange.",
    pt: "Conclusão do curso de Ciências e Tecnologias, com participação em programas Erasmus focados em colaboração e intercâmbio cultural.",
    es: "Finalización del itinerario de Ciencias y Tecnología, con participación en programas Erasmus centrados en la colaboración y el intercambio cultural.",
  },
  education_faul_name: {
    en: "Integrated Master's Degree in Architecture",
    pt: "Mestrado Integrado em Arquitetura",
    es: "Máster Integrado en Arquitectura",
  },
  education_faul_place: {
    en: "Faculty of Architecture, University of Lisbon",
    pt: "Faculdade de Arquitetura, Universidade de Lisboa",
    es: "Facultad de Arquitectura, Universidad de Lisboa",
  },
  education_faul_description: {
    en: "Completed an Integrated Master's in Architecture, with a focus on architecture and urban design. Dissertation explored human-centered design inspired by video game systems.",
    pt: "Conclusão do Mestrado Integrado em Arquitetura, com foco em arquitetura e urbanismo. Dissertação centrada em design centrado no utilizador, inspirada em sistemas de videojogos.",
    es: "Finalización del Máster Integrado en Arquitectura, con enfoque en arquitectura y urbanismo. Tesis centrada en el diseño centrado en el usuario, inspirada en sistemas de videojuegos.",
  },
  education_ironhack_name: {
    en: "Full-Stack Web Development Bootcamp",
    pt: "Bootcamp de Desenvolvimento Web Full-Stack",
    es: "Bootcamp de Desarrollo Web Full-Stack",
  },
  education_ironhack_description: {
    en: "Completed an intensive bootcamp focused on full-stack development, covering modern web technologies and application development.",
    pt: "Conclusão de um bootcamp intensivo focado em desenvolvimento full-stack, abordando tecnologias modernas para criação de aplicações web.",
    es: "Finalización de un bootcamp intensivo enfocado en desarrollo full-stack, cubriendo tecnologías modernas para la creación de aplicaciones web.",
  },

  // Data translations — Certifications
  certification_agile_name: {
    en: "Agile Project Management",
    pt: "Gestão de Projetos Agile",
    es: "Gestión de Proyectos Agile",
  },
  certification_agile_description: {
    en: "Covered core Agile methodologies, including Scrum, Kanban, and Lean.",
    pt: "Abordagem às principais metodologias Agile, incluindo Scrum, Kanban e Lean.",
    es: "Introducción a metodologías Agile, incluyendo Scrum, Kanban y Lean.",
  },
  certification_react_native_name: {
    en: "React Native",
    pt: "React Native",
    es: "React Native",
  },
  certification_react_native_description: {
    en: "Covered fundamentals of mobile development using React Native, including building cross-platform applications.",
    pt: "Fundamentos do desenvolvimento mobile com React Native, incluindo criação de aplicações multiplataforma.",
    es: "Fundamentos del desarrollo móvil con React Native, incluyendo la creación de aplicaciones multiplataforma.",
  },
  certification_outsystems_name: {
    en: "OutSystems",
    pt: "OutSystems",
    es: "OutSystems",
  },
  certification_outsystems_description: {
    en: "Introduction to low-code development using OutSystems for building web applications.",
    pt: "Introdução ao desenvolvimento low-code com OutSystems para criação de aplicações web.",
    es: "Introducción al desarrollo low-code con OutSystems para la creación de aplicaciones web.",
  },
};

type I18nContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
  tr: (key: string | undefined) => string;
};

const I18nContext = createContext<I18nContextType | null>(null);

const getInitialLang = (): Lang => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "en" || stored === "pt" || stored === "es") return stored;
  const nav = navigator.language.slice(0, 2);
  if (nav === "pt") return "pt";
  if (nav === "es") return "es";
  return "en";
};

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    localStorage.setItem(STORAGE_KEY, l);
    document.documentElement.lang = l;
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = useCallback(
    (key: string) => dictionary[key]?.[lang] ?? key,
    [lang],
  );

  const tr = useCallback(
    (key: string | undefined) => {
      if (!key) return "";
      return dictionary[key]?.[lang] ?? key;
    },
    [lang],
  );

  const value = useMemo(
    () => ({ lang, setLang, t, tr }),
    [lang, setLang, t, tr],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
};
