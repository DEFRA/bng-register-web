const Joi = require('joi')
const eligibilityRoutes = require('./constants/routes').boundary
const eligibilityContent = require('./constants/content').boundary
const { getBoundary, setBoundary } = require('./constants/session')
const { getYesNoRadios } = require('../models/form-component/yes-no-radios')

module.exports = [{
  method: 'GET',
  path: eligibilityRoutes.get,
  options: {
    handler: async (request, h) => {
      const boundary = getBoundary(request)
      return h.view(eligibilityRoutes.view, { ...getYesNoRadios(eligibilityContent.title, eligibilityContent.name, boundary, null, eligibilityContent.options) })
    }
  }
},
{
  method: 'POST',
  path: eligibilityRoutes.post,
  options: {
    validate: {
      payload: Joi.object({
        boundary: Joi.string().required()
      }),
      failAction: async (request, h, error) => {
        return h.view(eligibilityRoutes.view, { ...getYesNoRadios(eligibilityContent.title, eligibilityContent.name, null, eligibilityContent.error, eligibilityContent.options) }).code(400).takeover()
      }
    },
    handler: async (request, h) => {
      const boundary= request.payload.boundary
      setBoundary(request, boundary)
      return h.redirect(eligibilityRoutes.redirect.success)
    }
  }
}]
