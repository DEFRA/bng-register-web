const upload = require('../../upload')
const { METRIC } = require('../../upload/constants/upload-types')
const { uploadMetric } = require('./constants/routes')

module.exports = [{
  method: 'GET',
  path: uploadMetric.get,
  options: {
    handler: async (request, h) => {
      return h.view(uploadMetric.view)
    }
  }
},
{
  method: 'POST',
  path: uploadMetric.post,
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
        return h.view(uploadMetric.view).takeover(400)
      }
    },
    handler: async (request, h) => {
      await upload(request, METRIC)
      return h.view(uploadMetric.view)
    }
  }
}]
