const Joi = require('joi')
const eligibilityContent = require('../../constants/eligibility-content').siteInEngland
const { process, get, statuses } = require('../../task-list')
const { getInEngland, setInEngland } = require('../../session')
const { getYesNoRadios } = require('../models/form-component/yes-no-radios')

module.exports = [{
  method: 'GET',
  path: '/land/site-in-england',
  options: {
    handler: async (request, h) => {
      const inEngland = getInEngland(request)
      return h.view('eligibility/site-in-england', { ...getYesNoRadios(eligibilityContent.title, eligibilityContent.name, inEngland, null, eligibilityContent.options) })
    }
  }
},
{
  method: 'POST',
  path: '/land/site-in-england',
  options: {
    validate: {
      payload: Joi.object({
        inEngland: Joi.string().required()
      }),
      failAction: async (request, h, error) => {
        return h.view('eligibility/site-in-england', { ...getYesNoRadios(eligibilityContent.title, eligibilityContent.name, null, eligibilityContent.error, eligibilityContent.options) }).code(400).takeover()
      }
    },
    handler: async (request, h) => {
      const inEngland = request.payload.inEngland
      setInEngland(request, inEngland)
      return h.view('eligibility/site-in-england', { ...getYesNoRadios(eligibilityContent.title, eligibilityContent.name, inEngland, null, eligibilityContent.options) })
    }
  }
}]
