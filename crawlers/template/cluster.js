const cluster = require('cluster')
const os = require('os')
const program = require('./program')

const maxCPU = 1

const cpuCount = maxCPU || os.cpus().length - 2;

(async () => {
  if (cluster.isMaster) {
    console.time('总时间')

    const { chunks, maxPage } = await program.prepareDataChunks(cpuCount)
    let page = 0
    for (let i = 0; i < cpuCount; i++) {
      const worker = cluster.fork()
      setTimeout(() => {
        worker.send({
          chunk: chunks[page],
          page
        })
        page++
      }, 100)

      worker.on('message', async (payload) => {
        await program.workerCallback(payload)

        if (maxPage === payload.page) {
          await program.finishedCallback()
          console.timeEnd('总时间')
          process.exit(0)
        } else {
          worker.send({
            chunk: chunks[page],
            page
          })
          page++
        }
      })
    }
  } else {
    await program.childProcess()
  }
})()
