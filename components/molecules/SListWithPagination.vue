<template>
  <div v-if="!value.loading" class="list">
    <div v-for="(item, index) of value.content" :key="index" class="list-item">
      <slot name="item" v-bind="item" class="tw-mb-2" />
    </div>
    <v-pagination
      v-model="pageNumber"
      :length="value.totalPages"
    />
  </div>
</template>

<script>
export default {
  name: 'SListWithPagination',
  props: {
    value: {
      type: Object,
      default: () => {
        return {
          loading: true,
          pageable: { pageNumber: 1 },
          content: []
        }
      }
    }
  },
  computed: {
    pageNumber: {
      get () {
        return this.value?.pageable?.pageNumber + 1 || 1
      },
      set (newValue) {
        console.log(newValue, 'new')
        this.$emit('paginate', newValue)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
