const { Readable } = require('stream')
const { uploadInboundFile } = require('../../storage')

module.exports = [{
  method: 'GET',
  path: '/land/upload-land-boundary',
  options: {
    handler: async (request, h) => {
      return h.view('upload/upload-land-boundary')
    }
  }
},
{
  method: 'POST',
  path: '/land/upload-land-boundary',
  options: {
    plugins: {
      crumb: false
    },
    payload: {
      maxBytes: (50 * 1024 * 1024) + 250,
      multipart: true,
      timeout: false,
      output: 'stream',
      parse: true,
      allow: 'multipart/form-data',
      failAction: (request, h, err) => {
        console.log(err)
        return h.view('upload/upload-land-boundary').takeover(400)
      }
    },
    handler: async (request, h) => {
      const filename = request.payload.landBoundary.hapi.filename
      const fileBuffer = request.payload.landBoundary._data
      const stream = new Readable()
      stream.push(fileBuffer)
      stream.push(null)
      const blobClient = await uploadInboundFile(stream, filename)

      const maxTime = 10000
      const interval = 100
      let scanDone = false
      let timeTaken = 0
      let tags

      do {
        tags = await blobClient.getTags()
        scanDone = tags.blobTagSet.length !== 0
        await new Promise(resolve => setTimeout(resolve, interval))
        timeTaken += interval
      } while (!scanDone && (timeTaken < maxTime))

      if (scanDone) {
        console.log(`Scan results ready in ${timeTaken / 1000} seconds`)
        console.log(`Scan result: ${tags.blobTagSet[0].value}`)
      } else {
        console.log(`Scan results not ready after ${maxTime / 1000} seconds`)
      }

      return h.view('upload/upload-land-boundary')
    }
  }
}]
