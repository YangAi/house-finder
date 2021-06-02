<template>
  <s-card class="tw-cursor-pointer" @click.native="$router.push(`/projects/${project._id}`)">
    <v-container class="tw-flex">
      <div class="tw-w-full">
        <s-card-title no-margin> {{ project.name }} </s-card-title>
        <div />
        <s-card-subtitle
          no-margin
          class="tw-my-2 tw-text-sm tw-font-normal tw-tracking-wide"
        >
          <v-icon small> mdi-star-outline </v-icon>
          1999年建成 · 板楼 · 共67栋
        </s-card-subtitle>
        <s-card-subtitle class="tw-text-sm tw-font-normal tw-tracking-wide">
          <v-icon small> mdi-map-outline </v-icon>
          普陀长寿路 · 距离中山公园地铁站(300米)
        </s-card-subtitle>
        <v-spacer />
        <div class="tw-my-1">
          <s-project-chips />
        </div>
      </div>
      <v-divider vertical class="tw-mx-4" />
      <div class="tw-flex tw-flex-col tw-text-right tw-w-32 bg-red-100">
        <div
          class="tw-font-semibold tw-font-number tw-text-2xl tw-text-red-500"
        >
          8.2<span class="tw-text-sm"> 万</span>
        </div>
        <s-card-subtitle no-margin> 小区均价 </s-card-subtitle>
        <v-spacer />
        <s-card-subtitle no-margin>
          在售 <span class="tw-text-blue-500">12套</span>
        </s-card-subtitle>
        <s-card-subtitle no-margin>
          最近成交 <span class="tw-text-blue-500">12套</span>
        </s-card-subtitle>
        <s-card-subtitle no-margin>
          带看 <span class="tw-text-blue-500">121次</span>
        </s-card-subtitle>
      </div>
    </v-container>
  </s-card>
</template>

<script>
export default {
  name: 'ProjectErshouCard',
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped></style>
