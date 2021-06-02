<template>
  <div class="fill-height tw-grid tw-grid-cols-2">
    <v-container v-show="showFilter" class="tw-relative tw-bg-white">
      <s-main-page-title>二手房搜索</s-main-page-title>
      <v-container>
        <v-autocomplete solo label="行政区" hide-details></v-autocomplete>
        <v-chip-group mandatory multiple>
          <v-chip v-for="item of areas" :key="item" small outlined>{{
            item
          }}</v-chip>
        </v-chip-group>
        <v-simple-table>
          <tr>
            <th class="tw-text-xs tw-w-16">房间：</th>
            <td class="tw-flex tw-items-center tw-py-4">
              <v-checkbox
                dense
                label="一居"
                hide-details
                :ripple="false"
                class="tw-mt-0 tw-mr-2 tw-pt-0 tw-text-xs"
              ></v-checkbox>
              <v-checkbox
                dense
                label="二居"
                hide-details
                :ripple="false"
                class="tw-mt-0 tw-mr-2 tw-pt-0"
              ></v-checkbox>
              <v-checkbox
                dense
                label="三居"
                hide-details
                :ripple="false"
                class="tw-mt-0 tw-mr-2 tw-pt-0"
              ></v-checkbox>
              <v-checkbox
                dense
                label="更多"
                hide-details
                :ripple="false"
                class="tw-mt-0 tw-mr-2 tw-pt-0"
              ></v-checkbox>
            </td>
          </tr>
          <tr>
            <th class="tw-text-xs tw-w-16">方式：</th>
            <td>
              <v-chip-group>
                <v-chip outlined small>整租</v-chip>
                <v-chip outlined small>合租</v-chip>
              </v-chip-group>
            </td>
          </tr>
        </v-simple-table>
        <div class="tw-grid tw-grid-cols-2 tw-gap-4">
          <div></div>
        </div>
        <v-simple-table>
          <tr>
            <th class="tw-text-xs tw-w-16 tw-pt-4">更多：</th>
            <td class="tw-pt-4">
              <v-chip-group>
                <v-chip outlined small>有地铁</v-chip>
                <v-chip outlined small>朝南</v-chip>
                <v-chip outlined small>有电梯</v-chip>
                <v-chip outlined small>精装修</v-chip>
                <v-chip outlined small>VR看房</v-chip>
              </v-chip-group>
            </td>
          </tr>
        </v-simple-table>
        <div class="actions tw-absolute tw-bottom-0 tw-inset-x-0 tw-m-4">
          <v-btn block color="primary">开始搜索</v-btn>
        </div>
      </v-container>
    </v-container>
    <v-container class="tw-relative tw-bg-gray-50">
      <div class="tw-flex">
        <v-tabs v-model="resultTab" background-color="transparent">
          <v-tab key="unit">房源</v-tab>
          <v-tab key="project">小区</v-tab>
        </v-tabs>
        <v-spacer />
        <v-btn text small>价格排序</v-btn>
        <v-btn text small>发布时间排序</v-btn>
        <v-btn text small>数量排序</v-btn>
      </div>
      <v-tabs-items v-model="resultTab" class="tw-bg-transparent">
        <v-tab-item key="unit" class="tw-bg-transparent">
          <s-unit-ershou-card class="tw-my-2" />
          <s-unit-ershou-card />
        </v-tab-item>
        <v-tab-item key="project">
          <s-project-ershou-card
            v-for="(project, index) of projects"
            :key="index"
            :project="project"
            class="tw-my-2"
          />
        </v-tab-item>
      </v-tabs-items>
    </v-container>
    <v-container v-if="!showFilter" class="fill-height tw-bg-yellow-100 tw-p-0">
      <baidu-map
        center="上海"
        :map-click="false"
        :auto-resize="true"
        :zoom="zoom"
        :scroll-wheel-zoom="true"
        class="fill-height tw-w-full"
        @ready="handler"
      >
        <bml-marker-clusterer :average-center="true">
          <bm-marker
            v-for="(marker, index) of markers"
            :key="index"
            :position="{ lng: marker.lng, lat: marker.lat }"
          ></bm-marker>
        </bml-marker-clusterer>
      </baidu-map>
    </v-container>
    <v-btn
      fab
      color="primary"
      class="tw-fixed tw-bottom-0 tw-right-0 tw-m-8"
      @click="showFilter = !showFilter"
    >
      <v-icon>mdi-map</v-icon>
    </v-btn>
  </div>
</template>

<script>
import { BmlMarkerClusterer } from 'vue-baidu-map'
// 插入 10 个随机点
const markers = []
for (let i = 0; i < 50; i++) {
  const position = {
    lng: Math.random() * 40 + 85,
    lat: Math.random() * 30 + 21,
  }
  markers.push(position)
}
export default {
  name: 'Index',
  data() {
    return {
      showFilter: true,
      projects: [],
      areas: ['所有', '长寿路', '长风', '曹杨', '长征'],
      resultTab: 'project',
      markers,
      center: { lng: 0, lat: 0 },
      zoom: 3,
    }
  },
  async fetch() {
    this.projects = await this.$api.projects.index()
    if (!this.projects) {
      this.$nuxt.error({ statusCode: 404, message: '小区不存在' })
    }
  },
  methods: {
    handler({ BMap, map }) {
      console.log(BMap, map)
      // this.center.lng = 116.404
      // this.center.lat = 39.915
      this.zoom = 15
    },
    prettify(ts) {
      return `${ts} 元`
    },
  },
}
</script>

<style lang="scss" scoped></style>
