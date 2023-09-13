const { get, set } = require('../../session')
const keys = require('./keys')

const entries = {
  taskListDetails: 'registrationTaskDetails'
}

const getTaskListDetails = (request) => {
  return get(request, entries.taskListDetails)
}

const setTaskListDetails = (request, value) => {
  set(request, entries.taskListDetails, keys.taskList.registrationTaskDetails, value)
}

module.exports = {
  getTaskListDetails,
  setTaskListDetails
}
