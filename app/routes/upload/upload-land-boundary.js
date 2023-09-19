const upload = require('../../upload')
const { LAND_BOUNDARY } = require('../../upload/constants/upload-types')

const route = '/upload-land-boundary'

module.exports = [{
  method: 'GET',
  path: route,
  options: {
    handler: async (request, h) => {
      return h.view(`upload/${route}`)
    }
  }
},
{
  method: 'POST',
  path: route,
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
        return h.view(`upload/${route}`).takeover(400)
      }
    },
    handler: async (request, h) => {
      await upload(request, LAND_BOUNDARY)
      return h.view(`upload/${route}`)
    }
  }
}]
