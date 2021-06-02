<template>
  <main>
    <section class="tw-bg-white">
      <v-container>
        <template>
          <s-main-page-title>{{ project.name }}</s-main-page-title>
          <s-card-subtitle>
            ({{ project.districtName }}{{ project.areaName }})
            <span
              v-for="(item, index) of project.addressList"
              :key="index"
              class="address"
              >{{ item }}</span
            >
          </s-card-subtitle>
        </template>
      </v-container>
    </section>
    <section class="tw-bg-indigo-500">
      <v-container>
        <div class="tw-grid tw-grid-cols-3 tw-gap-4">
          <s-card>
            <s-card-title
              >{{ project.averagePrice }}<span>元</span></s-card-title
            >
            <s-card-subtitle>小区均价</s-card-subtitle>
          </s-card>
          <s-card>
            <s-card-title
              >{{ project.onSaleCount }}<span>套</span></s-card-title
            >
            <s-card-subtitle>正在出售</s-card-subtitle>
          </s-card>
          <s-card>
            <s-card-title>{{ project.followerCount }}</s-card-title>
            <s-card-subtitle>小区热度</s-card-subtitle>
          </s-card>
        </div>
      </v-container>
    </section>
    <section>
      <v-container class="tw-pb-0">
        <v-tabs v-model="activeSection" background-color="transparent">
          <v-tab key="summary">小区信息</v-tab>
          <v-tab key="ershou">二手房</v-tab>
          <v-tab key="zufang">租房</v-tab>
          <v-tab key="history">历史成交</v-tab>
          <v-tab key="map">地图</v-tab>
        </v-tabs>
      </v-container>
    </section>
    <section>
      <v-tabs-items v-model="activeSection" class="tw-bg-transparent">
        <v-tab-item key="summary">
          <the-project-detail-summary :project="project" />
        </v-tab-item>
        <v-tab-item key="ershou">
          <the-project-detail-ershou :project="project" />
        </v-tab-item>
        <v-tab-item key="zufang">
          <the-project-detail-zufang :project="project" />
        </v-tab-item>
        <v-tab-item key="history">
          <the-project-detail-history :project="project" />
        </v-tab-item>
        <v-tab-item key="map">
          <the-project-detail-map :project="project" />
        </v-tab-item>
      </v-tabs-items>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Id',
  data() {
    return {
      activeSection: 'summary',
      project: {},
    }
  },
  async fetch() {
    this.project = await this.$api.projects.show(this.$route.params.id)
    if (!this.project) {
      this.$nuxt.error({ statusCode: 404, message: '小区不存在' })
    }
  },
}
</script>

<style lang="scss" scoped>
.address:not(:last-child):after {
  content: '，';
}
</style>
