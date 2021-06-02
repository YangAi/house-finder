<template>
  <div class="school-unit">
    <section class="tw-bg-gray-100">
      <v-container>
        <v-row>
          <v-col :cols="12" :md="6">
            <s-card-title>数据统计</s-card-title>
            <s-card class="tw-h-48 tw-my-2">
              <v-skeleton-loader type="card" />
            </s-card>
            <s-card class="tw-h-48 tw-my-2">
              <v-skeleton-loader type="card" />
            </s-card>
          </v-col>
          <v-col :cols="12" :md="6">
            <s-card-title>房源列表</s-card-title>
            <s-unit-ershou-card class="tw-my-2" />
            <s-unit-ershou-card-tiny class="tw-my-2" />
            <s-unit-ershou-card-tiny class="tw-my-2" />
            <s-more-card class="tw-h-16" />
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script>
export default {
  name: 'TheSchoolDetailErshou',
  props: {
    school: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
