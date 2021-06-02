<template>
  <s-card>
    <s-card-title :class="dense ? 'tw-py-2' : ''" class="tw-font-number">
      {{ value }}<span class="tw-text-xs tw-pl-1">{{ unit }}</span>
    </s-card-title>
    <s-card-subtitle :class="dense ? 'tw-py-2' : ''">
      {{ text }}
    </s-card-subtitle>
  </s-card>
</template>

<script>
export default {
  name: 'SSingleDataCard',
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    unit: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: '数据'
    },
    dense: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classList () {
      return this.dense ? 'tw-p-2' : ''
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
