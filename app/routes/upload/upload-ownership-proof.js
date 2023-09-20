const upload = require('../../upload')
const { OWNERSHIP } = require('../../upload/constants/upload-types')
const { uploadOwnershipProof } = require('./constants/routes')

module.exports = [{
  method: 'GET',
  path: uploadOwnershipProof.get,
  options: {
    handler: async (request, h) => {
      return h.view(uploadOwnershipProof.view)
    }
  }
},
{
  method: 'POST',
  path: uploadOwnershipProof.post,
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
        return h.view(uploadOwnershipProof.view).takeover(400)
      }
    },
    handler: async (request, h) => {
      await upload(request, OWNERSHIP)
      return h.view(uploadOwnershipProof.view)
    }
  }
}]
