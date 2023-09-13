const routes = [].concat(
  require('../routes/home'),
  require('../routes/check-you-can-register'),
  require('../routes/eligibility/site-in-england'),
  require('../routes/cookie'),
  require('../routes/healthy'),
  require('../routes/healthz'),
  require('../routes/static')
)

module.exports = {
  plugin: {
    name: 'router',
    register: (server, options) => {
      server.route(routes)
    }
  }
}