const { process, statuses } = require('../task-list')

module.exports = {
  method: 'GET',
  path: '/check-you-can-register',
  options: {
    handler: async (request, h) => {
      process(request, {
        taskTitle: 'Your details',
        title: 'Add your details'
      }, {
        status: statuses.IN_PROGRESS,
        inProgressUrl: '/check-your-details'
      })
      return h.view('check-you-can-register')
    }
  }
}
