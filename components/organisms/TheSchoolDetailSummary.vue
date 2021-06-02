<template>
  <div class="school-summary">
    <section class="tw-bg-accent">
      <v-container>
        <div class="tw-grid tw-grid-cols-3 tw-gap-4">
          <s-single-data-card dense text="对口小区" :value="8" unit="个" />
          <s-single-data-card dense text="在售房源" :value="18" unit="套" />
          <s-single-data-card dense text="学区均价" :value="8.2" unit="万元" />
        </div>
      </v-container>
    </section>
    <section class="two-color-background">
      <v-container>
        <v-row>
          <v-col :cols="12" :md="6">
            <v-card-title>学校资料</v-card-title>
            <s-table-list :items="school.displayPropertyList" />
          </v-col>
          <v-col :cols="12" :md="6">
            <s-card-title>小道消息</s-card-title>
            <v-container>
              <s-card>
                <v-container>
                  <blockquote>家长心目中的“香饽饽”，被公认为徐汇区四大民办之首</blockquote>
                  <s-card-subtitle no-margin>
                    公众号
                  </s-card-subtitle>
                </v-container>
              </s-card>
            </v-container>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script>
export default {
  name: 'TheSchoolDetailSummary',
  props: {
    school: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.two-color-background {
  background-image: linear-gradient(
          90deg
      , #fff 50%, #fafafa 50%);;
}
</style>
