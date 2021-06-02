export default function (data = []) {
  data = {
    nodes: [
      { name: '总计' },
      { name: '两房' },
      { name: '两房一卫' },
      { name: '凯欣豪园' },
      { name: '绿地世纪城(二期)' },
      { name: '万里一期' },
      { name: '虹桥中山广场' },
      { name: '两房两卫' },
      { name: '三房' },
      { name: '三房一卫' },
      { name: '三房两卫' }
    ],
    links: [
      { source: '总计', target: '两房', value: 100 },
      { source: '两房', target: '两房一卫', value: 62 },
      { source: '两房一卫', target: '凯欣豪园', value: 22 },
      { source: '两房一卫', target: '绿地世纪城(二期)', value: 11 },
      { source: '两房一卫', target: '万里一期', value: 24 },
      { source: '两房一卫', target: '虹桥中山广场', value: 5 },
      { source: '两房', target: '两房两卫', value: 38 },
      { source: '两房两卫', target: '凯欣豪园', value: 10 },
      { source: '两房两卫', target: '绿地世纪城(二期)', value: 21 },
      { source: '两房两卫', target: '虹桥中山广场', value: 7 },
      { source: '两房两卫', target: '万里一期', value: 0 },
      { source: '总计', target: '三房', value: 324 },
      { source: '三房', target: '三房一卫', value: 124 },
      { source: '三房一卫', target: '万里一期', value: 34 },
      { source: '三房一卫', target: '绿地世纪城(二期)', value: 50 },
      { source: '三房一卫', target: '凯欣豪园', value: 23 },
      { source: '三房一卫', target: '虹桥中山广场', value: 17 },
      { source: '三房', target: '三房两卫', value: 200 },
      { source: '三房两卫', target: '万里一期', value: 1 },
      { source: '三房两卫', target: '凯欣豪园', value: 102 },
      { source: '三房两卫', target: '绿地世纪城(二期)', value: 88 },
      { source: '三房两卫', target: '虹桥中山广场', value: 9 }
    ]
  }

  return {
    tooltip: {
      trigger: 'item',
      triggerOn: 'mousemove'
    },
    series: [
      {
        type: 'sankey',
        data: data.nodes,
        links: data.links,
        emphasis: {
          focus: 'adjacency'
        },
        levels: [{
          depth: 0,
          itemStyle: {
            color: '#fbb4ae'
          },
          lineStyle: {
            color: 'source',
            opacity: 0.6
          }
        }, {
          depth: 1,
          itemStyle: {
            color: '#b3cde3'
          },
          lineStyle: {
            color: 'source',
            opacity: 0.6
          }
        }, {
          depth: 2,
          itemStyle: {
            color: '#ccebc5'
          },
          lineStyle: {
            color: 'source',
            opacity: 0.6
          }
        }, {
          depth: 3,
          itemStyle: {
            color: '#decbe4'
          },
          lineStyle: {
            color: 'source',
            opacity: 0.6
          }
        }],
        lineStyle: {
          curveness: 0.5
        }
      }
    ]
  }
}
