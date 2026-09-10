export const PROFILE = {
  name: 'David',
  role: 'Platform Engineer',
  place: 'Developer (freetime)',
  tagline: 'Did you know? You can click the FULL button to get a fullscreen view.',
  stats: [
    { label: 'Exp', value: '01' },
    { label: 'Certs', value: '+20' },
    { label: 'Repos', value: '06' },
  ],
}

export const BOOT_LINES = [
  '[PATCH_LOG]: Check out my new project! ',
  '[NOTE]: More stuff coming soon... :D',
]

export const SECTIONS = [
  {
    id: 'profile',
    label: 'Profile',
    sub: '',
    color: 'turquoise',
    sprite: 'profile',
    intro: 'A bit more about who I am and my technical approach.',
    items: [
      {
        title: 'About me',
        meta: 'DevOps & Platform Engineer',
        text: 'Technology enthusiast, specialized in designing, automating, and maintaining multicloud infrastructures. I focus on building solid and scalable, event-driven environments, and optimizing processes for development teams.',
      },
      {
        title: 'Technical Stack',
        meta: 'Cloud, Containers & Observability',
        text: 'I usually work in AWS, Azure, and GCP environments. My daily ecosystem includes management and orchestration with Kubernetes, Docker, Terraform, and Helm, CI/CD workflows with GitHub Actions, and monitoring using OpenTelemetry, Prometheus, and Grafana.',
      },
      {
        title: 'Education',
        meta: 'Network Computer Systems Administration',
        text: 'Higher Technician (ASIR), with technological baccalaureate. Click on the medal to see my certifications!',
      },
    ],
  },
  {
    id: 'experience',
    label: 'Experience',
    sub: '',
    color: 'maroon',
    sprite: 'train',
    intro: 'My professional journey.',
    items: [
      {
        title: 'CONVOTIS Iberia',
        meta: 'Platform Engineer - 10/2025 - Now',
        text: 'Design and maintenance of multiple solid multicloud infrastructures for enterprise-level event-driven platforms.',
        tags: ['AWS', 'CI/CD', 'Kubernetes', 'Terraform'],
      },
      {
        title: 'Freepik (Now Magnific)',
        meta: 'Internship - 03/2025 - 06/2025',
        text: 'Collaboration in the development of internal tools and optimization of design processes (ExpressOps).',
        tags: ['ExpressOps', 'PlatformEngineering', 'EventDrivenArchitecture'],
      },
      {
        title: 'Occasional Jobs & Collaborations',
        meta: 'Consulting & Technical Support',
        text: 'Collaboration in the deployment of lightweight infrastructures, process automation, and resolution of technical needs for small projects and occasional jobs.',
        tags: ['Consulting', 'DevOps', 'Cloud', 'Automation'],
      },
    ],
  },
  {
    id: 'certifications',
    label: 'Certifications',
    sub: '',
    color: 'yellow',
    sprite: 'medal',
    intro: 'Official certifications in cloud infrastructure, automation, observability, and networking.',
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
      title: 'Many More',
      text: 'Take a look at my Credly profile.',
      href: 'https://www.credly.com/users/david-cela',
    },
  },
  {
    id: 'projects',
    label: 'Projects',
    sub: '',
    color: 'blue',
    sprite: 'card',
    intro: 'Some of my personal and professional projects.',
    items: [
      {
        title: 'NullNode',
        meta: 'A self-hosted AI platform for running and operating local LLMs',
        text: 'Local and private enterprise LLMOps platform on K3s. Implements local LLM inference with dynamic scaling (KEDA), gateway with budgets and cost control (LiteLLM), prompt cache (Redis), dedicated GenAI observability, and 100% automated deployment via GitOps with ArgoCD and Terraform.',
        tags: ['K3s', 'ArgoCD', 'KEDA', 'Redis', 'Grafana'],
        logo: 'assets/logos/nullnode.png',
        featured: true,
      },
      {
        title: 'ExpressOps',
        meta: 'Lightweight flow orchestrator to automate repetitive _Ops tasks.',
        text: 'Workflow orchestration engine for infrastructure/Kubernetes automation and monitoring, based on the Go language.',
        tags: ['Go', 'K8s'],
        logo: 'assets/logos/ExpressOps.png',
      },
      {
        title: 'Fitgenie',
        meta: 'An open-source AI to help you choose your outfit of the day',
        text: 'Personal wardrobe management and outfit recommendation application based on the occasion, featuring a mobile interface in Flutter and a backend API in Go with PostgreSQL and S3.',
        tags: ['Flutter', 'Go', 'PostgreSQL', 'S3'],
        logo: 'assets/logos/Fitgenie.png',
      },
      {
        title: 'Where is my kid?',
        meta: 'My Final Degree Project',
        text: 'Real-time child GPS tracking system composed of a mobile application in Flutter for background coordinate transmission and a web control panel in Vue.js 3 backed by Firebase.',
        tags: ['Flutter', 'Vue.js', 'Firebase'],
        logo: 'assets/logos/WIMK.png',
      },
      {
        title: 'Currently working on...',
        meta: 'More to come',
        text: 'AdOut-4-Dummies and more stuff coming!!',
        tags: [],
        logo: 'assets/obscurevideogames.gif',
      },
    ],
  },
  {
    id: 'skills',
    label: 'Extra skills',
    sub: '& recommendations',
    color: 'orange',
    sprite: 'star',
    intro: 'Might be of interest',
    items: [
      {
        title: 'C1 English level',
        meta: 'Fluent',
        text: 'I spent a year in the USA.',
        tags: ['English'],
      },
      {
        title: 'Recommendation',
        meta: 'Julio Gómez Rivera - Solution Architect',
        text: 'Click here to read it!',
        tags: ['Linkedin'],
        href: 'https://www.linkedin.com/feed/update/urn:li:activity:7472228419360034816/',
      },
    ],
  },
  {
    id: 'contact',
    label: 'Contact',
    sub: '',
    color: 'lime',
    sprite: 'bubble',
    intro: 'My networks and contact methods.',
    fields: [
      { label: 'Name', value: 'David Cela Pedraza' },
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
