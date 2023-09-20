const upload = require('../../upload')
const { LAND_BOUNDARY } = require('../../upload/constants/upload-types')
const { uploadLandBoundary } = require('./constants/routes')

module.exports = [{
  method: 'GET',
  path: uploadLandBoundary.get,
  options: {
    handler: async (request, h) => {
      return h.view(uploadLandBoundary.view)
    }
  }
},
{
  method: 'POST',
  path: uploadLandBoundary.post,
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
        return h.view(uploadLandBoundary.view).takeover(400)
      }
    },
    handler: async (request, h) => {
      await upload(request, LAND_BOUNDARY)
      return h.view(uploadLandBoundary.view)
    }
  }
}]
