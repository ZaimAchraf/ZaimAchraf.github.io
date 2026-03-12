export type NavItem = {
  id: string;
  label: string;
  icon: string;
};

export type SocialLink = {
  href: string;
  icon: string;
  className?: string;
  label: string;
};

export type Article = {
  title: string;
  href: string;
  description: string;
  iconClass: string;
};

export type Skill = {
  label: string;
  level: string;
  value: number;
};

export type SkillGroup = {
  title: string;
  description: string;
  icon: string;
  items: string[];
};

export type ResumeEntry = {
  title: string;
  period: string;
  organization: string;
  description?: string;
  details?: string[];
};

export type PortfolioMedia =
  | { type: 'images'; items: string[] }
  | { type: 'document'; src: string; title: string };

export type PortfolioProject = {
  slug: string;
  title: string;
  cardTitle: string;
  summary: string;
  category: 'client' | 'starter' | 'showcase';
  stack: string;
  client: string;
  date: string;
  cardImage: string;
  description: string;
  projectUrl?: string;
  projectUrlLabel?: string;
  media: PortfolioMedia;
};

export const siteMeta = {
  title: 'Portfolio - Zaim Achraf',
  description:
    'Portfolio of Zaim Achraf, Technical Referent and Java Fullstack Developer.',
  keywords: 'portfolio, java, spring boot, fullstack, technical referent',
};

export const navItems: NavItem[] = [
  { id: 'hero', label: 'Home', icon: 'bx bx-home' },
  { id: 'about', label: 'About', icon: 'bx bx-user' },
  { id: 'articles', label: 'Articles', icon: 'bi bi-journal-text' },
  { id: 'resume', label: 'Resume', icon: 'bx bx-file-blank' },
  { id: 'portfolio', label: 'Portfolio', icon: 'bx bx-book-content' },
  { id: 'contact', label: 'Contact', icon: 'bx bx-envelope' },
];

export const socialLinks: SocialLink[] = [
  {
    href: 'https://www.linkedin.com/in/achraf-zaim-443936233/',
    icon: 'bi bi-linkedin',
    label: 'LinkedIn',
  },
  {
    href: 'https://github.com/ZaimAchraf',
    icon: 'bi bi-github',
    className: 'linkedin',
    label: 'GitHub',
  },
  {
    href: 'https://wa.me/212693020346',
    icon: 'bi bi-whatsapp',
    className: 'Phone',
    label: 'WhatsApp',
  },
  {
    href: 'mailto:achraf.zaime@gmail.com',
    icon: 'bi bi-envelope',
    className: 'Google',
    label: 'Email',
  },
];

export const articles: Article[] = [
  {
    title: 'Reactive Programming in Java',
    href: 'https://medium.com/@achraf.zaime/reacxtive-programming-in-java-6bef5eb50b75',
    description:
      'This article delves into the core concepts of reactive programming, its benefits in handling modern application requirements, and practical implementation in Java using libraries like Project Reactor and RxJava.',
    iconClass: 'iconbox-blue',
  },
  {
    title: 'Unlocking Problem Solving : Backtracking and Dynamic Programming',
    href: 'https://medium.com/@achraf.zaime/unlocking-problem-solving-backtracking-and-dynamic-programming-eda552297d84',
    description:
      'This article breaks down the core principles of backtracking and dynamic programming, highlights their differences, and showcases practical examples to demonstrate their effective application in optimizing solutions within computer science.',
    iconClass: 'iconbox-orange',
  },
  {
    title: 'Unlocking Problem Solving II : Sliding windows & Two pointers Algorithms',
    href: 'https://medium.com/@achraf.zaime/unlocking-problem-solving-ii-sliding-windows-two-pointers-algorithms-0791fd6cba57',
    description:
      'This article explores the Sliding Window and Two Pointers algorithms, breaking down their core principles and demonstrating their effectiveness in solving complex problems efficiently. Practical examples illustrate how these techniques can be applied in various scenarios within computer science.',
    iconClass: 'iconbox-pink',
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'Backend',
    description: 'Building reliable server-side applications and business features.',
    icon: 'bi bi-hdd-stack',
    items: ['Java', 'JEE', 'Spring Boot', 'REST APIs', 'Microservices'],
  },
  {
    title: 'Frontend',
    description: 'Creating clean interfaces and integrating frontend features with backend services.',
    icon: 'bi bi-window-stack',
    items: ['Angular', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Sass', 'Bootstrap'],
  },
  {
    title: 'Data & Persistence',
    description: 'Designing and working with application data layers and storage.',
    icon: 'bi bi-server',
    items: ['SQL', 'PL/SQL', 'Database Design', 'Redis', 'MongoDB'],
  },
  {
    title: 'Delivery & Tools',
    description: 'Supporting team delivery, collaboration, and deployment workflows.',
    icon: 'bi bi-gear-wide-connected',
    items: ['Git', 'GitHub', 'Docker', 'Jenkins', 'Scrum'],
  },
  {
    title: 'Quality & Maintenance',
    description: 'Keeping codebases maintainable, debuggable, and production-ready.',
    icon: 'bi bi-shield-check',
    items: ['Testing', 'Debugging', 'Refactoring', 'Production Support', 'Code Maintenance'],
  },
  {
    title: 'Additional Stack',
    description: 'Complementary technologies used when the project context requires them.',
    icon: 'bi bi-plus-square',
    items: ['React', 'PHP', 'Laravel'],
  },
];

export const education: ResumeEntry[] = [
  {
    title: 'Master of Data Science & Intelligent Systems',
    period: '2021 - 2023',
    organization: 'Faculty of Science and Technology of Fes',
  },
  {
    title: 'Bachelor\'s Degree in Computer Science',
    period: '2020 - 2021',
    organization: 'Faculty of Science and Technology of Fes',
  },
  {
    title: 'DEUST in Mathematics, Computer Science and Physics',
    period: '2018 - 2020',
    organization: 'Faculty of Science and Technology of Fes',
  },
];

export const experience: ResumeEntry[] = [
  {
    title: 'Technical Referent (Full Time)',
    period: 'September 2024 - Today',
    organization: 'CGI Solutions And Technologies',
    details: [
      'Led technical resolution for a money card management application built with Java, Spring, and Struts.',
      'Reviewed team deliveries to ensure code quality and compliance with project standards.',
      'Coordinated integration and production deployments while supporting the team on complex issues.',
    ],
  },
  {
    title: 'Java/JEE Fullstack Developer (Full Time)',
    period: 'February 2023 - September 2024',
    organization: 'CGI Solutions And Technologies',
    details: [
      'Developed and maintained backend features for CardPro using Java, Spring, Struts, and Oracle.',
    ],
  },
  {
    title: 'Freelance Fullstack Developer',
    period: 'April 2020 - Today',
    organization: 'Multiple clients and independent projects',
    details: [
      'Delivered fullstack web projects for clients, including feature development, bug fixing, maintenance, and deployment support.',
    ],
  },
];

export const portfolioFilters = [
  { label: 'All', value: '*' },
  { label: 'Client Applications', value: '.filter-client' },
  { label: 'Technical Showcase', value: '.filter-showcase' },
  { label: 'Engineering Starters', value: '.filter-starter' },
] as const;

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: 'mobdie-kids',
    title: 'Mobdie Kids',
    cardTitle: 'Mobdie Kids',
    summary: 'Educational boxes, subscriptions, and e-learning platform',
    category: 'client',
    stack: 'Web Application',
    client: 'Mobdie Kids',
    date: 'June 20, 2023',
    cardImage: '/assets/img/portfolio/mobdie_1.png',
    description:
      'A multi-role web platform designed for an educational box business, combining product catalog management, subscriptions, parent and child spaces, e-learning content, gamification, partner workflows, and a configurable admin backoffice.',
    projectUrl: 'https://mobdie.ma',
    projectUrlLabel: 'Live Demo',
    media: {
      type: 'images',
      items: [
        '/assets/img/portfolio/mobdie_1.png',
        '/assets/img/portfolio/mobdie_2.png',
        '/assets/img/portfolio/mobdie_3.png',
      ],
    },
  },
  {
    slug: 'ecosystem-monitoring-platform',
    title: 'Ecosystem Monitoring Platform',
    cardTitle: 'Monitoring Platform',
    summary: 'Internal supervision, reporting, and alerting platform',
    category: 'client',
    stack:
      'Java 21, Spring Boot, Oracle DB, Redis, Angular, Docker, Spring Security, Quartz',
    client: 'Confidential enterprise client',
    date: 'Professional internal platform',
      cardImage: '/assets/img/portfolio/Monitoring_1.png',
      description:
        'An internal platform built to supervise a client ecosystem by collecting data from multiple components through scheduled feeds, direct database access, SFTP file retrieval, and APIs. The platform turns that data into configurable dashboards, reports, and automated alerts, with pages, sections, widgets, tables, graphs, and alert rules all driven by database configuration. I also contribute to its maintenance, production support, and ongoing evolution.',
      media: {
      type: 'images',
      items: [
        '/assets/img/portfolio/Monitoring_1.png',
        '/assets/img/portfolio/Monitoring_2.png',
        '/assets/img/portfolio/Monitoring_3.png',
      ],
    },
  },
  {
    slug: 'binwatcher',
    title: 'BinWatcher',
    cardTitle: 'BinWatcher',
    summary: 'Smart waste management platform',
    category: 'showcase',
    stack: 'Spring Boot, Spring Cloud, Kafka, MongoDB, Docker, ELK',
    client: 'Architecture and product case study',
    date: '2025',
    cardImage: '/assets/img/portfolio/BinWatcher.png',
    description:
      'A smart waste management platform built to monitor bin fill levels in real time, automate driver assignment, and improve collection efficiency through event-driven workflows.',
    projectUrl: 'https://github.com/ZaimAchraf/BinWatcher',
    projectUrlLabel: 'GitHub Repository',
    media: {
      type: 'images',
      items: ['/assets/img/portfolio/BinWatcher.png'],
    },
  },
  {
    slug: 'springboot-starter',
    title: 'Spring Boot Starter',
    cardTitle: 'Spring Boot Starter',
    summary: 'Reusable Spring Boot backend foundation',
    category: 'starter',
    stack: 'Spring Boot, JWT, Flyway, PostgreSQL, Docker, Maven',
    client: 'Reusable engineering starter',
    date: '2025',
    cardImage: '/assets/img/portfolio/SpringBootStarter.png',
    description:
      'A reusable Spring Boot starter built to accelerate backend projects with secure authentication, database migrations, file storage, testing, and a Docker-based local environment.',
    projectUrl: 'https://github.com/ZaimAchraf/SpringBootStarter',
    projectUrlLabel: 'GitHub Repository',
      media: {
      type: 'images',
      items: ['/assets/img/portfolio/SpringBootStarter.png'],
    },
  },
  {
    slug: 'laravel-starter',
    title: 'Laravel Starter',
    cardTitle: 'Laravel Starter',
    summary: 'Reusable Laravel application foundation',
    category: 'starter',
    stack: 'Laravel 10, Jetstream, Fortify, Sanctum, MySQL, Docker',
    client: 'Reusable engineering starter',
    date: '2025',
    cardImage: '/assets/img/portfolio/LaravelStarter.png',
    description:
      'A reusable Laravel starter designed for faster project setup, with authentication, role-based authorization, clean service architecture, Docker support, and testing foundations.',
    projectUrl: 'https://github.com/ZaimAchraf/LaravelStarter',
    projectUrlLabel: 'GitHub Repository',
    media: {
      type: 'images',
      items: ['/assets/img/portfolio/LaravelStarter.png'],
    },
  },
  {
    slug: 'autobody-repair',
    title: 'AutoBody',
    cardTitle: 'AutoBody',
    summary: 'Repair business management platform',
    category: 'client',
    stack: 'Spring Boot & Angular',
    client: 'AutoBody & Repair',
    date: 'July 2023',
    cardImage: '/assets/img/portfolio/autobody_1.png',
    description:
      'A fullstack web platform built to streamline repair business operations, including client management, scheduling, invoicing, inventory tracking, and operational reporting.',
    media: {
      type: 'document',
      src: '/assets/Documents/Documentation_Fonctionnelle_Backoffice.pdf',
      title: 'Documentation Fonctionnelle Backoffice',
    },
  },
  {
    slug: 'Syndicat',
    title: 'Syndicat Platform',
    cardTitle: 'Syndicat Platform',
    summary: 'Condominium management, billing, and resident communication',
    category: 'client',
    stack: 'Laravel API, React, MySQL',
    client: 'Condominium management client',
    date: 'July 2023',
    cardImage: '/assets/img/portfolio/syndicat_1.png',
    description:
      'A multi-role web platform designed for condominium management, with dedicated spaces for administrators, syndic managers, and co-owners. It centralizes user and property management, monthly invoice generation and payment tracking, condominium documents and rules, internal messaging, complaints and work requests, and shared calendar events with notifications.',
    media: {
      type: 'document',
      src: '/assets/Documents/Syndicat.pdf',
      title: 'Syndicat document',
    },
  },
];
