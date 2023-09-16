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

      for (let i = 0; i < 5; i++) {
        const tags = await blobClient.getTags()
        console.log('TAGS:')
        console.log(tags)
        await new Promise(resolve => setTimeout(resolve, 1000))
      }

      return h.view('upload/upload-land-boundary')
    }
  }
}]
