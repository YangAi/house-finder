<template>
  <s-card v-ripple>
    <v-container class="tw-flex tw-h-full tw-items-center tw-justify-center tw-tracking-wide">
      {{ text }}
      <v-icon class="tw-ml-4">
        mdi-arrow-right
      </v-icon>
    </v-container>
  </s-card>
</template>

<script>
export default {
  name: 'SMoreCard',
  props: {
    text: {
      type: String,
      default: '更多内容'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
