import { createApp, onMounted, onBeforeUnmount } from 'vue'
import BootScreen from './components/BootScreen.js'
import Console from './components/Console.js'
import { state, boot, exitFullscreen } from './store.js'

const App = {
  components: { BootScreen, Console },
  setup() {
    const onKey = (e) => {
      if (e.key === 'Escape') exitFullscreen()
      if ((e.key === 'Enter' || e.key === ' ') && state.stage === 'boot') {
        e.preventDefault()
        boot()
      }
    }

    onMounted(() => window.addEventListener('keydown', onKey))
    onBeforeUnmount(() => window.removeEventListener('keydown', onKey))

    return { state }
  },
  template: `
    <div class="stage">
      <Transition name="stage" mode="out-in">
        <BootScreen v-if="state.stage === 'boot'" key="boot" />
        <Console v-else key="console" />
      </Transition>

      <Transition name="fade">
        <div v-if="state.stage === 'off'" class="poweroff"></div>
      </Transition>
    </div>
  `,
}

createApp(App).mount('#app')
