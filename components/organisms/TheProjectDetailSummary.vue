<template>
  <div>
    <section class="tw-bg-white">
      <v-container>
        <the-project-detail-summary-info-matrix :project="project" />
      </v-container>
    </section>
    <section>
      <v-container class="tw-grid tw-grid-cols-2 tw-gap-4">
        <s-card class="tw-col-span-2">
          <s-card-title>周边配套</s-card-title>
        </s-card>
        <s-card>
          <s-card-title>在售户型</s-card-title>
          <v-container></v-container>
        </s-card>
        <s-card>
          <s-card-title>在售均价</s-card-title>
          <v-container></v-container>
        </s-card>
        <s-card>
          <s-card-title>成交户型历史</s-card-title>
          <v-container></v-container>
        </s-card>
        <s-card>
          <s-card-title>租房历史</s-card-title>
          <v-container></v-container>
        </s-card>
      </v-container>
    </section>
  </div>
</template>

<script>
export default {
  name: 'TheProjectDetailSummary',
  props: {
    project: {
      type: Object,
    },
  },
}
</script>

<style lang="scss" scoped></style>
