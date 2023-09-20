const upload = require('../../upload')
const { GEOSPATIAL } = require('../../upload/constants/upload-types')
const { uploadGeospatialFile } = require('./constants/routes')

module.exports = [{
  method: 'GET',
  path: uploadGeospatialFile.get,
  options: {
    handler: async (request, h) => {
      return h.view(uploadGeospatialFile.view)
    }
  }
},
{
  method: 'POST',
  path: uploadGeospatialFile.post,
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
        return h.view(uploadGeospatialFile.view).takeover(400)
      }
    },
    handler: async (request, h) => {
      await upload(request, GEOSPATIAL)
      return h.view(uploadGeospatialFile.view)
    }
  }
}]
