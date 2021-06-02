<template>
  <div>
    <v-row class="fill-height">
      <v-col cols="6" sm="6" md="6">
        <v-container>
          <s-card class="tw-my-4 tw-px-3">
            <v-container>
              <s-district-selector>
                <s-main-page-title class="tw-px-0">
                  普陀区学校
                  <v-icon small>
                    mdi-pencil
                  </v-icon>
                </s-main-page-title>
              </s-district-selector>
              <the-school-filter-matrix v-model="filter.school" />
            </v-container>
          </s-card>
          <v-expansion-panels v-model="panel" multiple class="tw-block">
            <s-card class="tw-my-4">
              <v-expansion-panel>
                <v-expansion-panel-header>小区筛选</v-expansion-panel-header>
                <v-expansion-panel-content>
                  {{ filter.school }}
                  <the-project-filter-matrix v-model="filter.project" />
                </v-expansion-panel-content>
              </v-expansion-panel>
            </s-card>
            <s-card class="tw-my-4">
              <v-expansion-panel>
                <v-expansion-panel-header>房源筛选</v-expansion-panel-header>
                <v-expansion-panel-content>
                  {{ filter.school }}
                  <the-project-filter-matrix v-model="filter.project" />
                </v-expansion-panel-content>
              </v-expansion-panel>
            </s-card>
          </v-expansion-panels>
          <v-btn block large color="accent" @click="search">
            开始搜索
          </v-btn>
        </v-container>
      </v-col>
      <v-col cols="6" sm="6" md="6" class="tw-bg-accent">
        <v-container>
          <s-main-page-title class="tw-text-white">
            热门学区
          </s-main-page-title>
          <v-row>
            <v-col v-for="m in 6" :key="m" :cols="12" :md="6">
              <s-card>
                <s-card-title small>
                  世界外国语小学
                </s-card-title>
                <s-table-list>
                  <s-table-list-item
                    v-for="n in 3"
                    :key="n"
                    highlight
                    text="中远两湾城"
                    value="8.3万元"
                    @click.native="$router.push('projects/1')"
                  />
                </s-table-list>
              </s-card>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      panel: [0],
      filter: {
        school: {},
        project: {}
      }
    }
  },
  computed: {
    formattedFilter () {
      const school = {}
      for (const key in this.filter.school) {
        school[key] = typeof this.filter.school[key] === 'object' ? this.filter.school[key] : this.filter.school[key]
      }
      return {
        ...school
      }
    }
  },
  methods: {
    search () {
      this.$router.push({
        path: '/schools/search',
        query: {
          ...this.formattedFilter
        }
      })
    }
  }
}
</script>
