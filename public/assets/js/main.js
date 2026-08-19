// Main JavaScript for Nintendo DS Portfolio

// Datos del portfolio en español
const portfolioDataES = {
    name: "David Cela Pedraza",
    title: "Platform Engineer",
    cv: `
        <div class="flex items-center justify-center h-full gap-2 p-2">
            <div class="flex-1 flex flex-col items-center justify-center">
                <ds-calendar style="--color: var(--color-ds-slate); --size: 0.8;" hide-border></ds-calendar>
            </div>
            <div class="flex-1 flex flex-col items-center justify-center gap-2">
                <div class="pictochat-window w-full" style="font-size: 0.6rem;">
                    <div class="pictochat-message pictochat-enter-highlight">Now joining..</div>
                    <div class="pictochat-message">
                        <header class="ds-slate-50">header</header>
                        <span>message</span>
                    </div>
                    <div class="pictochat-status pictochat-exit-highlight">Now leaving..</div>
                </div>
                <label style="font-size: 0.6rem;">
                    <span>label</span>
                    <div class="input-wrapper">
                        <div class="input-before"></div>
                        <input type="text" style="font-size: 0.6rem;" />
                        <div class="input-after"></div>
                    </div>
                </label>
            </div>
        </div>
    `,
    skills: `
        <h2 class="ds-font text-xs mb-2">SKILLS</h2>
        <div class="grid grid-cols-2 gap-1" style="font-size: 0.6rem;">
            <div class="ds-font">IaC (90%)</div>
            <div class="ds-font">Cloud (85%)</div>
            <div class="ds-font">Observability (80%)</div>
            <div class="ds-font">Kubernetes (75%)</div>
            <div class="ds-font">Python/Go (85%)</div>
        </div>
    `,
    experience: `
        <h2 class="ds-font text-xs mb-2">EXPERIENCIA</h2>
        <div class="space-y-1" style="font-size: 0.6rem;">
            <div class="border-l-2 border-ds-primary pl-1">
                <h3 class="ds-font font-bold">DevOps Engineer</h3>
                <p class="ds-font">CONVOTIS Iberia • oct. 2025 - actualidad</p>
            </div>
            <div class="border-l-2 border-ds-primary pl-1">
                <h3 class="ds-font font-bold">SRE</h3>
                <p class="ds-font">Freepik • mar. 2025 - jun. 2025</p>
            </div>
        </div>
    `,
    certs: `
        <h2 class="ds-font text-xs mb-2">CERTIFICACIONES</h2>
        <div class="grid grid-cols-2 gap-1" style="font-size: 0.6rem;">
            <div class="ds-font">☁️ AWS Well-Architected</div>
            <div class="ds-font">🔷 Elastic Observability</div>
            <div class="ds-font">🔍 Elasticsearch Engineer</div>
            <div class="ds-font">🔷 Cisco CCNA Enterprise</div>
            <div class="ds-font">🛡️ Google Cybersecurity</div>
            <div class="ds-font">🐹 Go Programming</div>
        </div>
    `,
    projects: `
        <h2 class="ds-font text-xs mb-2">PROYECTOS</h2>
        <div class="border-l-2 border-ds-primary pl-1" style="font-size: 0.6rem;">
            <h3 class="ds-font font-bold">TFG - App Multiplataforma</h3>
            <p class="ds-font">Flutter, Firebase, Vue.js</p>
        </div>
    `,
    education: `
        <h2 class="ds-font text-xs mb-2">EDUCACIÓN</h2>
        <div class="space-y-1" style="font-size: 0.6rem;">
            <div class="border-l-2 border-ds-primary pl-1">
                <h3 class="ds-font font-bold">Grado Superior ASIR</h3>
                <p class="ds-font">Bezmiliana • sept. 2023 – jun. 2025</p>
            </div>
            <div class="border-l-2 border-ds-primary pl-1">
                <h3 class="ds-font font-bold">Bachillerato Tecnológico</h3>
                <p class="ds-font">IES Margarita Salas • 2021 – 2023</p>
            </div>
        </div>
    `,
    contact: `
        <h2 class="ds-font text-xs mb-2">CONTACTO</h2>
        <div class="space-y-1" style="font-size: 0.6rem;">
            <a href="https://linkedin.com/in/tu-perfil" target="_blank" class="ds-font block">📱 LinkedIn</a>
            <a href="https://github.com/tu-usuario" target="_blank" class="ds-font block">💻 GitHub</a>
            <a href="mailto:tu-email@ejemplo.com" class="ds-font block">📧 Email</a>
        </div>
    `
};

let lang = 'es';
let data = portfolioDataES;

// DS Color Themes based on official ds.css colors
const dsThemes = {
    black: {
        primary: '#494949',
        secondary: '#282828',
        accent: '#808080',
        screen: '#c8d8b0',
        screenLight: '#a8c890'
    },
    slate: {
        primary: '#61829a',
        secondary: '#282828',
        accent: '#808080',
        screen: '#c8d8b0',
        screenLight: '#a8c890'
    },
    maroon: {
        primary: '#ba4900',
        secondary: '#282828',
        accent: '#808080',
        screen: '#c8d8b0',
        screenLight: '#a8c890'
    },
    red: {
        primary: '#fb0018',
        secondary: '#282828',
        accent: '#808080',
        screen: '#c8d8b0',
        screenLight: '#a8c890'
    },
    pink: {
        primary: '#fb8afb',
        secondary: '#282828',
        accent: '#808080',
        screen: '#c8d8b0',
        screenLight: '#a8c890'
    },
    orange: {
        primary: '#fb9200',
        secondary: '#282828',
        accent: '#808080',
        screen: '#c8d8b0',
        screenLight: '#a8c890'
    },
    yellow: {
        primary: '#f3e300',
        secondary: '#282828',
        accent: '#808080',
        screen: '#c8d8b0',
        screenLight: '#a8c890'
    },
    neonyellow: {
        primary: '#aafb00',
        secondary: '#282828',
        accent: '#808080',
        screen: '#c8d8b0',
        screenLight: '#a8c890'
    },
    lime: {
        primary: '#00fb00',
        secondary: '#282828',
        accent: '#808080',
        screen: '#c8d8b0',
        screenLight: '#a8c890'
    },
    green: {
        primary: '#00a238',
        secondary: '#282828',
        accent: '#808080',
        screen: '#c8d8b0',
        screenLight: '#a8c890'
    },
    teal: {
        primary: '#49db8a',
        secondary: '#282828',
        accent: '#808080',
        screen: '#c8d8b0',
        screenLight: '#a8c890'
    },
    turquoise: {
        primary: '#30baf3',
        secondary: '#282828',
        accent: '#808080',
        screen: '#c8d8b0',
        screenLight: '#a8c890'
    },
    blue: {
        primary: '#0059f3',
        secondary: '#282828',
        accent: '#808080',
        screen: '#c8d8b0',
        screenLight: '#a8c890'
    },
    navy: {
        primary: '#000092',
        secondary: '#282828',
        accent: '#808080',
        screen: '#c8d8b0',
        screenLight: '#a8c890'
    },
    darkpurple: {
        primary: '#8a00d3',
        secondary: '#282828',
        accent: '#808080',
        screen: '#c8d8b0',
        screenLight: '#a8c890'
    },
    magenta: {
        primary: '#d300eb',
        secondary: '#282828',
        accent: '#808080',
        screen: '#c8d8b0',
        screenLight: '#a8c890'
    },
    fuschia: {
        primary: '#fb0092',
        secondary: '#282828',
        accent: '#808080',
        screen: '#fce7f3',
        screenLight: '#fbcfe8'
    }
};

// Initialize theme
function initTheme() {
    // Fixed black theme for Nintendo console
    const blackTheme = dsThemes.black;

    // Apply theme colors to CSS variables
    document.documentElement.style.setProperty('--ds-primary', blackTheme.primary);
    document.documentElement.style.setProperty('--ds-secondary', blackTheme.secondary);
    document.documentElement.style.setProperty('--ds-accent', blackTheme.accent);
    // Nintendo DS screen colors - white and black
    document.documentElement.style.setProperty('--ds-screen', '#ffffff');
    document.documentElement.style.setProperty('--ds-screen-light', '#f0f0f0');

    // Fixed black console image
    const consoleImage = 'public/assets/ds-consoles/ds/Black_DS.png';

    // Apply console background image
    document.getElementById('ds-console').style.backgroundImage = `url('${consoleImage}')`;

    tailwind.config = {
        theme: {
            extend: {
                colors: {
                    'ds-primary': blackTheme.primary,
                    'ds-secondary': blackTheme.secondary,
                    'ds-accent': blackTheme.accent,
                    'ds-screen': '#ffffff',
                    'ds-screen-light': '#f0f0f0',
                },
                animation: {
                    'blink': 'blink 1s infinite',
                    'pulse-slow': 'pulse 2s infinite',
                    'bounce-in': 'bounceIn 0.5s ease-out',
                    'slide-left': 'slideLeft 0.3s ease-out',
                    'slide-right': 'slideRight 0.3s ease-out',
                    'slide-in-right': 'slideInRight 0.5s ease-out',
                    'wiggle': 'wiggle 0.5s ease-in-out infinite',
                    'glow': 'glow 2s ease-in-out infinite',
                    'float': 'float 3s ease-in-out infinite',
                },
                keyframes: {
                    blink: {
                        '0%, 50%': { opacity: '1' },
                        '51%, 100%': { opacity: '0' },
                    },
                    bounceIn: {
                        '0%': { transform: 'scale(0.3)', opacity: '0' },
                        '50%': { transform: 'scale(1.05)' },
                        '70%': { transform: 'scale(0.9)' },
                        '100%': { transform: 'scale(1)', opacity: '1' },
                    },
                    slideLeft: {
                        '0%': { transform: 'translateX(100%)', opacity: '0' },
                        '100%': { transform: 'translateX(0)', opacity: '1' },
                    },
                    slideRight: {
                        '0%': { transform: 'translateX(-100%)', opacity: '0' },
                        '100%': { transform: 'translateX(0)', opacity: '1' },
                    },
                },
            },
        },
    };
}

// Portfolio data in English
const portfolioDataEN = {
    name: "David Cela Pedraza",
    title: "Platform Engineer",
    cv: `
        <div class="flex items-center justify-center h-full gap-2 p-2">
            <div class="flex-1 flex flex-col items-center justify-center">
                <ds-calendar style="--color: var(--color-ds-slate); --size: 0.8;" hide-border></ds-calendar>
            </div>
            <div class="flex-1 flex flex-col items-center justify-center gap-2">
                <div class="pictochat-window w-full" style="font-size: 0.6rem;">
                    <div class="pictochat-message pictochat-enter-highlight">Now joining..</div>
                    <div class="pictochat-message">
                        <header class="ds-slate-50">header</header>
                        <span>message</span>
                    </div>
                    <div class="pictochat-status pictochat-exit-highlight">Now leaving..</div>
                </div>
                <label style="font-size: 0.6rem;">
                    <span>label</span>
                    <div class="input-wrapper">
                        <div class="input-before"></div>
                        <input type="text" style="font-size: 0.6rem;" />
                        <div class="input-after"></div>
                    </div>
                </label>
            </div>
        </div>
    `,
    skills: `
        <h2 class="ds-font text-xs mb-2">SKILLS</h2>
        <div class="grid grid-cols-2 gap-1" style="font-size: 0.6rem;">
            <div class="ds-font">IaC (90%)</div>
            <div class="ds-font">Cloud (85%)</div>
            <div class="ds-font">Observability (80%)</div>
            <div class="ds-font">Kubernetes (75%)</div>
            <div class="ds-font">Python/Go (85%)</div>
        </div>
    `,
    experience: `
        <h2 class="ds-font text-xs mb-2">EXPERIENCE</h2>
        <div class="space-y-1" style="font-size: 0.6rem;">
            <div class="border-l-2 border-ds-primary pl-1">
                <h3 class="ds-font font-bold">DevOps Engineer</h3>
                <p class="ds-font">CONVOTIS Iberia • Oct. 2025 - Present</p>
            </div>
            <div class="border-l-2 border-ds-primary pl-1">
                <h3 class="ds-font font-bold">SRE</h3>
                <p class="ds-font">Freepik • Mar. 2025 - Jun. 2025</p>
            </div>
        </div>
    `,
    certs: `
        <h2 class="ds-font text-xs mb-2">CERTIFICATIONS</h2>
        <div class="grid grid-cols-2 gap-1" style="font-size: 0.6rem;">
            <div class="ds-font">☁️ AWS Well-Architected</div>
            <div class="ds-font">🔷 Elastic Observability</div>
            <div class="ds-font">🔍 Elasticsearch Engineer</div>
            <div class="ds-font">🔷 Cisco CCNA Enterprise</div>
            <div class="ds-font">🛡️ Google Cybersecurity</div>
            <div class="ds-font">🐹 Go Programming</div>
        </div>
    `,
    projects: `
        <h2 class="ds-font text-xs mb-2">PROJECTS</h2>
        <div class="border-l-2 border-ds-primary pl-1" style="font-size: 0.6rem;">
            <h3 class="ds-font font-bold">TFG - Multiplatform App</h3>
            <p class="ds-font">Flutter, Firebase, Vue.js</p>
        </div>
    `,
    education: `
        <h2 class="ds-font text-xs mb-2">EDUCATION</h2>
        <div class="space-y-1" style="font-size: 0.6rem;">
            <div class="border-l-2 border-ds-primary pl-1">
                <h3 class="ds-font font-bold">Higher Degree ASIR</h3>
                <p class="ds-font">Bezmiliana • Sept. 2023 – Jun. 2025</p>
            </div>
            <div class="border-l-2 border-ds-primary pl-1">
                <h3 class="ds-font font-bold">Technological High School</h3>
                <p class="ds-font">IES Margarita Salas • 2021 – 2023</p>
            </div>
        </div>
    `,
    contact: `
        <h2 class="ds-font text-xs mb-2">CONTACT</h2>
        <div class="space-y-1" style="font-size: 0.6rem;">
            <a href="https://linkedin.com/in/tu-perfil" target="_blank" class="ds-font block">📱 LinkedIn</a>
            <a href="https://github.com/tu-usuario" target="_blank" class="ds-font block">💻 GitHub</a>
            <a href="mailto:tu-email@ejemplo.com" class="ds-font block">📧 Email</a>
        </div>
    `
};

// Language switching
function initLanguageButtons() {
    const esBtn = document.getElementById('lang-es');
    const enBtn = document.getElementById('lang-en');

    esBtn.onclick = () => {
        lang = 'es';
        data = portfolioDataES;
        esBtn.style.backgroundColor = '#ff0000';
        enBtn.style.backgroundColor = '#333333';
    };

    enBtn.onclick = () => {
        lang = 'en';
        data = portfolioDataEN;
        enBtn.style.backgroundColor = '#0000ff';
        esBtn.style.backgroundColor = '#333333';
    };

    // Initial state - ES selected
    esBtn.style.backgroundColor = '#ff0000';
    enBtn.style.backgroundColor = '#333333';
}

// Console control functions
function start() {
    const splash = document.getElementById('splash-content');
    const main = document.getElementById('main-content');
    const grid = document.getElementById('cartridge-grid');
    const hud = document.getElementById('hud');
    const loadingState = document.getElementById('loading-state');
    const bottomScreenBg = document.getElementById('bottom-screen-bg');
    const topScreenBg = document.getElementById('top-screen-bg');
    const content = document.getElementById('content-area');
    const carts = document.querySelectorAll('.cartridge-btn');
    const colorSelector = document.getElementById('color-selector');

    splash.classList.add('hidden');
    main.classList.remove('hidden');
    grid.classList.remove('hidden');
    hud.classList.remove('hidden');
    loadingState.classList.add('hidden');
    bottomScreenBg.classList.remove('ds-grid');
    bottomScreenBg.classList.add('ds-grid-lg');
    topScreenBg.classList.add('ds-grid');
    content.innerHTML = data.cv;
    carts[0].classList.add('active');
    
    // Hide color selector when console is active
    colorSelector.classList.add('hidden');
    
    // Initialize clock widget
    initClockWidget();
}

function powerOff() {
    const splash = document.getElementById('splash-content');
    const main = document.getElementById('main-content');
    const grid = document.getElementById('cartridge-grid');
    const hud = document.getElementById('hud');
    const loadingState = document.getElementById('loading-state');
    const bottomScreenBg = document.getElementById('bottom-screen-bg');
    const carts = document.querySelectorAll('.cartridge-btn');
    const colorSelector = document.getElementById('color-selector');

    splash.classList.remove('hidden');
    main.classList.add('hidden');
    grid.classList.add('hidden');
    hud.classList.add('hidden');
    loadingState.classList.remove('hidden');
    bottomScreenBg.classList.remove('ds-grid-lg');
    bottomScreenBg.classList.add('ds-grid');
    carts.forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show color selector again
    colorSelector.classList.remove('hidden');
}

// Clock widget initialization - no longer needed as we use ds-clock widget
function initClockWidget() {
    // ds-clock widget handles itself automatically
}

// Cartridge buttons
function initCartridgeButtons() {
    const carts = document.querySelectorAll('.cartridge-btn');
    const content = document.getElementById('content-area');
    const topScreenBg = document.getElementById('top-screen-bg');

    carts.forEach(btn => {
        btn.onclick = function() {
            carts.forEach(b => {
                b.classList.remove('active');
            });
            this.classList.add('active');
            const section = this.dataset.section;
            content.style.opacity = '0';
            content.style.transform = 'translateX(-20px)';
            setTimeout(() => {
                content.innerHTML = data[section];
                content.style.transition = 'all 0.3s ease-out';
                content.style.opacity = '1';
                content.style.transform = 'translateX(0)';
                
                // Add ds-grid to top screen only for CV section
                if (section === 'cv') {
                    topScreenBg.classList.add('ds-grid');
                } else {
                    topScreenBg.classList.remove('ds-grid');
                }
                
                // Reinitialize clock if CV section
                if (section === 'cv') {
                    initClockWidget();
                }
            }, 200);
        };
        btn.ontouchstart = (e) => {
            e.preventDefault();
            btn.onclick();
        };
    });
}

// Time and battery
function initTimeAndBattery() {
    const time = document.getElementById('time');
    const battery = document.getElementById('battery-level');

    setInterval(() => {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        time.textContent = `${hours}:${minutes}`;
    }, 1000);

    // Simulate battery level
    let batteryLevel = 100;
    setInterval(() => {
        batteryLevel = Math.max(0, batteryLevel - 0.1);
        battery.textContent = `${Math.round(batteryLevel)}%`;
    }, 60000);
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initLanguageButtons();
    initCartridgeButtons();
    initTimeAndBattery();

    const startBtn = document.getElementById('start-btn');
    const powerBtn = document.getElementById('power-btn');

    startBtn.onclick = start;
    startBtn.ontouchstart = (e) => {
        e.preventDefault();
        start();
    };

    powerBtn.onclick = powerOff;
    powerBtn.ontouchstart = (e) => {
        e.preventDefault();
        powerOff();
    };
});
