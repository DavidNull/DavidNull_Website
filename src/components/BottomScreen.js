import FitBox from './FitBox.js'
import Sprite from './Sprite.js'
import { SECTIONS } from '../data.js'
import { state, openSection, dismissProjectsNotif } from '../store.js'

export default {
  name: 'BottomScreen',
  components: { FitBox, Sprite },
  setup() {
    return { state, sections: SECTIONS, openSection, dismissProjectsNotif }
  },
  template: `
    <div class="screen screen--bottom">
      <FitBox :width="480">
        <div class="vscreen ds-grid">
          <div :class="['bar', 'vscreen__bar', 'ds-' + state.shell]">
            <span class="vscreen__bar-title">Menu</span>
            <span class="vscreen__bar-meta">{{ sections.length }} apps</span>
          </div>

          <div class="menu">
            <button
              v-for="(s, i) in sections"
              :key="s.id"
              :class="['tile', { 'is-active': state.section === s.id, 'tile--notify': s.id === 'projects' && !state.projectsNotifSeen }]"
              :style="{ '--i': i }"
              @click="openSection(s.id); s.id === 'projects' && dismissProjectsNotif()"
            >
              <span :class="['tile__art', 'ds-' + s.color]">
                <Sprite :name="s.sprite" />
              </span>
              <span class="tile__label">{{ s.label }}</span>
              <span class="tile__sub">{{ s.sub }}</span>
              <span v-if="s.id === 'projects' && !state.projectsNotifSeen" class="tile__notif">1</span>
            </button>
          </div>

          <div :class="['bar-lg-reverse', 'vscreen__foot', 'ds-' + state.shell]">
            <span>Click to check my apps</span>
          </div>
        </div>
      </FitBox>
    </div>
  `,
}
