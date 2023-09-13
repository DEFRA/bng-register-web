const { process, get, statuses } = require('../task-list')

module.exports = {
  method: 'GET',
  path: '/land/check-you-can-register',
  options: {
    handler: async (request, h) => {
      process(request, {
        taskTitle: 'Your details',
        title: 'Add your details'
      }, {
        status: statuses.IN_PROGRESS,
        inProgressUrl: '/land/check-your-details'
      })
      return h.view('check-you-can-register')
    }
  }
}
