const { uuid } = require('uuidv4')
const convertToStream = require('./convert-to-stream')
const checkFileScan = require('./check-file-scan')
const { getFileGroupReference, setFileGroupReference } = require('./constants/session')
const { uploadInboundFile } = require('../storage')

const fileGroupRefernce = (request) => {
  let fileReference = getFileGroupReference(request)

  if (!fileReference) {
    fileReference = uuid()
    setFileGroupReference(request, fileReference)
  }

  return fileReference
}

const uploadFile = async (request, folder) => {
  const fileName = request.payload.landBoundary.hapi.filename
  const fileBuffer = request.payload.landBoundary._data
  const fileStream = convertToStream(fileBuffer)
  const blobClient = await uploadInboundFile(fileStream, `${fileGroupRefernce(request)}/${folder}`, fileName)
  return checkFileScan(blobClient)
}

module.exports = uploadFile
