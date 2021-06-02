const LianjiaCrawler = require('../../classes/lianjia/LianjiaCrawler.js')
const Csv = require('../../classes/Csv.js')
const lianJia = new LianjiaCrawler('sh');

(async () => {
  const districts = await lianJia.getDistricts()
  console.log(districts)
  await Csv.to('../../data/districts.csv', districts)
  const areas = await lianJia.getUniqueAreasByDistricts(districts)
  console.log(areas)
  await Csv.to('../../data/areas.csv', areas)
  console.log('================================================finished')
  process.exit(0)
})()
