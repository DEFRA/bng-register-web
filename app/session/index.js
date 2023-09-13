const keys = require('./keys')

const entries = {
  taskListDetails: 'registrationTaskDetails',
  eligibility: 'eligibility',
}

const set = (request, entryKey, key, value) => {
  const entryValue = request.yar?.get(entryKey) || {}
  entryValue[key] = typeof (value) === 'string' ? value.trim() : value
  request.yar.set(entryKey, entryValue)
}

const get = (request, entryKey, key) => {
  return key ? request.yar?.get(entryKey)?.[key] : request.yar?.get(entryKey)
}

const getTaskListDetails = (request) => {
  return get(request, entries.taskListDetails)
}

const setTaskListDetails = (request, value) => {
  set(request, entries.taskListDetails, keys.taskList.registrationTaskDetails, value)
}

const getInEngland = (request) => {
  return get(request, entries.eligibility, keys.eligibility.inEngland)
}

const setInEngland = (request, value) => {
  set(request, entries.eligibility, keys.eligibility.inEngland, value)
}

module.exports = {
  getTaskListDetails,
  setTaskListDetails,
  getInEngland,
  setInEngland
}
