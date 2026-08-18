// Main JavaScript for Nintendo DS Portfolio

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
                    slideInRight: {
                        '0%': { transform: 'translateX(100%)', opacity: '0' },
                        '100%': { transform: 'translateX(0)', opacity: '1' },
                    },
                    wiggle: {
                        '0%, 100%': { transform: 'rotate(-3deg)' },
                        '50%': { transform: 'rotate(3deg)' },
                    },
                    glow: {
                        '0%, 100%': { boxShadow: '0 0 5px rgba(255, 255, 255, 0.3)' },
                        '50%': { boxShadow: '0 0 20px rgba(255, 255, 255, 0.6)' },
                    },
                    float: {
                        '0%, 100%': { transform: 'translateY(0)' },
                        '50%': { transform: 'translateY(-10px)' },
                    },
                },
            },
        },
    }
}

// Color dropdown toggle
function toggleColorDropdown() {
    const dropdown = document.getElementById('color-dropdown');
    dropdown.classList.toggle('expanded');
}

// Color selector functionality
function initColorSelector() {
    const colorBtns = document.querySelectorAll('.color-btn');
    
    colorBtns.forEach(btn => {
        btn.onclick = function() {
            const color = this.dataset.color;
            const image = this.dataset.image;
            const theme = dsThemes[color];
            
            if (theme) {
                document.documentElement.style.setProperty('--ds-primary', theme.primary);
                document.documentElement.style.setProperty('--ds-secondary', theme.secondary);
                document.documentElement.style.setProperty('--ds-accent', theme.accent);
            }
            
            document.getElementById('ds-console').style.backgroundImage = `url('${image}')`;
        };
    });
}

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
    initColorSelector();
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
