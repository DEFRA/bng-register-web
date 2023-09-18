const upload = require('../../upload')
const { LAND_BOUNDARY } = require('../../upload/constants/upload-types')

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
      await upload(request, LAND_BOUNDARY)

      return h.view('upload/upload-land-boundary')
    }
  }
}]
