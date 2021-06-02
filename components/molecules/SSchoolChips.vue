<template>
  <div class="school-chips">
    <s-chip v-for="(chip, index) of chips" :key="index" v-bind="$attrs" :color="chip.color">
      {{ chip.text }}
    </s-chip>
  </div>
</template>

<script>
export default {
  name: 'SSchoolChips',
  props: {
    school: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    chips () {
      return [
        {
          color: 'red',
          text: '优质学区'
        },
        {
          color: 'blue',
          text: '九年一贯制'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
