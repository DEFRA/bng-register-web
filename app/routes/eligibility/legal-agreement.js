const Joi = require('joi')
const eligibilityRoutes = require('./constants/routes').legalAgreement
const eligibilityContent = require('./constants/content').legalAgreement
const { getLegalAgreement, setLegalAgreement } = require('./constants/session')
const { getYesNoRadios } = require('../models/form-component/yes-no-radios')

module.exports = [{
  method: 'GET',
  path: eligibilityRoutes.get,
  options: {
    handler: async (request, h) => {
      const legalAgreement = getLegalAgreement(request)
      return h.view(eligibilityRoutes.view, { ...getYesNoRadios(eligibilityContent.title, eligibilityContent.name, legalAgreement, null, eligibilityContent.options) })
    }
  }
},
{
  method: 'POST',
  path: eligibilityRoutes.post,
  options: {
    validate: {
      payload: Joi.object({
        legalAgreement: Joi.string().required()
      }),
      failAction: async (request, h, error) => {
        return h.view(eligibilityRoutes.view, { ...getYesNoRadios(eligibilityContent.title, eligibilityContent.name, null, eligibilityContent.error, eligibilityContent.options) }).code(400).takeover()
      }
    },
    handler: async (request, h) => {
      const legalAgreement = request.payload.legalAgreement
      setLegalAgreement(request, legalAgreement)
      return h.redirect(eligibilityRoutes.redirect.success)
    }
  }
}]
