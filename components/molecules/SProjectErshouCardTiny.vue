<template>
  <s-card v-bind="$attrs">
    <s-card-title>
      {{ project.name }}
      <span class="tw-text-xs tw-px-2">(2001年)</span>
      <v-spacer />
      <span class="tw-text-error">
        <span class="tw-font-number">{{ $_.round(project.averagePrice / 10000, 1) }}</span>
        万</span>
    </s-card-title>
    <s-card-subtitle class="tw-text-right tw-pb-0">
      21 套在售，1028 套成交
    </s-card-subtitle>
    <v-container class="tw-pt-0">
      <s-project-chips />
    </v-container>
  </s-card>
</template>

<script>
export default {
  name: 'SProjectErshouCardTiny',
  props: {
    project: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
