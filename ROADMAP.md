# DavidNull DS Portfolio - Roadmap

## 🎯 Objetivo
Crear un portfolio profesional con estética Nintendo DS usando Vue.js 3, con navegación por cartuchos, efectos retro y experiencia auténtica de consola.

---

## 📋 Assets Necesarios (Usuario)

### 🎨 Imágenes y Gráficos
- [ ] **Tipografía Nintendo DS BIOS**
  - Fuente oficial o recreación fiel del BIOS de Nintendo DS
  - Formatos: .woff2, .woff, .ttf
  - Ubicación: `src/assets/fonts/`

- [ ] **Botones de Cartuchos DS**
  - Imágenes de botones de juegos reales de DS
  - Estilo: Botones físicos de cartuchos con textura
  - Formatos: .png, .svg (para escalabilidad)
  - Ubicación: `src/assets/images/cartridges/`

- [ ] **Iconos de Sistema DS**
  - Icono de batería (diferentes niveles)
  - Icono de WiFi/signal
  - Icono de volumen
  - Icono de configuración
  - Formatos: .svg
  - Ubicación: `src/assets/images/icons/`

- [ ] **Mascota Nintendogs**
  - Sprite pixel art de perro interactivo
  - Estados: normal, feliz, triste, asustado
  - Formatos: .png (con transparencia)
  - Ubicación: `src/assets/images/pet/`

- [ ] **Texturas de Consola**
  - Textura de plástico DS realista
  - Efectos de desgaste/brillo
  - Formatos: .jpg, .png
  - Ubicación: `src/assets/images/textures/`

### 🎵 Sonidos (Opcional pero recomendado)
- [ ] **Efectos de Sonido DS**
  - Click de botón START
  - Sonido de inserción de cartucho
  - Sonido de encendido/apagado
  - Sonidos de navegación
  - Formatos: .mp3, .wav
  - Ubicación: `src/assets/sounds/`

---

## 🔧 Tareas Pendientes (Desarrollador)

### 🏗️ Estructura del Proyecto
- [x] Crear estructura Vue.js 3 estándar
- [x] Migrar código HTML a componentes Vue
- [x] Configurar Vite para desarrollo
- [ ] Instalar dependencias necesarias
- [ ] Configurar build para producción

### 🎨 Estética y Diseño
- [ ] Implementar tipografía Nintendo DS BIOS
- [ ] Reemplazar botones actuales por botones de juegos DS
- [ ] Mejorar sistema de colores con paletas DS reales
- [ ] Añadir efectos de brillo/reflejo en pantallas
- [ ] Implementar animaciones más realistas de DS
- [ ] Añadir efecto de "cierre" de consola al apagar

### 🎮 Funcionalidades
- [ ] Sistema de guardado de estado (localStorage)
- [ ] Persistencia de tema seleccionado
- [ ] Animaciones de transición entre cartuchos mejoradas
- [ ] Efecto de "insertar cartucho" al cambiar sección
- [ ] Sistema de logros/estadísticas (opcional)

### 📱 Responsive y UX
- [ ] Optimizar layout para móviles
- [ ] Añadir soporte para touch gestures
- [ ] Mejorar accesibilidad
- [ ] Optimizar rendimiento

### 🔌 Integraciones
- [ ] Conectar enlaces reales de LinkedIn, GitHub, Email
- [ ] Añadir analytics (opcional)
- [ ] Implementar SEO básico

---

## 🎨 Sistema de Colores DS

### Paletas Oficiales a Implementar
```javascript
const dsColors = {
  black: {
    primary: '#1a1a1a',    // Cuerpo consola
    secondary: '#2d2d2d',  // Marco pantalla
    accent: '#4a4a4a',     // Botones/details
    screen: '#c8d8b0',     // Color pantalla
    screenLight: '#a8c890' // Degradado pantalla
  },
  blueRoyal: {
    primary: '#1e3a5f',
    secondary: '#2c5282', 
    accent: '#4299e1',
    screen: '#bee3f8',
    screenLight: '#90cdf4'
  },
  // ... otras variantes
}
```

### Mejoras Necesarias
- [ ] Añadir variaciones de color basadas en las imágenes reales
- [ ] Implementar transiciones suaves entre temas
- [ ] Añadir modo "brillo pantalla" ajustable

---

## 🎮 Botones de Juegos DS

### Referencias Necesarias
El usuario mencionó "botones de juegos de la DS que te pasé al principio" - necesitamos:
- [ ] Imágenes de referencia de botones DS específicos
- [ ] Estilo visual deseado (pixel art, realista, etc.)
- [ ] Comportamiento esperado (hover, active, disabled)

### Implementación Planificada
```vue
<!-- Ejemplo de cartucho con imagen real -->
<div class="cartridge-real">
  <img :src="cartridgeImage" :alt="label" />
  <span class="cartridge-label">{{ label }}</span>
</div>
```

---

## 📝 Roadmap de Desarrollo

### Fase 1: Fundamentos (Completado ✅)
- [x] Estructura Vue.js
- [x] Componentes básicos
- [x] Sistema de idiomas
- [x] Datos del portfolio

### Fase 2: Estética DS (En Progreso 🔄)
- [ ] Tipografía Nintendo DS BIOS
- [ ] Botones de cartuchos reales
- [ ] Sistema de colores mejorado
- [ ] Efectos visuales retro

### Fase 3: Funcionalidades Avanzadas
- [ ] Sonidos y efectos
- [ ] Animaciones mejoradas
- [ ] Persistencia de estado
- [ ] Optimización móvil

### Fase 4: Producción
- [ ] Build optimizado
- [ ] Deploy
- [ ] Testing final
- [ ] Documentación

---

## 🤝 Responsabilidades

### Usuario (DavidNull)
- Proporcionar assets de imágenes y tipografías
- Especificar preferencias de diseño
- Proveer enlaces reales para contacto
- Testing y feedback

### Desarrollador (Cascade)
- Implementar estructura Vue.js
- Crear componentes y lógica
- Integrar assets proporcionados
- Optimizar y deployar

---

## 📁 Estructura Final de Archivos

```
DavidNull_Website/
├── src/
│   ├── assets/
│   │   ├── fonts/
│   │   │   └── ds-bios.woff2
│   │   ├── images/
│   │   │   ├── cartridges/
│   │   │   ├── icons/
│   │   │   ├── pet/
│   │   │   └── textures/
│   │   └── sounds/ (opcional)
│   ├── components/
│   │   ├── DSConsole.vue
│   │   ├── CartridgeButton.vue
│   │   └── PowerButton.vue
│   ├── data/
│   │   ├── portfolio-es.js
│   │   └── portfolio-en.js
│   ├── styles/
│   │   └── main.css
│   ├── App.vue
│   └── main.js
├── public/
├── package.json
├── vite.config.js
└── ROADMAP.md
```

---

## 🎯 Próximos Pasos Inmediatos

1. **Usuario**: Proporcionar tipografía Nintendo DS BIOS
2. **Usuario**: Compartir imágenes de botones de cartuchos DS deseados
3. **Desarrollador**: Instalar dependencias npm
4. **Desarrollador**: Integrar tipografía cuando esté disponible
5. **Ambos**: Revisar y ajustar diseño con assets reales

---

## 📞 Contacto para Coordinación

- Usuario: David Cela Pedraza
- Proyecto: DavidNull DS Portfolio
- Stack: Vue.js 3 + Vite + Tailwind CSS
- Estilo: Nintendo DS Retro Theme
