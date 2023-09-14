const eligibilityRoutes = require('./constants/routes').results
const eligibilityContent = require('./constants/content').results
const { getResults } = require('./constants/session')

module.exports = {
  method: 'GET',
  path: eligibilityRoutes.get,
  options: {
    handler: async (request, h) => {
      const eligibilityResults = getResults(request)
      return h.view(eligibilityRoutes.view, { eligibilityResults, eligibilityHTML: eligibilityContent.html })
    }
  }
}
