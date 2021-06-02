export default function (data) {
  const xAxisData = []
  const data1 = []
  const data2 = []
  for (let i = 0; i < 100; i++) {
    xAxisData.push('类目' + i)
    data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5)
    data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5)
  }
  return {
    legend: {
      data: ['单价', '总价']
    },
    tooltip: {},
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      data: xAxisData,
      splitLine: {
        show: false
      }
    },
    yAxis: [
      {
        type: 'value',
        name: '单价',
        min: 0,
        max: 100,
        interval: 20,
        axisLabel: {
          formatter: '{value} 元'
        }
      },
      {
        type: 'value',
        name: '总价',
        min: 0,
        max: 100,
        interval: 20,
        axisLabel: {
          formatter: '{value} 万元'
        }
      }
    ],
    series: [
      {
        name: '成交周期',
        type: 'line',
        data: data1,
        emphasis: {
          focus: 'series'
        },
        animationDelay (idx) {
          return idx * 10
        }
      },
      {
        name: '单价',
        type: 'bar',
        data: data1,
        emphasis: {
          focus: 'series'
        },
        animationDelay (idx) {
          return idx * 10
        }
      },
      {
        name: '总价',
        type: 'bar',
        data: data2,
        emphasis: {
          focus: 'series'
        },
        animationDelay (idx) {
          return idx * 10 + 100
        }
      }],
    animationEasing: 'elasticOut',
    animationDelayUpdate (idx) {
      return idx * 5
    }
  }
}
