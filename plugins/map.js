import BaiduMap from 'vue-baidu-map'
import Vue from 'vue'
Vue.use(BaiduMap, {
  ak: process.env.VUE_APP_BAIDU_MAP_AK,
})
