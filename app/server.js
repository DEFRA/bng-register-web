const hapi = require('@hapi/hapi')
const config = require('./config')
const catbox = config.useRedis
  ? require('@hapi/catbox-redis')
  : require('@hapi/catbox-memory')
const cacheConfig = config.useRedis ? config.cache.options : {}

const createServer = async () => {
  // Create the hapi server
  const server = hapi.server({
    port: config.port,
    routes: {
      validate: {
        options: {
          abortEarly: false
        }
      }
    },
    router: {
      stripTrailingSlash: true
    },
    cache: [{
      provider: {
        constructor: catbox,
        options: cacheConfig
      }
    }]
  })

  // Register the plugins
  await server.register(require('@hapi/inert'))
  await server.register(require('./plugins/views'))
  await server.register(require('./plugins/router'))
  await server.register(require('./plugins/error-pages'))
  await server.register(require('./plugins/crumb'))
  await server.register(require('./plugins/session-cache'))
  await server.register(require('./plugins/logging'))
  await server.register(require('./plugins/view-context'))
  await server.register(require('./plugins/cookies'))

  if (config.isDev) {
    await server.register(require('blipp'))
  }

  return server
}

module.exports = createServer
