const checkFileScan = async (blobClient) => {
  const maxTime = 10000
  const interval = 100
  let scanDone = false
  let timeTaken = 0
  let tags

  do {
    tags = await blobClient.getTags()
    scanDone = tags.blobTagSet.length !== 0
    await new Promise(resolve => setTimeout(resolve, interval))
    timeTaken += interval
  } while (!scanDone && (timeTaken < maxTime))

  if (scanDone) {
    console.log(`Scan results ready in ${timeTaken / 1000} seconds`)
    console.log(`Scan result: ${tags.blobTagSet[0].value}`)
  } else {
    console.log(`Scan results not ready after ${maxTime / 1000} seconds`)
  }

  return scanDone
}

module.exports = checkFileScan
