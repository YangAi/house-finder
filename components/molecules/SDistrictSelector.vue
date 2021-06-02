<template>
  <v-dialog
    v-model="dialog"
    fullscreen
  >
    <template #activator="{ on, attrs }">
      <div v-bind="attrs" v-on="on">
        <slot />
      </div>
    </template>
    <div class="fill-height tw-bg-backgroundDark">
      <s-card max-width="500px" class="tw-m-auto tw-w-full">
        <section>
          <v-container class="tw-bg-indigo-300">
            <h1 dark class="text-h3 tw-text-white">
              {{ form.city || '选择城市' }}
            </h1>
            <s-card-subtitle no-margin dark>
              3231个小区，4.2万套二手房，31.8万条成交记录
            </s-card-subtitle>
          </v-container>
          <v-container v-if="!form.city">
            <s-selectable-group v-model="form.city" :items="['上海', '北京', '深圳', '广州', '杭州']" />
          </v-container>
        </section>
        <section v-if="form.city">
          <v-container class="tw-bg-indigo-500">
            <h1 class="text-h3 tw-text-white">
              {{ form.district || '选择行政区' }}
            </h1>
            <s-card-subtitle v-if="form.district" no-margin dark>
              3231个小区，4.2万套二手房，31.8万条成交记录
            </s-card-subtitle>
          </v-container>
          <v-container v-if="form.city && !form.district">
            <s-selectable-group v-model="form.district" :items="['浦东', '徐汇', '黄埔']" />
          </v-container>
        </section>
        <section v-if="form.district">
          <v-container class="tw-bg-indigo-700">
            <h1 class="text-h3 tw-text-white">
              选择区域
            </h1>
            <s-card-subtitle no-margin dark>
              3231个小区，4.2万套二手房，31.8万条成交记录
            </s-card-subtitle>
          </v-container>
          <v-container>
            <s-selectable-group v-model="form.areas" multiple :items="['北蔡', '碧云', '川沙', '大团镇', '高东', '高行', '航头']" />
          </v-container>
          <v-card-actions>
            <v-spacer />
            <v-btn block color="primary" large>
              开始搜索
            </v-btn>
          </v-card-actions>
        </section>
      </s-card>
    </div>
  </v-dialog>
</template>

<script>
export default {
  name: 'DistrictSelector',
  data () {
    return {
      dialog: false,
      form: {
        city: '上海',
        district: '',
        areas: ['']
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
