<template>
  <div>
    <v-tabs v-model="active">
      <v-tab v-for="tab in tabs" :key="tab">
        {{ tab }}
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="active" />
  </div>
</template>

<script>
export default {
  name: 'STabsGroup',
  props: {
    tabs: {
      type: Array,
      default: () => {}
    },
    value: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      section: this.value
    }
  },
  computed: {
    active: {
      get () {
        return this.value || this.section
      },
      set (newVal) {
        this.$emit('input', newVal)
        this.section = newVal
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
