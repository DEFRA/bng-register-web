const { get, set } = require('../../session')
const keys = require('./keys')

const entries = {
  registrationFiles: 'registrationFiles'
}

const getRegistrationFiles = (request) => {
  return get(request, entries.registrationFiles)
}

const getFileGroupReference = (request) => {
  return get(request, entries.registrationFiles, keys.fileGroupReference)
}

const setFileGroupReference = (request, value) => {
  set(request, entries.registrationFiles, keys.fileGroupReference, value)
}

const getLandBoundaryFile = (request) => {
  return get(request, entries.registrationFiles, keys.files.landboundary)
}

const setLandBoundaryFile = (request, value) => {
  set(request, entries.registrationFiles, keys.files.landboundary, value)
}

module.exports = {
  getRegistrationFiles,
  getFileGroupReference,
  setFileGroupReference,
  getLandBoundaryFile,
  setLandBoundaryFile
}
