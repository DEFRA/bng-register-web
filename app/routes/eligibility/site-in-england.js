const Joi = require('joi')
const eligibilityRoutes = require('./constants/routes').siteInEngland
const eligibilityContent = require('./constants/content').siteInEngland
const { getInEngland, setInEngland } = require('./constants/session')
const { getYesNoRadios } = require('../models/form-component/yes-no-radios')

module.exports = [{
  method: 'GET',
  path: eligibilityRoutes.get,
  options: {
    handler: async (request, h) => {
      const inEngland = getInEngland(request)
      return h.view(eligibilityRoutes.view, { ...getYesNoRadios(eligibilityContent.title, eligibilityContent.name, inEngland, null, eligibilityContent.options) })
    }
  }
},
{
  method: 'POST',
  path: eligibilityRoutes.post,
  options: {
    validate: {
      payload: Joi.object({
        inEngland: Joi.string().required()
      }),
      failAction: async (request, h, error) => {
        return h.view(eligibilityRoutes.view, { ...getYesNoRadios(eligibilityContent.title, eligibilityContent.name, null, eligibilityContent.error, eligibilityContent.options) }).code(400).takeover()
      }
    },
    handler: async (request, h) => {
      const inEngland = request.payload.inEngland
      setInEngland(request, inEngland)
      if (inEngland === 'yes') {
        return h.redirect(eligibilityRoutes.redirect.success)
      } else {
        return h.redirect(eligibilityRoutes.redirect.failure)
      }
    }
  }
}]
