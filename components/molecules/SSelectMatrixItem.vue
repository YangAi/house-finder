<template>
  <div class="tw-w-full">
    <s-card-title small no-margin class="text-caption">
      {{ label }}：
    </s-card-title>
    <s-selectable-group v-model="innerValue" v-bind="$attrs" />
  </div>
</template>

<script>
export default {
  name: 'SSelectMatrixItem',
  props: {
    value: {
      type: null,
      required: true
    },
    label: {
      type: String,
      default: '选项'
    }
  },
  computed: {
    innerValue: {
      get () {
        return this.value
      },
      set (newVal) {
        this.$emit('input', newVal)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
