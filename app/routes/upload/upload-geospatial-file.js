const upload = require('../../upload')
const { GEOSPATIAL } = require('../../upload/constants/upload-types')

const route = 'upload-geospatial-file'

module.exports = [{
  method: 'GET',
  path: `/land/${route}`,
  options: {
    handler: async (request, h) => {
      return h.view(`upload/${route}`)
    }
  }
},
{
  method: 'POST',
  path: `/land/${route}`,
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
      await upload(request, GEOSPATIAL)
      return h.view(`upload/${route}`)
    }
  }
}]
