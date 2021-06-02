<template>
  <s-card class="tw-cursor-pointer" @click.native="$router.push(`/schools/${item.id}`)">
    <v-container class="tw-flex">
      <div class="tw-w-full">
        <s-card-title no-margin>
          {{ item.name }}<span v-if="item.campus">({{ item.campus }})</span>
        </s-card-title>
        <div />
        <s-card-subtitle no-margin>
          {{ item.type }} · {{ item.nature }}
        </s-card-subtitle>
        <s-card-subtitle no-margin>
          浦东 · {{ item.address }}
        </s-card-subtitle>
        <s-school-chips class="tw-my-1" />
      </div>
      <div class="tw-flex tw-flex-col tw-text-right tw-w-64">
        <div class="tw-font-semibold tw-font-number tw-text-2xl tw-text-red-500">
          420<span class="tw-text-sm"> 万起</span>
        </div>
        <s-card-subtitle no-margin>
          均价 44554元/㎡ ~ 68626元/㎡
        </s-card-subtitle>
        <!--          <s-card-subtitle no-margin class="tw-text-green-500">新上线</s-card-subtitle>-->
        <v-spacer />
        <s-card-subtitle no-margin>
          <nuxt-link to="/projects/1">
            123
          </nuxt-link>个小区，<nuxt-link to="/projects/1">
            213
          </nuxt-link>套房源
        </s-card-subtitle>
      </div>
    </v-container>
  </s-card>
</template>

<script>
export default {
  name: 'SSchoolCard',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
