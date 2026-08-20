import TopScreen from './TopScreen.js'
import BottomScreen from './BottomScreen.js'
import { state, powerOff, openSection, toggleFullscreen } from '../store.js'

export default {
  name: 'Console',
  components: { TopScreen, BottomScreen },
  setup() {
    const back = () => {
      if (state.section !== 'status') openSection(state.section)
    }
    return { state, powerOff, back, toggleFullscreen }
  },
  template: `
    <div
      :class="['console', { 'is-booting': state.flashing }]"
      :style="{ '--shell': 'var(--color-ds-' + state.shell + ')' }"
    >
      <div class="console__lid">
        <div class="bezel bezel--top">
          <TopScreen />
          <div class="bezel__leds">
            <i class="led led--on"></i>
            <i class="led led--wifi"></i>
          </div>
        </div>
        <div class="lid__chin">
          <span class="lid__brand">DCP&nbsp;DS</span>
          <span class="lid__grille"></span>
        </div>
      </div>

      <div class="console__hinge">
        <i></i><i></i><i></i>
      </div>

      <div class="console__base">
        <div class="base__row">
          <div class="pad" aria-hidden="true">
            <i class="pad__v"></i>
            <i class="pad__h"></i>
            <i class="pad__dot"></i>
          </div>

          <div class="bezel bezel--bottom">
            <BottomScreen />
          </div>

          <div class="abxy">
            <button class="face face--x" type="button" tabindex="-1" aria-hidden="true">X</button>
            <button class="face face--y" type="button" tabindex="-1" aria-hidden="true">Y</button>
            <button class="face face--a" type="button" tabindex="-1" aria-hidden="true">A</button>
            <button class="face face--b" type="button" title="Redi" @click="back">B</button>
          </div>
        </div>

        <div class="base__foot flex flex-wrap items-center justify-center gap-3">
          <span class="foot__pill">SELECT</span>
          <span class="foot__pill">START</span>
          <i class="foot__mic" aria-hidden="true"></i>

          <button class="hwbtn" type="button" title="Plena screen" @click="toggleFullscreen">
            <svg viewBox="0 0 16 16" shape-rendering="crispEdges" aria-hidden="true">
              <g fill="currentColor">
                <rect x="1" y="1" width="6" height="2" />
                <rect x="1" y="1" width="2" height="6" />
                <rect x="9" y="13" width="6" height="2" />
                <rect x="13" y="9" width="2" height="6" />
              </g>
            </svg>
            <span>FULL</span>
          </button>

          <button class="power" type="button" title="Power off" @click="powerOff">
            <i class="power__ring"></i>
            <span>POWER</span>
          </button>
        </div>
      </div>
    </div>
  `,
}
