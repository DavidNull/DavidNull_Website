<template>
  <div 
    class="ds-console w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden relative"
    :style="{ 
      backgroundColor: themeColors.primary,
      boxShadow: `0 20px 60px ${themeColors.primary}80, inset 0 2px 4px rgba(255,255,255,0.1)`
    }"
  >
    <!-- Top Screen -->
    <div class="h-[40vh] p-6 relative" :style="{ backgroundColor: themeColors.secondary }">
      <div 
        class="ds-screen h-full rounded-xl p-4 overflow-y-auto scanlines relative border-4"
        :style="{ 
          background: `linear-gradient(135deg, ${themeColors.screen} 0%, ${themeColors.screenLight} 100%)`,
          borderColor: themeColors.primary,
          boxShadow: `inset 0 4px 8px rgba(0,0,0,0.3), 0 2px 4px rgba(255,255,255,0.1)`
        }"
      >
        <!-- Splash State -->
        <div v-if="!isStarted" class="h-full flex flex-col items-center justify-center text-ds-black">
          <h1 class="ds-font text-lg md:text-2xl text-center mb-4 game-text animate-float">
            David Cela Pedraza
          </h1>
          <p class="ds-font text-xs md:text-sm text-center mb-8 game-text">Platform Engineer</p>
          
          <div class="flex gap-4 mb-8">
            <button 
              @click="$emit('language-change', 'es')"
              class="ds-font text-xs px-4 py-2 rounded hover:opacity-80 transition-opacity border-2 relative overflow-hidden"
              :class="lang === 'es' ? 'bg-ds-accent' : 'bg-ds-primary'"
              :style="{ 
                color: themeColors.screen,
                borderColor: themeColors.accent 
              }"
            >
              <div class="absolute inset-0 opacity-30" style="background: linear-gradient(to bottom, #c60b1e 33%, #ffc400 33%, #ffc400 66%, #c60b1e 66%);"></div>
              <span class="relative z-10">ES</span>
            </button>
            <button 
              @click="$emit('language-change', 'en')"
              class="ds-font text-xs px-4 py-2 rounded hover:opacity-80 transition-opacity border-2 relative overflow-hidden"
              :class="lang === 'en' ? 'bg-ds-accent' : 'bg-ds-primary'"
              :style="{ 
                color: themeColors.screen,
                borderColor: themeColors.accent 
              }"
            >
              <div class="absolute inset-0 opacity-30" style="background: linear-gradient(to bottom, #b22234 15%, #ffffff 15%, #ffffff 23%, #b22234 23%, #b22234 38%, #ffffff 38%, #ffffff 46%, #b22234 46%, #b22234 61%, #ffffff 61%, #ffffff 69%, #b22234 69%);"></div>
              <span class="relative z-10">EN</span>
            </button>
          </div>
          
          <button 
            @click="startGame"
            class="ds-font text-xs md:text-sm px-8 py-4 rounded-lg hover:scale-105 transition-all duration-200 animate-blink border-4 game-text"
            :style="{ 
              backgroundColor: themeColors.primary,
              color: themeColors.screen,
              borderColor: themeColors.accent,
              boxShadow: `0 0 20px ${themeColors.accent}50`
            }"
          >
            START / TOUCH TO START
          </button>
        </div>
        
        <!-- Main Content -->
        <div v-else class="h-full">
          <div 
            class="content-area text-ds-black transition-all duration-300"
            :style="{ opacity: contentOpacity, transform: `translateX(${contentTranslate}px)` }"
            v-html="currentContent"
          ></div>
        </div>
      </div>
      
      <!-- Speaker -->
      <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1">
        <div class="w-1 h-4 rounded" :style="{ backgroundColor: themeColors.primary }"></div>
        <div class="w-1 h-4 rounded" :style="{ backgroundColor: themeColors.primary }"></div>
        <div class="w-1 h-4 rounded" :style="{ backgroundColor: themeColors.primary }"></div>
        <div class="w-1 h-4 rounded" :style="{ backgroundColor: themeColors.primary }"></div>
        <div class="w-1 h-4 rounded" :style="{ backgroundColor: themeColors.primary }"></div>
        <div class="w-1 h-4 rounded" :style="{ backgroundColor: themeColors.primary }"></div>
        <div class="w-1 h-4 rounded" :style="{ backgroundColor: themeColors.primary }"></div>
      </div>
    </div>
    
    <!-- Hinge -->
    <div class="h-6 relative" :style="{ backgroundColor: themeColors.primary }">
      <div class="absolute inset-0 flex justify-center items-center gap-2">
        <div class="w-2 h-2 rounded-full" :style="{ backgroundColor: themeColors.secondary }"></div>
        <div class="w-2 h-2 rounded-full" :style="{ backgroundColor: themeColors.secondary }"></div>
      </div>
    </div>
    
    <!-- Bottom Screen -->
    <div class="h-[50vh] p-6 relative" :style="{ backgroundColor: themeColors.secondary }">
      <div 
        class="ds-screen h-full rounded-xl p-4 relative scanlines border-4"
        :style="{ 
          background: `linear-gradient(135deg, ${themeColors.screen} 0%, ${themeColors.screenLight} 100%)`,
          borderColor: themeColors.primary,
          boxShadow: `inset 0 4px 8px rgba(0,0,0,0.3), 0 2px 4px rgba(255,255,255,0.1)`
        }"
      >
        <!-- Cartridge Grid -->
        <div v-if="isStarted" class="h-full">
          <div class="grid grid-cols-2 md:grid-cols-3 gap-4 h-full pb-16">
            <button 
              v-for="cartridge in cartridges"
              :key="cartridge.id"
              @click="selectCartridge(cartridge.id)"
              class="cartridge-btn ds-font text-xs p-4 rounded-lg border-4 transition-all duration-200 relative overflow-hidden"
              :class="{ 
                'active': activeCartridge === cartridge.id,
                'bg-ds-accent': activeCartridge === cartridge.id,
                'bg-ds-primary': activeCartridge !== cartridge.id
              }"
              :style="{ 
                color: themeColors.screen,
                borderColor: themeColors.accent,
                boxShadow: activeCartridge === cartridge.id ? `0 0 15px ${themeColors.accent}60` : '0 4px 6px rgba(0,0,0,0.3)'
              }"
            >
              <div class="absolute inset-0 opacity-10" v-if="activeCartridge === cartridge.id" 
                   :style="{ background: `linear-gradient(45deg, ${themeColors.accent} 25%, transparent 25%, transparent 50%, ${themeColors.accent} 50%, ${themeColors.accent} 75%, transparent 75%)`, backgroundSize: '10px 10px' }">
              </div>
              <span class="relative z-10">{{ cartridge.label }}</span>
            </button>
          </div>
        </div>
        
        <!-- HUD -->
        <div 
          v-if="isStarted"
          class="absolute bottom-0 left-0 right-0 p-3 flex justify-between items-center border-t-4 rounded-b-lg"
          :style="{ 
            backgroundColor: `${themeColors.primary}95`,
            borderColor: themeColors.primary,
            boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.2)'
          }"
        >
          <div class="flex items-center gap-3">
            <span class="ds-font text-xs" :style="{ color: themeColors.screen }">
              {{ currentTime }}
            </span>
          </div>
          <div class="flex items-center gap-3">
            <!-- Battery Icon -->
            <div class="flex items-center gap-1">
              <div 
                class="w-8 h-4 border-2 relative rounded"
                :style="{ borderColor: themeColors.screen }"
              >
                <div 
                  class="h-full bg-green-500 rounded"
                  :style="{ width: `${batteryLevel}%` }"
                ></div>
              </div>
            </div>
            <!-- Pet -->
            <div 
              @click="petInteraction"
              class="w-10 h-10 bg-pink-400 rounded-full cursor-pointer hover:scale-110 transition-transform border-2 flex items-center justify-center"
              :style="{ borderColor: themeColors.screen, boxShadow: '0 2px 4px rgba(0,0,0,0.3)' }"
              title="¡Guau! ¡Buen código!"
            >
              <span class="ds-font text-sm">🐕</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Power Button -->
      <button 
        @click="powerOff"
        class="absolute bottom-4 right-4 w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-transform border-4"
        :style="{ 
          backgroundColor: themeColors.primary,
          borderColor: themeColors.accent,
          boxShadow: `0 0 15px ${themeColors.accent}30`
        }"
        title="POWER OFF"
      >
        <span class="ds-font text-lg" :style="{ color: themeColors.screen }">⏻</span>
      </button>
    </div>
  </div>
  
  <!-- DavidNull Watermark -->
  <div class="fixed bottom-4 right-4 z-50">
    <div 
      class="ds-font text-xs px-3 py-2 rounded opacity-50 hover:opacity-100 transition-opacity"
      :style="{ 
        color: '#ffffff',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid rgba(255, 255, 255, 0.2)'
      }"
    >
      DavidNull
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  theme: String,
  lang: String
})

const emit = defineEmits(['language-change'])

const isStarted = ref(false)
const activeCartridge = ref('cv')
const contentOpacity = ref(1)
const contentTranslate = ref(0)
const currentTime = ref('')
const batteryLevel = ref(75)

// Portfolio data inline for now to avoid import issues
const portfolioDataES = {
    name: "David Cela Pedraza",
    title: "Platform Engineer | DevOps & Cloud Engineer | DevSecOps",
    cv: `
        <h2 class="ds-font text-sm mb-4">CV / PERFIL</h2>
        <p class="ds-font text-xs mb-4 leading-relaxed">
            Platform Engineer especializado en automatización, infraestructura como código y arquitecturas cloud.
        </p>
        <p class="ds-font text-xs mb-4 leading-relaxed">
            Enfoque en IaC, Kubernetes y observabilidad para construir sistemas escalables y resilientes bajo principios de Security First y AWS Well-Architected Framework.
        </p>
    `,
    skills: `
        <h2 class="ds-font text-sm mb-4">SKILLS</h2>
        <div class="space-y-3">
            <div>
                <div class="flex justify-between ds-font text-xs mb-1">
                    <span>IaC</span>
                    <span>90%</span>
                </div>
                <div class="h-2 bg-ds-primary rounded">
                    <div class="h-full bg-green-600 rounded" style="width: 90%"></div>
                </div>
            </div>
            <div>
                <div class="flex justify-between ds-font text-xs mb-1">
                    <span>Cloud (AWS/Azure)</span>
                    <span>85%</span>
                </div>
                <div class="h-2 bg-ds-primary rounded">
                    <div class="h-full bg-blue-600 rounded" style="width: 85%"></div>
                </div>
            </div>
        </div>
    `,
    experience: `
        <h2 class="ds-font text-sm mb-4">EXPERIENCIA</h2>
        <div class="space-y-4">
            <div class="border-l-2 border-ds-primary pl-3">
                <h3 class="ds-font text-xs font-bold">DevOps Engineer</h3>
                <p class="ds-font text-xs text-gray-700">CONVOTIS Iberia</p>
                <p class="ds-font text-xs text-gray-600">oct. 2025 - actualidad</p>
            </div>
        </div>
    `,
    certs: `
        <h2 class="ds-font text-sm mb-4">CERTIFICACIONES</h2>
        <div class="grid grid-cols-2 gap-3">
            <div class="bg-yellow-200 p-3 rounded border-2 border-yellow-400">
                <div class="ds-font text-xs text-center">☁️ AWS</div>
                <p class="ds-font text-xs text-center mt-1">Well-Architected</p>
            </div>
            <div class="bg-blue-200 p-3 rounded border-2 border-blue-400">
                <div class="ds-font text-xs text-center">🔷 Elastic</div>
                <p class="ds-font text-xs text-center mt-1">Observability</p>
            </div>
        </div>
    `,
    projects: `
        <h2 class="ds-font text-sm mb-4">PROYECTOS</h2>
        <div class="space-y-4">
            <div class="bg-white/50 p-3 rounded border-2 border-ds-primary">
                <h3 class="ds-font text-xs font-bold">TFG - App Multiplataforma</h3>
                <p class="ds-font text-xs mt-1">App de seguimiento móvil</p>
            </div>
        </div>
    `,
    education: `
        <h2 class="ds-font text-sm mb-4">EDUCACIÓN</h2>
        <div class="space-y-4">
            <div class="border-l-2 border-ds-primary pl-3">
                <h3 class="ds-font text-xs font-bold">Grado Superior ASIR</h3>
                <p class="ds-font text-xs text-gray-700">Bezmiliana</p>
            </div>
        </div>
    `,
    contact: `
        <h2 class="ds-font text-sm mb-4">CONTACTO</h2>
        <div class="space-y-3">
            <a href="https://linkedin.com" target="_blank" class="block bg-blue-600 text-white ds-font text-xs p-3 rounded">
                📱 LinkedIn
            </a>
            <a href="https://github.com" target="_blank" class="block bg-gray-700 text-white ds-font text-xs p-3 rounded">
                💻 GitHub
            </a>
        </div>
    `
}

const portfolioDataEN = {
    name: "David Cela Pedraza",
    title: "Platform Engineer | DevOps & Cloud Engineer | DevSecOps",
    cv: `
        <h2 class="ds-font text-sm mb-4">CV / PROFILE</h2>
        <p class="ds-font text-xs mb-4 leading-relaxed">
            Platform Engineer specialized in automation, infrastructure as code, and cloud architectures.
        </p>
    `,
    skills: `
        <h2 class="ds-font text-sm mb-4">SKILLS</h2>
        <div class="space-y-3">
            <div>
                <div class="flex justify-between ds-font text-xs mb-1">
                    <span>IaC</span>
                    <span>90%</span>
                </div>
                <div class="h-2 bg-ds-primary rounded">
                    <div class="h-full bg-green-600 rounded" style="width: 90%"></div>
                </div>
            </div>
        </div>
    `,
    experience: `
        <h2 class="ds-font text-sm mb-4">EXPERIENCE</h2>
        <div class="space-y-4">
            <div class="border-l-2 border-ds-primary pl-3">
                <h3 class="ds-font text-xs font-bold">DevOps Engineer</h3>
                <p class="ds-font text-xs text-gray-700">CONVOTIS Iberia</p>
            </div>
        </div>
    `,
    certs: `
        <h2 class="ds-font text-sm mb-4">CERTIFICATIONS</h2>
        <div class="grid grid-cols-2 gap-3">
            <div class="bg-yellow-200 p-3 rounded border-2 border-yellow-400">
                <div class="ds-font text-xs text-center">☁️ AWS</div>
            </div>
        </div>
    `,
    projects: `
        <h2 class="ds-font text-sm mb-4">PROJECTS</h2>
        <div class="space-y-4">
            <div class="bg-white/50 p-3 rounded border-2 border-ds-primary">
                <h3 class="ds-font text-xs font-bold">TFG - Multiplatform App</h3>
            </div>
        </div>
    `,
    education: `
        <h2 class="ds-font text-sm mb-4">EDUCATION</h2>
        <div class="space-y-4">
            <div class="border-l-2 border-ds-primary pl-3">
                <h3 class="ds-font text-xs font-bold">Higher Degree ASIR</h3>
            </div>
        </div>
    `,
    contact: `
        <h2 class="ds-font text-sm mb-4">CONTACT</h2>
        <div class="space-y-3">
            <a href="https://linkedin.com" target="_blank" class="block bg-blue-600 text-white ds-font text-xs p-3 rounded">
                📱 LinkedIn
            </a>
        </div>
    `
}

const cartridges = [
  { id: 'cv', label: 'CV' },
  { id: 'skills', label: 'SKILLS' },
  { id: 'experience', label: 'EXP' },
  { id: 'certs', label: 'CERTS' },
  { id: 'projects', label: 'PROJ' },
  { id: 'education', label: 'EDU' },
  { id: 'contact', label: 'CONTACT' }
]

const themeColors = computed(() => {
  const themes = {
    black: { primary: '#1a1a1a', secondary: '#2d2d2d', accent: '#4a4a4a', screen: '#c8d8b0', screenLight: '#a8c890' },
    blueRoyal: { primary: '#1e3a5f', secondary: '#2c5282', accent: '#4299e1', screen: '#bee3f8', screenLight: '#90cdf4' },
    blueLight: { primary: '#2b6cb0', secondary: '#4299e1', accent: '#63b3ed', screen: '#e3f2fd', screenLight: '#bbdefb' },
    greenLime: { primary: '#276749', secondary: '#38a169', accent: '#68d391', screen: '#c6f6d5', screenLight: '#9ae6b4' },
    pinkLight: { primary: '#97266d', secondary: '#b83280', accent: '#d53f8c', screen: '#fed7e2', screenLight: '#fbb6ce' },
    redCandy: { primary: '#c53030', secondary: '#e53e3e', accent: '#fc8181', screen: '#fed7d7', screenLight: '#feb2b2' },
    white: { primary: '#f7fafc', secondary: '#e2e8f0', accent: '#cbd5e0', screen: '#a0aec0', screenLight: '#718096' }
  }
  return themes[props.theme] || themes.black
})

const portfolioData = computed(() => {
  return props.lang === 'es' ? portfolioDataES : portfolioDataEN
})

const currentContent = computed(() => {
  if (!portfolioData.value) return '<p class="ds-font text-xs">Loading...</p>'
  return portfolioData.value[activeCartridge.value] || portfolioData.value.cv
})

const startGame = () => {
  isStarted.value = true
  activeCartridge.value = 'cv'
}

const powerOff = () => {
  isStarted.value = false
  activeCartridge.value = 'cv'
  contentOpacity.value = 1
  contentTranslate.value = 0
}

const selectCartridge = (cartridgeId) => {
  // Animation transition
  contentOpacity.value = 0
  contentTranslate.value = -20
  
  setTimeout(() => {
    activeCartridge.value = cartridgeId
    contentOpacity.value = 1
    contentTranslate.value = 0
  }, 200)
}

const updateTime = () => {
  const now = new Date()
  currentTime.value = now.toLocaleTimeString('es-ES', { 
    hour: '2-digit', 
    minute: '2-digit' 
  })
}

const petInteraction = () => {
  const messages = [
    '¡Guau! ¡Buen código!',
    '¡Woof! ¡Deploy exitoso!',
    '¡Grrr! ¡Bug detectado!',
    '¡Au au! ¡CI/CD passing!'
  ]
  const randomMessage = messages[Math.floor(Math.random() * messages.length)]
  alert(randomMessage)
}

let timeInterval

onMounted(() => {
  updateTime()
  timeInterval = setInterval(updateTime, 1000)
  
  // Battery level
  if (navigator.getBattery) {
    navigator.getBattery().then(battery => {
      const updateBattery = () => {
        batteryLevel.value = Math.round(battery.level * 100)
      }
      updateBattery()
      battery.addEventListener('levelchange', updateBattery)
    })
  }
})

onUnmounted(() => {
  if (timeInterval) {
    clearInterval(timeInterval)
  }
})
</script>

<style scoped>
.ds-font {
  font-family: 'DS BIOS', monospace;
}

.game-text {
  text-shadow: 
    2px 2px 0px rgba(0,0,0,0.8),
    -1px -1px 0px rgba(255,255,255,0.3);
}

.scanlines::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: repeating-linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0.1) 1px,
    transparent 1px,
    transparent 2px
  );
  pointer-events: none;
  z-index: 10;
}

.cartridge-btn {
  transition: all 0.2s ease;
}

.cartridge-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.3);
}

.cartridge-btn:active {
  transform: translateY(0);
}

.cartridge-btn.active {
  animation: wiggle 0.5s ease-in-out infinite;
}

@keyframes wiggle {
  0%, 100% { transform: rotate(-3deg); }
  50% { transform: rotate(3deg); }
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.animate-blink {
  animation: blink 1s infinite;
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animate-pulse-slow {
  animation: pulse 2s infinite;
}
</style>
