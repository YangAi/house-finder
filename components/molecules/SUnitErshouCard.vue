<template>
  <s-card class="tw-cursor-pointer" @click.native="$router.push('/projects/1')">
    <v-container class="tw-flex">
      <div class="tw-w-full">
        <s-card-subtitle no-margin>
          <span class="tw-text-green-500 tw-pb-1">新</span> 长寿路 · 普陀区
        </s-card-subtitle>
        <s-card-title no-margin>
          中远两湾城 3室2厅 88平米
        </s-card-title>
        <div class="tw-my-1">
          <s-chip color="red">
            满五年
          </s-chip>
          <s-chip color="blue">
            朝南
          </s-chip>
          <s-chip color="blue">
            精装修
          </s-chip>
        </div>
        <s-card-subtitle class="tw-pb-0">
          好学区 · 近地铁 (小区标签)
        </s-card-subtitle>
      </div>
      <v-divider vertical class="tw-mx-4" />
      <div class="tw-flex tw-flex-col tw-text-right tw-w-32 bg-red-100">
        <div class="tw-font-semibold tw-font-number tw-text-2xl tw-text-red-500">
          831<span class="tw-text-sm"> 万</span>
        </div>
        <s-card-subtitle no-margin>
          64678元/平米
        </s-card-subtitle>
        <!--          <s-card-subtitle no-margin class="tw-text-green-500">新上线</s-card-subtitle>-->
        <v-spacer />
        <s-platform-logo platform="贝壳" size="24" logo-on-right />
      </div>
    </v-container>
  </s-card>
</template>

<script>
export default {
  name: 'UnitErshouCard'
}
</script>

<style lang="scss" scoped>

</style>
