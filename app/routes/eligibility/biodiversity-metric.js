const Joi = require('joi')
const eligibilityRoutes = require('./constants/routes').biodiversityMetric
const eligibilityContent = require('./constants/content').biodiversityMetric
const { getBiodiversityMetric, setBiodiversityMetric } = require('./constants/session')
const { getYesNoRadios } = require('../models/form-component/yes-no-radios')

module.exports = [{
  method: 'GET',
  path: eligibilityRoutes.get,
  options: {
    handler: async (request, h) => {
      const biodiversityMetric = getBiodiversityMetric(request)
      return h.view(eligibilityRoutes.view, { ...getYesNoRadios(eligibilityContent.title, eligibilityContent.name, biodiversityMetric, null, eligibilityContent.options) })
    }
  }
},
{
  method: 'POST',
  path: eligibilityRoutes.post,
  options: {
    validate: {
      payload: Joi.object({
        metric: Joi.string().required()
      }),
      failAction: async (request, h, error) => {
        return h.view(eligibilityRoutes.view, { ...getYesNoRadios(eligibilityContent.title, eligibilityContent.name, null, eligibilityContent.error, eligibilityContent.options) }).code(400).takeover()
      }
    },
    handler: async (request, h) => {
      const biodiversityMetric = request.payload.metric
      setBiodiversityMetric(request, biodiversityMetric)
      return h.redirect(eligibilityRoutes.redirect.success)
    }
  }
}]
