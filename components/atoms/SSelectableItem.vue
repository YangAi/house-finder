<template>
  <v-chip filter flat :value="item.value || item" class="selectable-item">
    {{ item.text || item }}
  </v-chip>
</template>

<script>
export default {
  name: 'SSelectableItem',
  props: {
    item: {
      type: [String, Object],
      default: '加载中'
    }
  }
}
</script>

<style lang="scss" scoped>
  .v-chip.selectable-item {
    @apply tw-border-none tw-w-full tw-justify-center tw-bg-gray-100;
    &.v-chip--active {
      &:before {
        opacity: 0;
      }
      @apply tw-bg-transparent tw-text-primary tw-border-2 tw-border-solid tw-border-blue-300;
    }
    ::v-deep .v-icon {
      @apply tw-text-base
    }
  }
</style>
