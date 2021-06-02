<template>
  <v-container>
    <v-row>
      <v-col :cols="3">
        <s-card class="tw-sticky">
          <v-container>
            <the-school-filter-matrix v-model="filter.project" />
          </v-container>
        </s-card>
      </v-col>
      <v-col :cols="9">
        <v-container class="tw-w-full">
          <s-main-page-title>共 {{ res.totalElements }}  所学校</s-main-page-title>
          <s-list-with-pagination v-model="res" @paginate="paginate">
            <template #item="item">
              <s-school-card :item="item" class="tw-mb-2" />
            </template>
          </s-list-with-pagination>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      filter: {
        school: {},
        project: {}
      },
      res: {}
    }
  },
  async fetch () {
    const res = await this.loadData()
    console.log(res)
    this.res = res
  },
  methods: {
    async paginate (pageNumber) {
      this.res = await this.loadData(pageNumber)
      this.$route.query.pageNumber = pageNumber
      window.scrollTo(0, 0)
    },
    loadData (pageNumber = 1) {
      return this.$api.schools.index({
        type: this.$route.query.type || '',
        nature: this.$route.query.nature || '',
        tags: this.$route.query.tags || '',
        pageNumber
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
