const upload = require('../../upload')
const { LOCAL_LAND_CHARGE } = require('../../upload/constants/upload-types')
const { uploadLocalLandCharge } = require('./constants/routes')

module.exports = [{
  method: 'GET',
  path: uploadLocalLandCharge.get,
  options: {
    handler: async (request, h) => {
      return h.view(uploadLocalLandCharge.view)
    }
  }
},
{
  method: 'POST',
  path: uploadLocalLandCharge.post,
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
        return h.view(uploadLocalLandCharge.view).takeover(400)
      }
    },
    handler: async (request, h) => {
      await upload(request, LOCAL_LAND_CHARGE)
      return h.view(uploadMetric.view)
    }
  }
}]
