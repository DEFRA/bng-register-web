const upload = require('../../upload')
const { MANAGEMENT_PLAN } = require('../../upload/constants/upload-types')
const { uploadManagementPlan } = require('./constants/routes')

module.exports = [{
  method: 'GET',
  path: uploadManagementPlan.get,
  options: {
    handler: async (request, h) => {
      return h.view(uploadManagementPlan.view)
    }
  }
},
{
  method: 'POST',
  path: uploadManagementPlan.post,
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
        return h.view(uploadManagementPlan.view).takeover(400)
      }
    },
    handler: async (request, h) => {
      await upload(request, MANAGEMENT_PLAN)
      return h.view(uploadManagementPlan.view)
    }
  }
}]
