const Joi = require('joi')
const eligibilityRoutes = require('./constants/routes').habitatManagementPlan
const eligibilityContent = require('./constants/content').habitatManagementPlan
const { getHabitatManagementPlan, setHabitatManagementPlan } = require('./constants/session')
const { getYesNoRadios } = require('../models/form-component/yes-no-radios')

module.exports = [{
  method: 'GET',
  path: eligibilityRoutes.get,
  options: {
    handler: async (request, h) => {
      const habitatManagementPlan = setHabitatManagementPlan(request)
      return h.view(eligibilityRoutes.view, { ...getYesNoRadios(eligibilityContent.title, eligibilityContent.name, habitatManagementPlan, null, eligibilityContent.options) })
    }
  }
},
{
  method: 'POST',
  path: eligibilityRoutes.post,
  options: {
    validate: {
      payload: Joi.object({
        hmmp: Joi.string().required()
      }),
      failAction: async (request, h, error) => {
        return h.view(eligibilityRoutes.view, { ...getYesNoRadios(eligibilityContent.title, eligibilityContent.name, null, eligibilityContent.error, eligibilityContent.options) }).code(400).takeover()
      }
    },
    handler: async (request, h) => {
      const habitatManagementPlan = request.payload.hmmp
      setHabitatManagementPlan(request, habitatManagementPlan)
      return h.redirect(eligibilityRoutes.redirect.success)
    }
  }
}]
