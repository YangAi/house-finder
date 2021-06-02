// const data = [
//   {
//     name: '新湖明珠城',
//     unitPrice
//   }
// ]

function convertData (data) {
  const projects = data.content || []
  return projects.map((project) => {
    return {
      name: project.name,
      unit: project.houseUnitCount,
      price: project.averagePrice
    }
  })
}

export default function (data) {
  return {
    dataset: {
      dimensions: ['name', 'unit', 'price'],
      source: convertData(data)
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['小区户数', '小区单价'],
      selectedMode: 'single'
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      boundaryGap: [0, 0.01],
      realtimeSort: true
    },
    yAxis: {
      type: 'category',
      max: 5
    },
    series: [
      {
        name: '小区户数',
        type: 'bar'
      },
      {
        name: '小区单价',
        type: 'bar'
      }
    ]
  }
}
