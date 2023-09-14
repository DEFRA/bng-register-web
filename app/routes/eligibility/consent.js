const Joi = require('joi')
const eligibilityRoutes = require('./constants/routes').consent
const eligibilityContent = require('./constants/content').consent
const { getConsent, setConsent } = require('./constants/session')
const { getYesNoRadios } = require('../models/form-component/yes-no-radios')

module.exports = [{
  method: 'GET',
  path: eligibilityRoutes.get,
  options: {
    handler: async (request, h) => {
      const consent = getConsent(request)
      return h.view(eligibilityRoutes.view, { ...getYesNoRadios(eligibilityContent.title, eligibilityContent.name, consent, null, eligibilityContent.options) })
    }
  }
},
{
  method: 'POST',
  path: eligibilityRoutes.post,
  options: {
    validate: {
      payload: Joi.object({
        consent: Joi.string().required()
      }),
      failAction: async (request, h, error) => {
        return h.view(eligibilityRoutes.view, { ...getYesNoRadios(eligibilityContent.title, eligibilityContent.name, null, eligibilityContent.error, eligibilityContent.options) }).code(400).takeover()
      }
    },
    handler: async (request, h) => {
      const consent = request.payload.consent
      setConsent(request, consent)
      return h.redirect(eligibilityRoutes.redirect.success)
    }
  }
}]
