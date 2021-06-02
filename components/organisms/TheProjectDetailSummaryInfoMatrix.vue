<template>
  <div>
    <s-table-list two-columns>
      <s-table-list-item
        text="楼栋总数"
        :value="`${project.buildingCount}栋`"
      />
      <s-table-list-item
        text="房屋数量"
        :value="`${project.houseUnitCount}间`"
      />
      <s-table-list-item
        v-for="item of project.displayPropertyList"
        :key="item.key"
        :text="item.key"
        :value="item.value"
      />
    </s-table-list>
  </div>
</template>

<script>
export default {
  name: 'TheProjectInfoMatrix',
  props: {
    project: {
      type: Object,
    },
  },
}
</script>

<style lang="scss" scoped></style>
