import FitBox from './FitBox.js'
import { PROFILE, SECTION_BY_ID } from '../data.js'
import { state, toggleFullscreen, openSection, markProjectsFirstOpened } from '../store.js'
import { computed, ref, watch } from 'vue'

export default {
  name: 'TopScreen',
  components: { FitBox },
  setup() {
    const section = computed(() => SECTION_BY_ID[state.section] || null)
    const copyMessage = ref('')
    const copyEmail = (email) => {
      navigator.clipboard.writeText(email)
      copyMessage.value = '¡Correo copiado!'
      setTimeout(() => {
        copyMessage.value = ''
      }, 2000)
    }
    let firstSeenTimer = null
    watch(() => state.section, (newSection) => {
      if (newSection === 'projects' && !state.projectsFirstOpened) {
        firstSeenTimer = setTimeout(() => { markProjectsFirstOpened(); firstSeenTimer = null }, 3000)
      } else if (newSection !== 'projects' && firstSeenTimer) {
        clearTimeout(firstSeenTimer)
        firstSeenTimer = null
      }
    })

    return { state, section, profile: PROFILE, toggleFullscreen, openSection, copyMessage, copyEmail }
  },
  template: `
    <Teleport to="body" :disabled="!state.fullscreen">
    <div :class="['screen', 'screen--top', { 'is-fullscreen': state.fullscreen }]">
      <div class="screen__frame">
        <FitBox :width="480">
          <div class="vscreen ds-grid">
            <div :class="['bar', 'vscreen__bar', 'ds-' + (section ? section.color : state.shell)]">
              <span class="vscreen__bar-title">
                {{ section ? section.label : profile.name }}
              </span>
              <span class="vscreen__bar-meta">
                {{ section ? section.sub : 'Status' }}
              </span>
            </div>

            <Transition name="swap" mode="out-in">
              <div v-if="!section" class="vscreen__body vscreen__body--status" key="status">
                <div class="status">
                  <ds-clock
                    :style="{ '--color': 'var(--color-ds-' + state.shell + ')' }"
                  ></ds-clock>
                  <ds-calendar></ds-calendar>
                </div>
                <div class="info-text status__strip">
                  {{ profile.tagline }}
                </div>
              </div>

              <div v-else class="vscreen__body" :key="section.id">
                <div v-if="section.id === 'profile'" class="panel__intro-with-gif">
                  <p class="panel__intro">{{ section.intro }}</p>
                  <img src="./assets/tepig.gif" alt="Tepig" class="panel__gif" />
                </div>
                <div v-else-if="section.id === 'projects'" class="panel__intro-with-gif">
                  <p class="panel__intro">{{ section.intro }}</p>
                  <img src="./assets/nintendogs.gif" alt="Nintendogs" class="panel__gif" />
                </div>
                <div v-else-if="section.id === 'skills'" class="panel__intro-with-gif">
                  <p class="panel__intro">{{ section.intro }}</p>
                  <img src="./assets/mario.gif" alt="Mario" class="panel__gif" />
                </div>
                <p v-else class="panel__intro">{{ section.intro }}</p>

                <component
                  :is="item.href ? 'a' : 'div'"
                  v-for="(item, i) in section.items"
                  :key="i"
                  :href="item.href"
                  :target="item.href ? '_blank' : null"
                  :rel="item.href ? 'noreferrer' : null"
                  :class="['pictochat-message', 'panel__card', { 'panel__card--link': item.href, 'panel__card--featured': item.featured, 'panel__card--firstseen': item.featured && !state.projectsFirstOpened }]"
                  :style="{ '--i': i }"
                >
                  <header :class="'ds-' + section.color + '-50'">{{ item.title }}</header>
                  <div class="panel__row">
                    <div class="panel__col">
                      <span class="panel__meta">{{ item.meta }}</span>
                      <span class="panel__text">{{ item.text }}</span>
                      <span v-if="item.tags || item.featured" class="panel__tags flex flex-wrap gap-1">
                        <span v-if="item.featured" class="panel__tag panel__tag--new">NEW</span>
                        <span v-for="t in item.tags" :key="t" class="panel__tag">{{ t }}</span>
                      </span>
                    </div>
                    <div v-if="item.logo !== undefined" class="panel__logo">
                      <img v-if="item.logo" :src="item.logo" :alt="item.title" />
                      <span v-else>LOGO</span>
                    </div>
                  </div>
                </component>

                <a
                  v-if="section.more"
                  class="pictochat-message panel__card panel__card--link"
                  :href="section.more.href"
                  target="_blank"
                  rel="noreferrer"
                >
                  <header :class="'ds-' + section.color + '-50'">{{ section.more.title }}</header>
                  <span class="panel__text">{{ section.more.text }}</span>
                </a>

                <label v-for="f in section.fields" :key="f.label" class="panel__field">
                  <span>{{ f.label }}</span>
                  <div class="input-wrapper" :class="{ 'input-wrapper--clickable': f.label === 'Email' }" @click="f.label === 'Email' ? copyEmail(f.value) : null">
                    <div class="input-before"></div>
                    <input type="text" :value="f.label === 'Email' && copyMessage ? copyMessage : f.value" readonly />
                    <div class="input-after"></div>
                  </div>
                </label>

                <div v-if="section.links" class="panel__actions flex gap-2">
                  <div class="panel__links flex flex-col gap-2">
                    <a
                      v-for="l in section.links"
                      :key="l.label"
                      :href="l.href"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button class="button-lg" type="button">{{ l.label }}</button>
                    </a>
                  </div>

                  <a
                    v-if="section.cv"
                    class="panel__cv"
                    :href="section.cv.href"
                    :download="section.cv.file"
                  >
                    <span class="panel__cv-label">{{ section.cv.label }}</span>
                    <span class="panel__cv-note">{{ section.cv.note }}</span>
                  </a>
                </div>

                <button class="panel__back button-lg" type="button" @click="openSection(section.id)">
                  Back
                </button>
              </div>
            </Transition>
          </div>
        </FitBox>
      </div>

      <button
        v-if="state.fullscreen"
        class="button-square screen__fs"
        type="button"
        aria-label="Exi plena screen"
        @click="toggleFullscreen"
      >
        <svg viewBox="0 0 16 16" shape-rendering="crispEdges" aria-hidden="true">
          <g fill="currentColor">
            <rect x="1" y="5" width="6" height="2" />
            <rect x="5" y="1" width="2" height="6" />
            <rect x="9" y="9" width="6" height="2" />
            <rect x="9" y="9" width="2" height="6" />
          </g>
        </svg>
      </button>
    </div>
    </Teleport>
  `,
}
