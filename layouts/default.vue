<template>
  <v-app>
    <v-app-bar
      app
      dense
      color="white"
      flat
      class="about tw-border-solid tw-border-b tw-border-gray-100"
    >
      <v-container fluid class="tw-flex tw-py-0">
        <v-avatar
          class="tw-mr-4"
          color="grey darken-1"
          size="32"
          @click="$router.push('/')"
        />

        <v-btn
          v-for="nav of navs"
          :key="nav.link"
          small
          :to="nav.link"
          text
          class="tw-mr-1"
        >
          {{ nav.text }}
        </v-btn>
        <v-responsive max-width="260">
          <v-autocomplete dense flat hide-details rounded solo-inverted />
        </v-responsive>
        <v-spacer />
        <v-btn small icon>
          <v-icon small> mdi-account-outline </v-icon>
        </v-btn>
      </v-container>
    </v-app-bar>
    <v-main>
      <div
        class="
          main-container
          tw-min-h-100 tw-border-t tw-border-gray-100 tw-bg-background
        "
      >
        <nuxt />
        <footer class="tw-bg-gray-700 tw-mt-3 tw-py-8">
          <v-container class="tw-text-center">
            <v-btn
              v-for="nav of navs"
              :key="nav.link"
              dark
              :to="nav.link"
              text
              class="tw-mr-1 tw-text-gray-400"
            >
              {{ nav.text }}
            </v-btn>
          </v-container>
          <v-container class="text-caption tw-text-center tw-text-gray-400">
            Copyright © 2021 超级找房
          </v-container>
        </footer>
      </div>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      navs: [
        {
          text: '二手房',
          link: '/ershou',
        },
        {
          text: '租房',
          link: '/zufang',
        },
        {
          text: '学区找房',
          link: '/schools',
        },
        {
          text: '通勤找房',
          link: '/commute',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.v-input ::v-deep .v-input__control {
  min-height: 28px !important;
  font-size: 14px;
}
</style>
