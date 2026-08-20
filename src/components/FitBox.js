import { ref, onMounted, onBeforeUnmount } from 'vue'

export default {
  name: 'FitBox',
  props: {
    width: { type: Number, default: 480 },
  },
  setup(props) {
    const outer = ref(null)
    const inner = ref(null)
    const scale = ref(1)
    const height = ref(0)
    let observer = null
    let frame = 0

    const measure = () => {
      if (!outer.value || !inner.value) return
      const available = outer.value.clientWidth
      const next = available > 0 ? available / props.width : 1
      if (Math.abs(next - scale.value) > 0.0005) scale.value = next
      const measured = inner.value.offsetHeight * next
      if (Math.abs(measured - height.value) > 0.5) height.value = measured
    }

    const schedule = () => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        measure()
      })
    }

    onMounted(() => {
      observer = new ResizeObserver(schedule)
      observer.observe(outer.value)
      observer.observe(inner.value)
      measure()
    })

    onBeforeUnmount(() => {
      if (frame) cancelAnimationFrame(frame)
      if (observer) observer.disconnect()
    })

    return { outer, inner, scale, height }
  },
  template: `
    <div class="fitbox" ref="outer" :style="{ height: height ? height + 'px' : null }">
      <div
        class="fitbox__inner"
        ref="inner"
        :style="{ width: width + 'px', transform: 'scale(' + scale + ')' }"
      >
        <slot />
      </div>
    </div>
  `,
}
