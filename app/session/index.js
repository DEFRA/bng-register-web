const entries = {
  taskListDetails: 'registrationTaskDetails'
}

const set = (request, entryKey, value) => {
  const entryValue = request.yar?.get(entryKey) || {}
  request.yar.set(entryKey, entryValue)
}

const get = (request, entryKey, key) => {
  return key ? request.yar?.get(entryKey)?.[key] : request.yar?.get(entryKey)
}

const getTaskListDetails = (request) => {
  return get(request, entries.taskListDetails)
}

const setTaskListDetails = (request, value) => {
  set(request, entries.taskListDetails, value)
}

module.exports = {
  getTaskListDetails,
  setTaskListDetails
}
