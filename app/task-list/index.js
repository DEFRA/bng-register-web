const sections = require('./sections')
const statuses = require('./statuses')
const { getTaskListDetails, setTaskListDetails } = require('../session')

const get = request => {
  const registrationTasks = getTaskListDetails(request)
  return registrationTasks || JSON.parse(JSON.stringify(sections))
}

const process = (request, taskDetails, options) => {
  const registrationTasks = get(request)
  const affectedTask = registrationTasks.taskList.find(task => task.taskTitle === taskDetails.taskTitle)
  affectedTask.tasks.forEach(task => {
    if (task.title === taskDetails.title && task.status !== statuses.COMPLETED && options.status) {
      task.status = options.status
    }
    task.inProgressUrl = options.inProgressUrl || task.inProgressUrl
  });
  getTaskListDetails(request, registrationTasks)
}

module.exports = { 
  get,
  process,
  statuses
}
