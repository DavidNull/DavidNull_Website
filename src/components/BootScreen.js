import FitBox from './FitBox.js'
import Sprite from './Sprite.js'
import { PROFILE, BOOT_LINES } from '../data.js'
import { state, SHELL_COLORS, boot, setShell } from '../store.js'

const LOADING_CELLS = [1, 2, 3, 4, 5, 6, 7, 8, 9]

export default {
  name: 'BootScreen',
  components: { FitBox, Sprite },
  setup() {
    return {
      state,
      profile: PROFILE,
      lines: BOOT_LINES,
      colors: SHELL_COLORS,
      cells: LOADING_CELLS,
      boot,
      setShell,
    }
  },
  template: `
    <div class="boot" @click="boot">
      <div class="boot__stage">
        <FitBox :width="440">
          <div class="boot__panel">
            <div class="boot__brand">
              <span class="boot__brand-mark">DavidNull</span>
              <span class="boot__brand-sub">NINTENDO DS&nbsp;PROFILE</span>
            </div>

            <div class="alert boot__alert">
              <div class="loading-container">
                <div v-for="c in cells" :key="'l' + c" :class="'loading-' + c"></div>
              </div>
              <span>Loading into my profile...</span>
              <div class="loading-container">
                <div v-for="c in cells" :key="'r' + c" :class="'loading-' + c"></div>
              </div>
            </div>

            <div class="info boot__info">
              <div class="info-square">
                <Sprite name="profile" />
              </div>
              <div class="info-container">
                <div class="info-label">{{ profile.name }}</div>
                <div class="info-text">{{ profile.role }} &mdash; {{ profile.place }}</div>
              </div>
            </div>

            <div class="pictochat-message boot__note">
              <header :class="'ds-' + state.shell + '-50'">Nota</header>
              <span v-for="(line, i) in lines" :key="i" class="boot__note-line">{{ line }}</span>
            </div>

            <div class="boot__stats grid w-full grid-cols-3 gap-2">
              <div v-for="s in profile.stats" :key="s.label" class="boot__stat">
                <span class="boot__stat-value">{{ s.value }}</span>
                <span class="boot__stat-label">{{ s.label }}</span>
              </div>
            </div>

            <div class="boot__hint">Touch the Touch Screen to continue.</div>
          </div>
        </FitBox>

        <div class="boot__casing" @click.stop>
          <div class="boot__casing-head">
            <span class="boot__casing-title">Color Casing</span>
            <span class="boot__casing-note">Choose a color &mdash; Elige color</span>
          </div>
          <div class="boot__swatches grid grid-cols-6 gap-2">
            <button
              v-for="c in colors"
              :key="c"
              :class="['boot__swatch', 'ds-' + c, { 'is-active': state.shell === c }]"
              :title="c"
              :aria-label="c"
              @click="setShell(c)"
            ></button>
          </div>
        </div>
      </div>
    </div>
  `,
}
