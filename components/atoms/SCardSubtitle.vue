<template>
  <v-card-subtitle :class="classList" class="tw-text-xs">
    <slot />
  </v-card-subtitle>
</template>

<script>
export default {
  name: 'SCardSubtitle',
  props: {
    noMargin: {
      type: Boolean,
      default: false
    },
    dark: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classList () {
      const list = []
      if (this.noMargin) { list.push('tw-p-0') }
      if (this.dark) { list.push('tw-text-white') }
      return list.join(' ')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
