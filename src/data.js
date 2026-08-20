export const PROFILE = {
  name: 'David Cela Pedraza',
  subtitle: 'DavidNull',
  role: 'Platform Engineer & Developer',
  place: 'Málaga, Spain',
  tagline: 'DevOps/Platform Engineer especializado en Cloud Engineering con enfoque Security First.',
  stats: [
    { label: 'Años', value: '02' },
    { label: 'Proyectos', value: '04' },
    { label: 'Certificaciones', value: '06' },
  ],
}

export const BOOT_LINES = [
  'Bienvenido a mi portfolio personal...',
  'Cargando experiencia como Platform Engineer...',
]

export const SECTIONS = [
  {
    id: 'profile',
    label: 'Sobre Mí',
    sub: 'Profile',
    color: 'turquoise',
    sprite: 'profile',
    intro: 'Desde joven me interesé por las tecnologías de la información. Durante mis estudios descubrí DevOps, que se convirtió en mi foco profesional principal.',
    items: [
      {
        title: 'Platform Engineer',
        meta: 'Convotis - Actualidad',
        text: 'Especializado en Cloud Engineering, diseño de arquitecturas escalables y de alta disponibilidad alineadas con AWS Well-Architected Framework. Mentalidad Security First desde el día cero.',
      },
      {
        title: 'Developer',
        meta: 'Mi tiempo libre',
        text: 'Desarrollo aplicaciones distribuidas basadas en Python y Go. Me adapto rápidamente a nuevas tecnologías y busco soluciones innovadoras.',
      },
    ],
  },
  {
    id: 'experience',
    label: 'Experiencia',
    sub: 'Experience',
    color: 'maroon',
    sprite: 'train',
    intro: 'Experiencia profesional en Cloud Engineering y DevOps.',
    items: [
      {
        title: 'DevOps Engineer',
        meta: 'Convotis - Oct 2025 / Actualidad',
        text: 'Diseño y mantenimiento de infraestructura multi-cloud para plataformas empresariales. Arquitectura AWS Well-Architected, Security First, IaC con Terraform, ECS Fargate, Python ecosystem, CI/CD con GitHub Actions.',
        tags: ['AWS', 'Terraform', 'Python', 'Kubernetes', 'CI/CD'],
      },
      {
        title: 'SRE Internship',
        meta: 'Freepik - Mar 2025 / Jun 2025',
        text: 'Desarrollo y monitorización de plataformas operativas. Automatización de flujos con Go, despliegue de microservicios en Kubernetes, configuración de observabilidad con Prometheus, Grafana y OpenTelemetry.',
        tags: ['Go', 'Kubernetes', 'Helm', 'Observability'],
      },
    ],
  },
  {
    id: 'certifications',
    label: 'Certificaciones',
    sub: 'Certifications',
    color: 'yellow',
    sprite: 'medal',
    intro: 'Certificaciones profesionales en Cloud, Security y Networking.',
    items: [
      {
        title: 'AWS Well-Architected Proficient',
        meta: 'Amazon Web Services',
        text: 'Framework de arquitectura cloud de AWS para diseñar sistemas seguros, eficientes y de alto rendimiento.',
        href: 'https://www.credly.com/earner/earned/badge/f777f1c6-6024-43b1-a44e-0a6832424868',
      },
      {
        title: 'AWS Cloud Practitioner',
        meta: 'Amazon Web Services',
        text: 'Fundamentos de cloud computing y servicios AWS básicos.',
        href: 'https://www.credly.com/earner/earned/badge/1f4d619b-798e-4cd3-bc14-46c3d6c6abe9',
      },
      {
        title: 'Generative AI Practitioner',
        meta: 'Amazon Web Services',
        text: 'Fundamentos de IA generativa y su implementación en AWS.',
        href: 'https://www.credly.com/earner/earned/badge/f3c20420-ad89-46ac-afcd-baa932e274a7',
      },
      {
        title: 'CCNA Enterprise',
        meta: 'Cisco',
        text: 'Switching, Routing, Wireless Essentials, Cyber Threat Management y Enterprise Networking.',
        href: 'https://www.credly.com/earner/earned/badge/17b5b22d-a2c9-473a-ae0e-dbb563c14398',
      },
      {
        title: 'Google Cybersecurity Professional',
        meta: 'Google',
        text: 'Certificación profesional en ciberseguridad de Google.',
        href: 'https://www.linkedin.com/in/david-cela-pedraza/overlay/Certifications/1068738651/treasury/?profileId=ACoAAE19_AgBenTyFT-iqeDC0O4zeUdZWc7rXFM',
      },
    ],
    more: {
      title: 'Más Certificaciones',
      text: 'Ver todas mis certificaciones en Credly.',
      href: 'https://www.credly.com/users/david-cela/badges',
    },
  },
  {
    id: 'projects',
    label: 'Proyectos',
    sub: 'Projects',
    color: 'blue',
    sprite: 'card',
    intro: 'Proyectos personales destacados en desarrollo de software.',
    items: [
      {
        title: 'ExpressOps',
        meta: 'Lightweight Flow Orchestrator',
        text: 'Orquestador de flujos ligero que encadena plugins dinámicos mediante flujos YAML, diseñado para automatizar tareas repetitivas de DevOps.',
        tags: ['Go', 'YAML', 'DevOps'],
        logo: './public/assets/images/projects/ExpressOps.png',
      },
      {
        title: 'Fitgenie',
        meta: 'AI Platform + Mobile App',
        text: 'Plataforma de IA + App Móvil. Backend en Golang con despliegue en Kubernetes, pipelines CI/CD y observabilidad con Prometheus y OpenSearch.',
        tags: ['Go', 'Kubernetes', 'AI', 'CI/CD'],
        logo: './public/assets/images/projects/Fitgenie.png',
      },
      {
        title: 'Where is my Kid?',
        meta: 'Real-time GPS System',
        text: 'Sistema de localización en tiempo real que muestra la posición de un dispositivo móvil en un mapa interactivo usando Flutter, Firebase y Leaflet.js.',
        tags: ['Flutter', 'Firebase', 'Leaflet.js'],
        logo: './public/assets/images/projects/WIMK.png',
      },
      {
        title: 'DavidNull Games',
        meta: 'Mini Games Collection',
        text: 'Set de minijuegos para consola programados en Go, incluyendo autenticación y capacidades para jugar en red local (LAN).',
        tags: ['Go', 'Gaming', 'LAN'],
        logo: './public/assets/images/projects/davidnull_games.png',
      },
      {
        title: 'AdOut-4-Dummies',
        meta: 'In Development',
        text: 'Proyecto actualmente en desarrollo. Más información próximamente.',
        tags: ['Dev'],
        logo: '',
      },
    ],
  },
  {
    id: 'skills',
    label: 'Skills',
    sub: 'Habilidades',
    color: 'orange',
    sprite: 'star',
    intro: 'Tecnologías y herramientas que utilizo en mi día a día como Platform Engineer.',
    items: [
      {
        title: 'Cloud Architecture & IaC',
        meta: 'Infraestructura como código',
        text: 'AWS (Well-Architected Framework), Terraform, Helm, Azure, GCP. Diseño de arquitecturas escalables y seguras.',
        tags: ['AWS', 'Terraform', 'Helm', 'Azure', 'GCP'],
      },
      {
        title: 'Containers & Orchestration',
        meta: 'Contenedores y orquestación',
        text: 'Docker, Kubernetes, ECS Fargate, K3s, K9s. Despliegue y gestión de aplicaciones en contenedores.',
        tags: ['Docker', 'Kubernetes', 'ECS', 'K3s', 'K9s'],
      },
      {
        title: 'Programming & Scripting',
        meta: 'Programación y scripting',
        text: 'Python, Go, Bash, PowerShell, HTML, CSS, JavaScript, PHP. Desarrollo de aplicaciones distribuidas y automatización.',
        tags: ['Python', 'Go', 'Bash', 'JavaScript', 'HTML/CSS'],
      },
      {
        title: 'CI/CD & Version Control',
        meta: 'Integración continua y control de versiones',
        text: 'Git, GitHub, GitHub Actions, CodeCommit, Jira, Agile/Scrum, Makefile. Pipelines automatizados y workflows.',
        tags: ['Git', 'GitHub', 'CI/CD', 'Jira', 'Agile'],
      },
      {
        title: 'DevSecOps & Identity',
        meta: 'Seguridad e identidad',
        text: 'Roles IAM, Checkov, Trivy, Vault, Keycloak, OIDC, AWS WAF, KMS. Mentalidad Security First desde el día cero.',
        tags: ['IAM', 'Security', 'Vault', 'WAF', 'KMS'],
      },
      {
        title: 'Observability & Logging',
        meta: 'Observabilidad y logging',
        text: 'Grafana, Prometheus, OpenTelemetry, LGTM Stack, OpenSearch, Filebeat, Logstash. Monitoreo end-to-end.',
        tags: ['Grafana', 'Prometheus', 'OpenTelemetry', 'OpenSearch'],
      },
      {
        title: 'Databases & AI',
        meta: 'Bases de datos e IA',
        text: 'Apache Kafka, PostgreSQL, pgvector, Pinecone. Integración de bases de datos vectoriales para aplicaciones de IA.',
        tags: ['Kafka', 'PostgreSQL', 'pgvector', 'Pinecone', 'AI'],
      },
    ],
  },
  {
    id: 'education',
    label: 'Educación',
    sub: 'Education',
    color: 'purple',
    sprite: 'book',
    intro: 'Formación académica y desarrollo profesional continuo.',
    items: [
      {
        title: 'Técnico Superior ASIR',
        meta: 'IES Bezmiliana - 2023 / 2025',
        text: 'Administración de Sistemas Informáticos en Red. Graduado con nota media de expediente 8,92. Especialización en sistemas, redes y cloud.',
        tags: ['Systems', 'Networks', 'Cloud'],
      },
      {
        title: 'Bachillerato Tecnológico',
        meta: 'IES Margarita Salas - 2021 / 2023',
        text: 'Bachillerato tecnológico con enfoque en matemáticas, física y tecnología. Base sólida para estudios superiores en informática.',
        tags: ['Math', 'Physics', 'Technology'],
      },
    ],
  },
  {
    id: 'languages',
    label: 'Idiomas',
    sub: 'Languages',
    color: 'pink',
    sprite: 'globe',
    intro: 'Idiomas que hablo y niveles de dominio.',
    items: [
      {
        title: 'Español',
        meta: 'Nativo',
        text: 'Idioma materno. Comunicación fluida en cualquier contexto.',
        tags: ['Native', 'Fluent'],
      },
      {
        title: 'Inglés',
        meta: 'Nivel C1 - Fluido',
        text: 'Casi un año de estancia académica en Estados Unidos para perfeccionar el idioma. Capacidad de comunicación profesional y técnica.',
        tags: ['C1', 'Fluent', 'Professional'],
      },
    ],
  },
  {
    id: 'contact',
    label: 'Contacto',
    sub: 'Contact',
    color: 'lime',
    sprite: 'bubble',
    intro: '¿Quieres colaborar o simplemente charlar? Aquí tienes mis canales de contacto.',
    fields: [
      { label: 'Nombre', value: 'David Cela Pedraza' },
      { label: 'Email', value: 'davidcelapedraza@gmail.com' },
      { label: 'Teléfono', value: '+34 681 934 135' },
      { label: 'Ubicación', value: 'Málaga, Spain' },
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/DavidNull' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/david-cela-pedraza/' },
      { label: 'Credly', href: 'https://www.credly.com/users/david-cela' },
    ],
    cv: {
      label: 'CV',
      note: 'Descargar',
      href: './assets/cv.pdf',
      file: 'David_Cela_Pedraza_CV_2026.pdf',
    },
  },
]

export const SECTION_BY_ID = Object.fromEntries(SECTIONS.map((s) => [s.id, s]))
