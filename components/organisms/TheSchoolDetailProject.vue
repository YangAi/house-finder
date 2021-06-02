<template>
  <div class="school-project">
    <section class="tw-bg-gray-100">
      <v-container>
        <v-row>
          <v-col :cols="12" :md="6">
            <s-card-title>数据统计</s-card-title>
            <s-card class="tw-h-48 tw-my-2">
              <s-chart :options="ChartProjectsPriceDistribution(projects)" />
            </s-card>
            <s-card class="tw-h-48 tw-my-2">
              <s-chart :options="ChartProjectsUnitsDistribution(projects)" />
            </s-card>
          </v-col>
          <v-col :cols="12" :md="6">
            <s-card-title>对口小区</s-card-title>
            <s-project-ershou-card-tiny v-for="project of school.projects" :key="project._id" :project="project" class="tw-my-2" />
            <s-more-card class="tw-h-16" />
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script>
import ChartProjectsPriceDistribution from '~/components/organisms/ChartProjectsPriceDistribution'
import ChartProjectsUnitsDistribution from '~/components/organisms/ChartProjectsUnitsDistribution'
export default {
  name: 'TheSchoolDetailProject',
  props: {
    school: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      projects: {}
    }
  },
  async fetch () {
    this.projects = await this.$api.projects.index()
  },
  methods: {
    ChartProjectsPriceDistribution,
    ChartProjectsUnitsDistribution
  }
}
</script>

<style lang="scss" scoped>

</style>
