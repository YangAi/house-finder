<template>
  <div>
    <section>
      <v-container class="tw-grid tw-grid-cols-2 tw-gap-4">
        <s-card>
          <s-card-title class="tw-pb-0">在售均价</s-card-title>
          <s-chart
            v-if="series.price"
            height="150"
            type="bar"
            :options="priceOptions"
            :series="series.price"
          />
        </s-card>
        <s-card>
          <s-card-title class="tw-pb-0">在售户型</s-card-title>
          <s-chart
            v-if="series.amount.labels"
            height="150"
            type="pie"
            :options="amountOptions"
            :series="series.amount.values"
          />
        </s-card>
      </v-container>
    </section>
    <section class="tw-bg-white">
      <v-container>
        <s-card-title>
          在售二手房
          <v-spacer />
          <v-text-field v-model="search" solo label="搜索" />
        </s-card-title>
        <v-data-table
          :search="search"
          multi-sort
          show-expand
          :expanded.sync="expanded"
          :single-expand="true"
          item-key="_id"
          :headers="headers"
          :loading="loading"
          :items="items"
        >
          <template #item.houseSize="{ value }">
            {{ _.round(value, 1)
            }}<span class="tw-text-xs"> m<sup>2</sup></span>
          </template>
          <template #item.blurredFloor="{ item }">
            {{ item.blurredFloor
            }}<span class="tw-text-xs"> (共{{ item.totalFloor }}层)</span>
          </template>
          <template #item.totalAmount="{ value }">
            {{ value }}<span class="tw-text-xs"> 万元</span>
          </template>
          <!--          <template v-slot:item.availableDate="{ item }">-->
          <!--            {{ dayjs }}-->
          <!--          </template>-->
          <template #item.actions="{ item }">
            <v-btn x-small text color="primary">打开{{ item.platform }}</v-btn>
          </template>
          <template #expanded-item="{ headers, item }">
            <td :colspan="headers.length" class="tw-shadow-none tw-bg-gray-50">
              <v-container>
                <s-data-list two-columns>
                  <s-data-list-item
                    v-for="(value, key) of concatProperties(item)"
                    :key="key"
                    :text="key"
                    :value="value"
                  />
                </s-data-list>
              </v-container>
            </td>
          </template>
        </v-data-table>
      </v-container>
    </section>
  </div>
</template>

<script>
export default {
  name: 'TheProjectDetailErshou',
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      loading: true,
      search: '',
      items: [],
      headers: [
        { text: '', value: 'data-table-expand' },
        { text: '户型', value: 'houseType', width: 100 },
        { text: '朝向', value: 'orientation', width: 80 },
        { text: '面积', value: 'houseSize', width: 100 },
        { text: '楼层', value: 'blurredFloor', width: 120 },
        { text: '装修', value: 'renovationStatus', width: 120 },
        { text: '总价', value: 'totalAmount', width: 100 },
        { text: '单价', value: 'unitPrice', width: 90 },
        { text: '挂牌', value: 'onSaleDate', width: 180 },
        { text: '', value: 'actions' },
      ],
      expanded: [],
      priceOptions: {
        xaxis: { type: 'category' },
        chart: {
          animations: {
            dynamicAnimation: {
              // enabled: false
            },
          },
        },
      },
    }
  },
  computed: {
    series() {
      const series = {
        price: [{ data: [] }],
        amount: {
          labels: [],
          values: [],
        },
      }
      const groups = this.$_.groupBy(this.items, 'houseType')
      console.log('rrr')
      for (const groupName in groups) {
        series.price[0].data.push({
          x: groupName,
          y:
            this.$_.round(this.$_.meanBy(groups[groupName], 'unitPrice'), 0) +
            '元',
        })
        series.amount.labels.push(groupName)
        series.amount.values.push(groups[groupName].length)
      }
      return series
    },
    amountOptions() {
      return {
        labels: this.series.amount.labels,
        chart: {
          animations: {
            dynamicAnimation: {
              enabled: false,
            },
          },
        },
      }
    },
  },
  watch: {
    'project.name': {
      async handler() {
        if (!this.project.name) return
        this.loading = true
        try {
          // this.items = await this.$api.units.get(`project/${this.project._id}`)
        } catch (e) {
          console.log(e)
        }
        this.loading = false
      },
      immediate: true,
    },
  },
  methods: {
    concatProperties(item) {
      if (!item) return []
      return {
        ...item.baseAttributes,
        ...item.transactionAttributes,
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
