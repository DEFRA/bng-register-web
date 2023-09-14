const { get } = require('../task-list')

module.exports = {
  method: 'GET',
  path: '/land/register-land-task-list',
  options: {
    handler: async (request, h) => {
      let completedTasks = 0
      let totalTasks = 0
      const registrationTasks = get(request).registrationTaskDetails
      return h.view('register-land-task-list', { 
        registrationTasks, 
        registrationCompletedTasks: completedTasks,
        totalSections: totalTasks  })
    }
  }
}