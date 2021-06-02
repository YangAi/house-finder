<template>
  <s-select-matrix>
    <s-select-matrix-item v-model="innerValue.type" mandatory label="学校分类" :items="['小学', '初中']" />
    <s-select-matrix-item v-model="innerValue.nature" multiple label="办学类型" :items="['公办', '民办']" />
    <s-select-matrix-item v-model="innerValue.tags" multiple label="学校标签" :items="['口碑学校', '师资好', '设施好', '师生比好', '九年一贯制', '可住宿']" />
  </s-select-matrix>
</template>

<script>
export default {
  name: 'TheSchoolSelectMatrix',
  props: {
    value: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    innerValue: {
      get () {
        return this.value
      },
      set (newValue) {
        this.$emit('input', newValue)
      }
    }
  },
  created () {
    this.innerValue = {
      type: [],
      nature: [],
      teacher: []
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
