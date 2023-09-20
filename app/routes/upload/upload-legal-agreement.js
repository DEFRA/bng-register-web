const upload = require('../../upload')
const { LEGAL_AGREEMENT } = require('../../upload/constants/upload-types')
const { uploadLegalAgreement } = require('./constants/routes')

module.exports = [{
  method: 'GET',
  path: uploadLegalAgreement.get,
  options: {
    handler: async (request, h) => {
      return h.view(uploadLegalAgreement.view)
    }
  }
},
{
  method: 'POST',
  path: uploadLegalAgreement.post,
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
        return h.view(uploadLegalAgreement.view).takeover(400)
      }
    },
    handler: async (request, h) => {
      await upload(request, LEGAL_AGREEMENT)

      return h.view(uploadLegalAgreement.view)
    }
  }
}]
