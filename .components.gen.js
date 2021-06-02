import Vue from 'vue'
import SCard from '/Users/yangai/coding/super-house-finder/components/atoms/SCard.vue'
import SCardSubtitle from '/Users/yangai/coding/super-house-finder/components/atoms/SCardSubtitle.vue'
import SCardTitle from '/Users/yangai/coding/super-house-finder/components/atoms/SCardTitle.vue'
import SChart from '/Users/yangai/coding/super-house-finder/components/atoms/SChart.vue'
import SChip from '/Users/yangai/coding/super-house-finder/components/atoms/SChip.vue'
import SMainPageBreadcrumb from '/Users/yangai/coding/super-house-finder/components/atoms/SMainPageBreadcrumb.vue'
import SMainPageTitle from '/Users/yangai/coding/super-house-finder/components/atoms/SMainPageTitle.vue'
import SPlatformLogo from '/Users/yangai/coding/super-house-finder/components/atoms/SPlatformLogo.vue'
import SSelectableGroup from '/Users/yangai/coding/super-house-finder/components/atoms/SSelectableGroup.vue'
import SSelectableItem from '/Users/yangai/coding/super-house-finder/components/atoms/SSelectableItem.vue'
import STableList from '/Users/yangai/coding/super-house-finder/components/atoms/STableList.vue'
import STableListItem from '/Users/yangai/coding/super-house-finder/components/atoms/STableListItem.vue'
import STabs from '/Users/yangai/coding/super-house-finder/components/atoms/STabs.vue'
import SDistrictSelector from '/Users/yangai/coding/super-house-finder/components/molecules/SDistrictSelector.vue'
import SListWithPagination from '/Users/yangai/coding/super-house-finder/components/molecules/SListWithPagination.vue'
import SMoreCard from '/Users/yangai/coding/super-house-finder/components/molecules/SMoreCard.vue'
import SProjectChips from '/Users/yangai/coding/super-house-finder/components/molecules/SProjectChips.vue'
import SProjectErshouCard from '/Users/yangai/coding/super-house-finder/components/molecules/SProjectErshouCard.vue'
import SProjectErshouCardTiny from '/Users/yangai/coding/super-house-finder/components/molecules/SProjectErshouCardTiny.vue'
import SProjectZufangCard from '/Users/yangai/coding/super-house-finder/components/molecules/SProjectZufangCard.vue'
import SSchoolCard from '/Users/yangai/coding/super-house-finder/components/molecules/SSchoolCard.vue'
import SSchoolChips from '/Users/yangai/coding/super-house-finder/components/molecules/SSchoolChips.vue'
import SSelectMatrix from '/Users/yangai/coding/super-house-finder/components/molecules/SSelectMatrix.vue'
import SSelectMatrixItem from '/Users/yangai/coding/super-house-finder/components/molecules/SSelectMatrixItem.vue'
import SSingleDataCard from '/Users/yangai/coding/super-house-finder/components/molecules/SSingleDataCard.vue'
import STabsGroup from '/Users/yangai/coding/super-house-finder/components/molecules/STabsGroup.vue'
import SUnitErshouCard from '/Users/yangai/coding/super-house-finder/components/molecules/SUnitErshouCard.vue'
import SUnitErshouCardTiny from '/Users/yangai/coding/super-house-finder/components/molecules/SUnitErshouCardTiny.vue'
import SUnitZufangCard from '/Users/yangai/coding/super-house-finder/components/molecules/SUnitZufangCard.vue'
import TheProjectDetailErshou from '/Users/yangai/coding/super-house-finder/components/organisms/TheProjectDetailErshou.vue'
import TheProjectDetailHistory from '/Users/yangai/coding/super-house-finder/components/organisms/TheProjectDetailHistory.vue'
import TheProjectDetailMap from '/Users/yangai/coding/super-house-finder/components/organisms/TheProjectDetailMap.vue'
import TheProjectDetailSummary from '/Users/yangai/coding/super-house-finder/components/organisms/TheProjectDetailSummary.vue'
import TheProjectDetailSummaryInfoMatrix from '/Users/yangai/coding/super-house-finder/components/organisms/TheProjectDetailSummaryInfoMatrix.vue'
import TheProjectDetailZufang from '/Users/yangai/coding/super-house-finder/components/organisms/TheProjectDetailZufang.vue'
import TheProjectFilterMatrix from '/Users/yangai/coding/super-house-finder/components/organisms/TheProjectFilterMatrix.vue'
import TheSchoolDetailErshou from '/Users/yangai/coding/super-house-finder/components/organisms/TheSchoolDetailErshou.vue'
import TheSchoolDetailErshouHistory from '/Users/yangai/coding/super-house-finder/components/organisms/TheSchoolDetailErshouHistory.vue'
import TheSchoolDetailProject from '/Users/yangai/coding/super-house-finder/components/organisms/TheSchoolDetailProject.vue'
import TheSchoolDetailSummary from '/Users/yangai/coding/super-house-finder/components/organisms/TheSchoolDetailSummary.vue'
import TheSchoolFilterMatrix from '/Users/yangai/coding/super-house-finder/components/organisms/TheSchoolFilterMatrix.vue'

Vue.component('SCard', SCard)
Vue.component('SCardSubtitle', SCardSubtitle)
Vue.component('SCardTitle', SCardTitle)
Vue.component('SChart', SChart)
Vue.component('SChip', SChip)
Vue.component('SMainPageBreadcrumb', SMainPageBreadcrumb)
Vue.component('SMainPageTitle', SMainPageTitle)
Vue.component('SPlatformLogo', SPlatformLogo)
Vue.component('SSelectableGroup', SSelectableGroup)
Vue.component('SSelectableItem', SSelectableItem)
Vue.component('STableList', STableList)
Vue.component('STableListItem', STableListItem)
Vue.component('STabs', STabs)
Vue.component('SDistrictSelector', SDistrictSelector)
Vue.component('SListWithPagination', SListWithPagination)
Vue.component('SMoreCard', SMoreCard)
Vue.component('SProjectChips', SProjectChips)
Vue.component('SProjectErshouCard', SProjectErshouCard)
Vue.component('SProjectErshouCardTiny', SProjectErshouCardTiny)
Vue.component('SProjectZufangCard', SProjectZufangCard)
Vue.component('SSchoolCard', SSchoolCard)
Vue.component('SSchoolChips', SSchoolChips)
Vue.component('SSelectMatrix', SSelectMatrix)
Vue.component('SSelectMatrixItem', SSelectMatrixItem)
Vue.component('SSingleDataCard', SSingleDataCard)
Vue.component('STabsGroup', STabsGroup)
Vue.component('SUnitErshouCard', SUnitErshouCard)
Vue.component('SUnitErshouCardTiny', SUnitErshouCardTiny)
Vue.component('SUnitZufangCard', SUnitZufangCard)
Vue.component('TheProjectDetailErshou', TheProjectDetailErshou)
Vue.component('TheProjectDetailHistory', TheProjectDetailHistory)
Vue.component('TheProjectDetailMap', TheProjectDetailMap)
Vue.component('TheProjectDetailSummary', TheProjectDetailSummary)
Vue.component('TheProjectDetailSummaryInfoMatrix', TheProjectDetailSummaryInfoMatrix)
Vue.component('TheProjectDetailZufang', TheProjectDetailZufang)
Vue.component('TheProjectFilterMatrix', TheProjectFilterMatrix)
Vue.component('TheSchoolDetailErshou', TheSchoolDetailErshou)
Vue.component('TheSchoolDetailErshouHistory', TheSchoolDetailErshouHistory)
Vue.component('TheSchoolDetailProject', TheSchoolDetailProject)
Vue.component('TheSchoolDetailSummary', TheSchoolDetailSummary)
Vue.component('TheSchoolFilterMatrix', TheSchoolFilterMatrix)
