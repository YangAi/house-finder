<template>
  <section>
    <baidu-map style="width: 100%; height: 600px" center="上海" :map-click="false" :auto-resize="true" :scroll-wheel-zoom="true" class="fill-height tw-w-full">
    </baidu-map>
  </section>
</template>

<script>
export default {
  name: 'TheProjectDetailMap'
}
</script>

<style lang="scss" scoped>

</style>
