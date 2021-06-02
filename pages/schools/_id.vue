<template>
  <main>
    <section class="tw-bg-white">
      <v-container class="tw-pb-0">
        <s-main-page-title>
          {{ school.name }}<span v-if="school.campus">({{ school.campus }})</span>
        </s-main-page-title>
        <s-card-subtitle>
          <s-school-chips />
        </s-card-subtitle>
        <s-tabs v-model="activeSection" mandatory :tabs="['概览', '小区', '房源', '成交']" class="tw-pl-4" />
      </v-container>
    </section>
    <v-tabs-items v-model="activeSection">
      <v-tab-item key="概览">
        <the-school-detail-summary :school="school" />
      </v-tab-item>
      <v-tab-item key="小区">
        <the-school-detail-project :school="school" />
      </v-tab-item>
      <v-tab-item key="房源">
        <the-school-detail-ershou :school="school" />
      </v-tab-item>
      <v-tab-item key="成交">
        <section class="tw-bg-gray-100">
          <the-school-detail-ershou-history :school="school" />
        </section>
      </v-tab-item>
    </v-tabs-items>
  </main>
</template>

<script>
export default {
  name: 'Id',
  data () {
    return {
      activeSection: 0,
      school: {}
    }
  },
  async fetch () {
    try {
      const res = await this.$api.schools.find(this.$route.params.id)
      const projects = await this.$api.projects.index()
      this.school = res
      this.school.projects = projects.content
    } catch (e) {
      //
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
