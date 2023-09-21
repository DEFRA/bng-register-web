const path = require('path')
const allowedFileExtensions = require('./constants/allowed-file-extensions').fileExtensions

const checkFileExtension = (fileName) => {
  const fileExtensionAllowed = allowedFileExtensions.includes(path.extname(fileName).substring(1))
  if (!fileExtensionAllowed) {
    throw new Error('File extension not allowed')
  }
}

const checkFileSize = (fileBuffer) => {
  const fileBytes = Buffer.byteLength(fileBuffer, 'utf8')

  if (fileBytes === 0) {
    throw new Error('File size is zero')
  }

  if (fileBytes > 5000000) {
    throw new Error('File size too large')
  }
}

const validateFile = (fileName, fileBuffer) => {
  if (!fileName) throw new Error('No file name')
  checkFileExtension(fileName)
  checkFileSize(fileBuffer)
}

module.exports = validateFile
