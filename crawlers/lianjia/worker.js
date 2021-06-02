const LianjiaCrawler = require('../../classes/lianjia/LianjiaCrawler')

const lianjia = new LianjiaCrawler('sh');

process.on('message', async (projects) => {
  console.log('开始进程：', projects.index)
  for (const project of projects.chunks) {
    await lianjia.getHouseProjectDetail(project)
  }
  console.log('============finished: ', projects.index)
  process.exit(0)
})
