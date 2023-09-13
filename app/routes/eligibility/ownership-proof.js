const Joi = require('joi')
const eligibilityRoutes = require('./constants/routes').ownershipProof
const eligibilityContent = require('./constants/content').ownershipProof
const { getOwnershipProof, setOwnershipProof } = require('./constants/session')
const { getYesNoRadios } = require('../models/form-component/yes-no-radios')

module.exports = [{
  method: 'GET',
  path: eligibilityRoutes.get,
  options: {
    handler: async (request, h) => {
      const ownershipProof = getOwnershipProof(request)
      return h.view(eligibilityRoutes.view, { ...getYesNoRadios(eligibilityContent.title, eligibilityContent.name, ownershipProof, null, eligibilityContent.options) })
    }
  }
},
{
  method: 'POST',
  path: eligibilityRoutes.post,
  options: {
    validate: {
      payload: Joi.object({
        ownershipProof: Joi.string().required()
      }),
      failAction: async (request, h, error) => {
        return h.view(eligibilityRoutes.view, { ...getYesNoRadios(eligibilityContent.title, eligibilityContent.name, null, eligibilityContent.error, eligibilityContent.options) }).code(400).takeover()
      }
    },
    handler: async (request, h) => {
      const ownershipProof = request.payload.ownershipProof
      setOwnershipProof(request, ownershipProof)
      return h.redirect(eligibilityRoutes.redirect.success)
    }
  }
}]
