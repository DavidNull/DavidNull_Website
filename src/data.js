export const PROFILE = {
  name: 'David',
  role: 'Platform Engineer',
  place: ' Developer (freetime)',
  tagline: 'Did you know? You can click the FULL button to get a fullscreen view.',
  stats: [
    { label: 'Exp', value: '01' },
    { label: 'Certificaciones', value: '23' },
    { label: 'Proyectos', value: '06' },
  ],
}

export const BOOT_LINES = [
  '[PATCH_LOG]: Installing Bitacora module...',
  '[NOTE]: More stuff coming soon... :D',
]

export const SECTIONS = [
  {
    id: 'profile',
    label: 'Perfil',
    sub: '',
    color: 'turquoise',
    sprite: 'profile',
    intro: 'Un poco más sobre quién soy y mi enfoque técnico.',
    items: [
      {
        title: 'Sobre mí',
        meta: 'DevOps & Platform Engineer',
        text: 'Apasionado de la tecnología, especializado en el diseño, automatización y mantenimiento de infraestructuras multicloud. Me dedico a construir entornos sólidos y escalables, orientados a eventos, y optimizar procesos para los equipos de desarrollo.',
      },
      {
        title: 'Stack Técnico',
        meta: 'Cloud, Contenedores & Observabilidad',
        text: 'Trabajo habitualmente en entornos AWS, Azure y GCP. Mi ecosistema diario incluye la gestión y orquestación con Kubernetes, Docker, Terraform y Helm, flujos CI/CD con GitHub Actions, y monitorización  utilizando OpenTelemetry, Prometheus y Grafana.',
      },
      {
        title: 'Formación',
        meta: 'Administración de Sistemas Informáticos en Red',
        text: 'Técnico Superior (ASIR), con bachillerato tecnológico ¡Haz click en la medalla para ver mis certificaciones!',
      },
    ],
  },
  {
    id: 'experience',
    label: 'Experiencia',
    sub: '',
    color: 'maroon',
    sprite: 'train',
    intro: 'Mi recorrido profesional.',
    items: [
      {
        title: 'CONVOTIS Iberia',
        meta: 'Platform Engineer - 10/2025 - Now',
        text: 'Diseño y mantenimiento de múltiples infraestructuras multicloud sólida para plataformas orientadas a eventos de nivel empresarial.',
        tags: ['AWS', 'CI/CD', 'Kubernetes', 'Terraform'],
      },
      {
        title: 'Freepik (Ahora Magnific)',
        meta: 'Internship - 03/2025 - 06/2025',
        text: 'Colaboración en el desarrollo de herramientas internas y optimización de procesos de diseño (ExpressOps).',
        tags: ['ExpressOps', 'PlatformEngineering', 'EventDrivenArchitecture'],
      },
      {
        title: 'Encargos Puntuales & Colaboraciones',
        meta: 'Consulting & Technical Support',
        text: 'Colaboración en el despliegue de infraestructuras ligeras, automatización de procesos y resolución de necesidades técnicas para pequeños proyectos y encargos puntuales.',
        tags: ['Consultoría', 'DevOps', 'Cloud', 'Automation'],
      },
    ],
  },
  {
    id: 'certifications',
    label: 'Certificaciones',
    sub: '',
    color: 'yellow',
    sprite: 'medal',
    intro: 'Certificaciones oficiales en infraestructura cloud, automatización, observabilidad y redes.',
    items: [
      {
        title: 'Well-Architected Proficient - AWS',
        meta: 'Amazon Web Services Training and Certification',
        text: '',
        href: 'https://www.credly.com/earner/earned/badge/f3c20420-ad89-46ac-afcd-baa932e274a7',
      },
      {
        title: 'CCNA: Enterprise Networking, Security, and Automation',
        meta: 'Cisco Networking Academy',
        text: '',
        href: 'https://www.credly.com/earner/earned/badge/f777f1c6-6024-43b1-a44e-0a6832424868',
      },
      {
        title: 'CCNA: Switching, Routing, and Wireless Essentials',
        meta: 'Cisco Networking Academy',
        text: '',
        href: 'https://www.credly.com/earner/earned/badge/9cd195bb-23de-46a2-81d9-e7d47046114f',
      },
      {
        title: 'Google Cybersecurity Professional Certificate V2',
        meta: 'Coursera',
        text: '',
        href: 'https://www.credly.com/earner/earned/badge/17b5b22d-a2c9-473a-ae0e-dbb563c14398',
      },
    ],
    more: {
      title: 'Muchas Más',
      text: 'Echa un ojo a mi perfil en Credly.',
      href: 'https://www.credly.com/users/david-cela',
    },
  },
  {
    id: 'projects',
    label: 'Proyectos',
    sub: '',
    color: 'blue',
    sprite: 'card',
    intro: 'Algunos de mis proyectos personales y laborales.',
    items: [
      {
        title: 'ExpressOps',
        meta: 'Lightweight flow orchestrator to automate repetitive _Ops tasks.',
        text: 'Motor de orquestación de flujos de trabajo para automatización y monitoreo de infraestructura/Kubernetes, basado en el lenguaje Go',
        tags: ['Go', 'K8s'],
        logo: 'assets/logos/ExpressOps.png',
      },
      {
        title: 'Fitgenie',
        meta: 'An open-source AI to help you choose your outfit of the day',
        text: 'Aplicación de gestión de armario personal y recomendación de conjuntos según la ocasión, basada en una interfaz móvil en Flutter y una API backend en Go con PostgreSQL y S3.',
        tags: ['Flutter', 'Go', 'PostgreSQL', 'S3'],
        logo: 'assets/logos/Fitgenie.png',
      },
      {
        title: 'Where is my kid?',
        meta: 'My Final Degree Project',
        text: 'Sistema de rastreo GPS infantil en tiempo real compuesto por una aplicación móvil en Flutter para la transmisión de coordenadas en segundo plano y un panel de control web en Vue.js 3 respaldado por Firebase.',
        tags: ['Flutter', 'Vue.js', 'Firebase'],
        logo: 'assets/logos/WIMK.png',
      },
      {
        title: 'Actualmente trabajando en...',
        meta: 'More to come',
        text: 'AdOut-4-Dummies entre otros!!',
        tags: [],
        logo: 'assets/obscurevideogames.gif',
      },
    ],
  },
  {
    id: 'skills',
    label: 'Extra skills',
    sub: 'Y recomendaciones :)',
    color: 'orange',
    sprite: 'star',
    intro: 'Puede ser de interés',
    items: [
      {
        title: 'Nivel C1 de inglés',
        meta: 'Fluent',
        text: 'Cursé un año en EEUU.',
        tags: ['English'],
      },
      {
        title: 'Recomendación',
        meta: 'Julio Gómez Rivera - Solution Architect',
        text: '¡Haz click aquí para leerla!',
        tags: ['Linkedin'],
        href: 'https://www.linkedin.com/feed/update/urn:li:activity:7472228419360034816/',
      },
    ],
  },
  {
    id: 'contact',
    label: 'Contacto',
    sub: '',
    color: 'lime',
    sprite: 'bubble',
    intro: 'Mis redes y formas de contacto.',
    fields: [
      { label: 'Nombre', value: 'David Cela Pedraza' },
      { label: 'Email', value: 'davidcelapedraza@gmail.com' },
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/davidnull' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/david-cela-pedraza/' },
      // { label: 'Twitter', href: 'https://twitter.com/' },
    ],
    cv: {
      label: 'CV',
      note: '',
      href: 'assets/David_Cela_Pedraza_CV_2026.pdf',
      file: 'david-cela-pedraza-cv.pdf',
    },
  },
]

export const SECTION_BY_ID = Object.fromEntries(SECTIONS.map((s) => [s.id, s]))
