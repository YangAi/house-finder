<template>
  <div class="project-chips">
    <s-chip v-for="(chip, index) of chips" :key="index" v-bind="$attrs" :color="chip.color">
      {{ chip.text }}
    </s-chip>
  </div>
</template>

<script>
export default {
  name: 'SProjectChips',
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
          text: '好学区'
        },
        {
          color: 'blue',
          text: '近地铁'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
