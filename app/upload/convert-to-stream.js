const { Readable } = require('stream')

const convertToStream = (fileBuffer) => {
  const stream = new Readable()
  stream.push(fileBuffer)
  stream.push(null)

  return stream
}

module.exports = convertToStream
