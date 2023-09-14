const sections = require('./sections')
const statuses = require('./statuses')
const { getTaskListDetails, setTaskListDetails } = require('./constants/session')

const get = request => {
  const registrationTasks = getTaskListDetails(request)

  if (!registrationTasks) {
    console.log('No registration tasks found in session, using default')
    return JSON.parse(JSON.stringify(sections))
  }

  return registrationTasks
}

const process = (request, taskDetails, options) => {
  const registrationTasks = get(request).registrationTaskDetails
  const affectedTask = registrationTasks.taskList.find(task => task.taskTitle === taskDetails.taskTitle)
  affectedTask.tasks.forEach(task => {
    if (task.title === taskDetails.title && task.status !== statuses.COMPLETED && options.status) {
      task.status = options.status
    }
    task.inProgressUrl = options.inProgressUrl || task.inProgressUrl
  });
  setTaskListDetails(request, registrationTasks)
}

module.exports = { 
  get,
  process,
  statuses
}
