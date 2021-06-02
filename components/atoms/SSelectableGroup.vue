<template>
  <v-chip-group ref="group" v-bind="$attrs" v-model="innerValue" v-resize="resizeHandle">
    <div :class="classList" class="tw-w-full tw-grid tw-justify-center tw-items-center">
      <s-selectable-item v-for="(item, index) of items" :key="index" :item="item" />
    </div>
  </v-chip-group>
</template>

<script>
export default {
  name: 'SSelectableGroup',
  props: {
    value: {
      type: null,
      required: true
    },
    items: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      gridSize: 3,
      sample: {
        city: '上海',
        ershouCount: 52000,
        zufangCount: 28000,
        projectCount: 20160,
        schoolCount: 2143,
        districts: [
          {
            district: '浦东',
            ershouCount: 52000,
            zufangCount: 28000,
            projectCount: 20160,
            schoolCount: 2143,
            areas: [
              {
                district: '张江',
                ershouCount: 2000,
                zufangCount: 2000,
                projectCount: 2160,
                schoolCount: 143
              }
            ]
          }
        ]
      }
    }
  },
  computed: {
    innerValue: {
      get () {
        return this.value
      },
      set (newValue) {
        this.$emit('input', newValue)
      }
    },
    classList () {
      const list = []
      list.push(`tw-grid-cols-${this.gridSize} tw-gap-${this.gridSize > 3 ? '2' : '2'}`)
      return list.join(' ')
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.resizeHandle()
    })
  },
  methods: {
    resizeHandle () {
      const max = Math.max(...this.items.map(item => item.length))
      this.gridSize = Math.floor((this.$refs.group.$el.clientWidth + 8) / (52 + max * 14 + 8)) || 1
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
