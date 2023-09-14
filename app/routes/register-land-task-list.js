const { get } = require('../task-list')

module.exports = {
  method: 'GET',
  path: '/land/register-land-task-list',
  options: {
    handler: async (request, h) => {
      const completedTasks = 0
      const totalTasks = 0
      const registrationTasks = get(request).registrationTaskDetails
      return h.view('register-land-task-list', {
        registrationTasks,
        registrationCompletedTasks: completedTasks,
        totalSections: totalTasks
      })
    }
  }
}
