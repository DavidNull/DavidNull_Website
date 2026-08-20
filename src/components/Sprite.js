import { computed } from 'vue'
import { SPRITES } from '../sprites.js'

export default {
  name: 'Sprite',
  props: {
    name: { type: String, required: true },
  },
  setup(props) {
    const sprite = computed(() => SPRITES[props.name])

    const size = computed(() => (sprite.value ? sprite.value.rows.length : 0))

    const pixels = computed(() => {
      if (!sprite.value) return []
      const out = []
      sprite.value.rows.forEach((row, y) => {
        for (let x = 0; x < row.length; x++) {
          const fill = sprite.value.palette[row[x]]
          if (fill) out.push({ key: x + ':' + y, x, y, fill })
        }
      })
      return out
    })

    return { size, pixels }
  },
  template: `
    <svg
      class="sprite"
      :viewBox="'0 0 ' + size + ' ' + size"
      shape-rendering="crispEdges"
      aria-hidden="true"
    >
      <rect
        v-for="p in pixels"
        :key="p.key"
        :x="p.x"
        :y="p.y"
        width="1"
        height="1"
        :fill="p.fill"
      />
    </svg>
  `,
}
