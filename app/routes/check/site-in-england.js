const Joi = require('joi')
const { process, get, statuses } = require('../../task-list')
const { getInEngland, setInEngland } = require('../../session')
const checked  = require('../models/checked')

module.exports = [{
  method: 'GET',
  path: '/land/site-in-england',
  options: {
    handler: async (request, h) => {
      const inEngland = getInEngland(request)
      return h.view('check/site-in-england', { inEngland, checked })
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
        console.log('error', error)
        return h.view('check/site-in-england', { 
          checked,
          err: [{
            text: 'Select yes if the biodiversity gain site is in England',
            href: '#inEngland'
          }]
        }).code(400).takeover()
      }
    },
    handler: async (request, h) => {
      const inEngland = request.payload.inEngland
      console.log('inEngland', inEngland)
      setInEngland(request, inEngland)
      return h.view('check/site-in-england', { inEngland, checked })
    }
  }
}]
